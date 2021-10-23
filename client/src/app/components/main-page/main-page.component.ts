import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WarningComponent } from '@app/components/warning/warning.component';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
	readonly title: string = 'PolyDessin 2';
	thereIsDrawing: boolean = false;

	constructor(public dialog: MatDialog, private router: Router, private drawingService: DrawingService) {
		if (localStorage.getItem('save') !== null) {
			this.thereIsDrawing = true;
		}
	}
	newDrawing(): void {
		if (this.thereIsDrawing) {
			const dialogRef = this.dialog.open(WarningComponent, { panelClass: 'custom-warning-container' });
			dialogRef.afterClosed().subscribe((result) => {
				if (result) {
					this.drawingService.canvasImage = '';
					this.router.navigate(['/editor']);
				}
			});
		} else {
			this.drawingService.canvasImage = '';
			this.router.navigate(['/editor']);
		}
	}
	continueDrawing(): void {
		this.drawingService.canvasImage = localStorage.getItem('save') as string;
		this.router.navigate(['/editor']);
	}
	openModal(): void {
		const dialogRef = this.dialog.open(CarrouselComponent, { panelClass: 'custom-carrousel-container' });
		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.router.navigate(['/editor']);
			}
		});
	}
}
