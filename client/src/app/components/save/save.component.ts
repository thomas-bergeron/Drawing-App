import { ENTER } from '@angular/cdk/keycodes';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { StatusCodes } from 'http-status-codes';
import { SaveService } from 'src/app/services/index/save.service';
@Component({
	selector: 'app-save',
	templateUrl: './save.component.html',
	styleUrls: ['./save.component.scss'],
})
export class SaveComponent implements OnInit {
	name: string = '';
	etiquettes: string[] = [];
	separatorKeysCodes: number[] = [ENTER];
	image: string = '';
	isSaving: boolean = false;
	constructor(
		private basicService: SaveService,
		private drawingService: DrawingService,
		private snackBar: MatSnackBar,
		private dialog: MatDialogRef<SaveComponent>,
	) {}

	ngOnInit(): void {
		this.image = this.getDataUrl(this.drawingService.baseCtx.canvas);
	}

	getDataUrl(canvas: HTMLCanvasElement): string {
		return canvas.toDataURL('tmp/png');
	}

	addEtiquette(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;

		// Add etiquette
		if (value.length > Global.ETIQUETTE_MAX_VALUE) {
			this.snackBar.open('étiquette tros grand', '', {
				duration: 2000,
			});
		} else {
			if (this.etiquettes.indexOf(value) === -Global.ONE) {
				this.etiquettes.push(value);
			} else {
				// afficher index existe deja
				this.snackBar.open('étiquette déjà sélectionné', '', {
					duration: 5000,
				});
			}
		}
		// Reset the input value
		if (input) {
			input.value = '';
		}
	}

	removeEtiquette(etiquette: string): void {
		const index = this.etiquettes.indexOf(etiquette);
		if (index >= 0) {
			this.etiquettes.splice(index, 1);
		}
	}

	sendServer(): void {
		if (this.name === '') {
			this.snackBar.open('Donnez un nom', '', {
				duration: 5000,
			});
			return;
		}
		// afficher sauvegarde en cours
		this.isSaving = true;
		this.snackBar.open('en sauvegarde', '', {
			duration: 5000,
		});

		this.drawingService.baseCtx.canvas.toBlob((blob: Blob) => {
			const data = new FormData();
			data.append('dessin', blob, this.name);
			data.append('tags', JSON.stringify(this.etiquettes));

			this.basicService.basicPost(data).subscribe((response: HttpResponse<void>) => {
				let message = '';
				switch (response.status) {
					case StatusCodes.CREATED:
						message = 'le dessin a été sauvegardé';
						break;
					case StatusCodes.BAD_REQUEST:
						message = 'Il y a une erreur dans les données';
						break;
					case StatusCodes.INTERNAL_SERVER_ERROR:
						message = 'Une erreur est survenue';
						break;
				}
				// get la reponse du serveur
				this.isSaving = false;
				this.snackBar.open(message, '', {
					duration: 5000,
				});
				this.name = '';
				this.etiquettes = [];
			});
			this.dialog.close();
		});
	}

	close(): void {
		this.name = '';
		this.etiquettes = [];
	}
}
