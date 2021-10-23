import { ENTER } from '@angular/cdk/keycodes';
import { HttpResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { Dessin } from '@common/communication/dessin';
import { StatusCodes } from 'http-status-codes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SaveService } from 'src/app/services/index/save.service';

@Component({
	selector: 'app-carrousel',
	templateUrl: './carrousel.component.html',
	styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
	// isLoading:boolean = false;
	outOfBounds: number = -1;
	indexFiche: number = 0;
	readonly separatorKeysCodes: number[] = [ENTER];
	allDrawing: Dessin[] = [];
	filteredDrawing: number[] = [];
	emptyDrawing: Dessin = {
		name: 'Dessin vide',
		etiquette: [],
		image: '',
	};
	previousIsLoading: boolean = false;
	centerIsLoading: boolean = false;
	nextIsLoading: boolean = false;
	etiquettes: string[] = [];
	selectedEtiquettes: string[] = [];
	filteredEtiquettes: Observable<string[]>;
	etiquetteCtrl: FormControl = new FormControl();

	@ViewChild('auto') matAutocomplete: MatAutocomplete;
	@ViewChild('etiquetteInput') etiquetteInput: ElementRef<HTMLInputElement>;

	constructor(
		private basicService: SaveService,
		private drawingService: DrawingService,
		private snackBar: MatSnackBar,
		private dialog: MatDialogRef<CarrouselComponent>,
	) {
		this.filteredEtiquettes = this.etiquetteCtrl.valueChanges.pipe(
			startWith(null),
			map((etiquette: string | null) => (etiquette ? this._filter(etiquette) : this.etiquettes.slice())),
		);
	}

	async ngOnInit(): Promise<void> {
		await this.getAllDrawing();
		this.noDrawingFilter();
		this.allDrawing.forEach((dessin) => {
			dessin.etiquette.forEach((etiquette) => {
				if (this.etiquettes.indexOf(etiquette) === -Global.ONE) this.etiquettes.push(etiquette);
			});
		});
	}

	@HostListener('document:keydown', ['$event'])
	handleKeyboardEventDown(event: KeyboardEvent): void {
		if ((document.activeElement as Element).id !== 'etiquetteInput') {
			event.preventDefault();
			switch (event.key) {
				case 'ArrowLeft':
					this.increaseIndex();
					break;
				case 'ArrowRight':
					this.decreaseIndex();
					break;
			}
		}
	}

	// mettre subscribe dans le INIT
	// on destroy retirer subscribe
	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;
		// Add etiquette
		if (this.selectedEtiquettes.indexOf(value) === this.outOfBounds) {
			const index = this.etiquettes.findIndex((x) => x === value);
			if (index >= 0) {
				this.selectedEtiquettes.push(this.etiquettes[index]);
				this.setDrawingFilter();
			} else {
				if (document.activeElement === document.getElementById('etiquetteInput')) {
					this.snackBar.open('étiquette non existant', '', {
						duration: 2000,
					});
				}
			}
		}
		// Reset the input value
		if (input) {
			input.value = '';
		}
		this.etiquetteCtrl.setValue(null);
	}

	remove(etiquette: string): void {
		const index = this.selectedEtiquettes.indexOf(etiquette);
		if (index >= 0) {
			this.selectedEtiquettes.splice(index, Global.ONE);
			if (this.selectedEtiquettes.length === 0) {
				this.noDrawingFilter();
			} else {
				this.setDrawingFilter();
			}
		}
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		if (this.selectedEtiquettes.indexOf(event.option.value) === this.outOfBounds) {
			this.selectedEtiquettes.push(event.option.value);
			this.setDrawingFilter();
		}
		this.etiquetteInput.nativeElement.value = '';
		this.etiquetteCtrl.setValue(null);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		return this.etiquettes.filter(
			(etiquette) => etiquette.toLowerCase().indexOf(filterValue) === 0 && this.selectedEtiquettes.indexOf(etiquette) === this.outOfBounds,
		);
	}

	private setDrawingFilter(): void {
		this.filteredDrawing = [];
		this.indexFiche = 0;
		for (let i = 0; i < this.allDrawing.length; i++) {
			this.selectedEtiquettes.forEach((etiquettes) => {
				if (this.allDrawing[i].etiquette.indexOf(etiquettes) !== -Global.ONE && this.filteredDrawing.indexOf(i) === -Global.ONE)
					this.filteredDrawing.push(i);
			});
		}
	}

	private noDrawingFilter(): void {
		this.filteredDrawing = [];
		this.indexFiche = 0;
		for (let i = 0; i < this.allDrawing.length; i++) {
			this.filteredDrawing.push(i);
		}
	}

	lesThanThreeDrawing(indexWithOneTwo: number, indexWithTwo: number): Dessin {
		if (this.filteredDrawing.length === 2 && this.indexFiche === indexWithTwo) return this.allDrawing[this.filteredDrawing[Global.ONE]];
		if (this.indexFiche === indexWithOneTwo) return this.allDrawing[this.filteredDrawing[0]];
		return this.emptyDrawing;
	}

	get centerFiche(): Dessin {
		let dessin: Dessin;
		if (this.filteredDrawing.length === 0) return this.emptyDrawing; // 0 dessin
		if (this.filteredDrawing.length < Global.LESS_THEN_THREE_DRAWING) {
			// 1-2 dessin
			dessin = this.lesThanThreeDrawing(0, Global.ONE);
		} else {
			dessin = this.allDrawing[this.filteredDrawing[this.indexFiche]];
		}
		if (dessin.name !== 'Dessin vide' && dessin.image === undefined && !this.centerIsLoading) {
			this.centerIsLoading = true;
			this.addImageToDrawing(dessin).then(() => {
				this.centerIsLoading = false;
			});
		}
		return dessin;
	}

	get previousFiche(): Dessin {
		// 1,2 //-1
		let dessin: Dessin;
		if (this.filteredDrawing.length === 0) return this.emptyDrawing; // 0 dessin
		if (this.filteredDrawing.length < Global.LESS_THEN_THREE_DRAWING) {
			// 1-2 dessin
			dessin = this.lesThanThreeDrawing(1, 2);
		} else {
			dessin = this.allDrawing[this.filteredDrawing[this.indexFiche - 1]];
			if (this.indexFiche - Global.ONE === -Global.ONE)
				dessin = this.allDrawing[this.filteredDrawing[this.filteredDrawing.length - Global.ONE]];
		}
		if (dessin.name !== 'Dessin vide' && dessin.image === undefined && !this.previousIsLoading) {
			this.previousIsLoading = true;
			this.addImageToDrawing(dessin).then(() => {
				this.previousIsLoading = false;
			});
		}
		return dessin;
	}

	get nextFiche(): Dessin {
		// 2-0
		let dessin: Dessin;
		if (this.filteredDrawing.length === 0) return this.emptyDrawing; // 0 dessin
		if (this.filteredDrawing.length < Global.LESS_THEN_THREE_DRAWING) {
			// 1-2 dessin
			dessin = this.lesThanThreeDrawing(2, 0);
		} else {
			dessin = this.allDrawing[this.filteredDrawing[this.indexFiche + Global.ONE]];
			if (this.indexFiche + 1 === this.filteredDrawing.length) dessin = this.allDrawing[this.filteredDrawing[0]];
		}
		if (dessin.name !== 'Dessin vide' && dessin.image === undefined && !this.nextIsLoading) {
			this.nextIsLoading = true;
			this.addImageToDrawing(dessin).then(() => {
				this.nextIsLoading = false;
			});
		}
		return dessin;
	}

	decreaseIndex(): void {
		this.indexFiche--;
		if (this.indexFiche === -Global.ONE)
			this.indexFiche = this.filteredDrawing.length < Global.LESS_THEN_THREE_DRAWING ? 2 : this.filteredDrawing.length - Global.ONE;
	}

	increaseIndex(): void {
		this.indexFiche++;
		if (this.filteredDrawing.length < Global.LESS_THEN_THREE_DRAWING) {
			if (this.indexFiche > 2) this.indexFiche = 0;
		} else {
			if (this.indexFiche >= this.filteredDrawing.length) this.indexFiche = 0;
		}
	}

	async getAllDrawing(): Promise<void> {
		await this.basicService
			.basicGet()
			.then((drawing: Dessin[]) => {
				this.allDrawing = drawing;
			})
			.catch((error) => {
				if (error) {
					this.allDrawing = [];
					this.snackBar.open('une erreur est survenue', '', {
						duration: 2000,
					});
				}
			});
	}

	deleteDrawing(drawing: Dessin): void {
		const data = new FormData();
		data.append('dessin', drawing.name);
		data.append('tags', JSON.stringify(this.etiquettes));
		data.append('id', drawing.id as string);
		this.basicService.deletePost(data).subscribe((response: HttpResponse<void>) => {
			let message = '';
			switch (response.status) {
				case StatusCodes.CREATED:
					message = 'le dessin a été enlevé';
					break;
				case StatusCodes.BAD_REQUEST:
					message = "le dessin n'a pas pu être supprimé";
					break;
				case StatusCodes.INTERNAL_SERVER_ERROR:
					message = 'Une erreur est survenue';
					break;
			}
			this.snackBar.open(message, '', {
				duration: 2000,
			});
		});

		this.allDrawing.splice(this.allDrawing.indexOf(drawing), Global.ONE);
		if (this.selectedEtiquettes.length === 0) {
			this.noDrawingFilter();
		} else {
			this.setDrawingFilter();
		}
	}

	async open(drawing: Dessin): Promise<void> {
		if (drawing.name === 'Dessin vide') {
			this.drawingService.canvasImage = drawing.image as string;
			this.dialog.close(true);
			return;
		}
		if (await this.addImageToDrawing(drawing)) {
			this.drawingService.canvasImage = drawing.image as string;
			this.dialog.close(true);
		} else {
			this.snackBar.open('le dessin ne peut etre affiche', '', {
				duration: 2000,
			});
		}
	}

	async addImageToDrawing(drawing: Dessin): Promise<boolean> {
		return new Promise((success) => {
			this.basicService.getDrawing(drawing.id as string).subscribe(
				async (data) => {
					drawing.image = await this.blobToURL(data);
					success(true);
				},
				(error) => {
					if (error) {
						this.allDrawing.splice(this.allDrawing.indexOf(drawing), 1);
						if (this.selectedEtiquettes.length === 0) {
							this.noDrawingFilter();
						} else {
							this.setDrawingFilter();
						}
						success(false);
					}
				},
			);
		});
	}

	async blobToURL(blob: Blob): Promise<string> {
		const reader = new FileReader();
		return new Promise((success) => {
			reader.addEventListener('load', () => {
				success(reader.result as string);
			});
			reader.readAsDataURL(blob);
		});
	}
}
