import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from 'src/app/shared/global';

// Ce composant a ete construit a l'aide du tutoriel suivant
// https://malcoded.com/posts/angular-color-picker/

@Component({
	selector: 'app-color-slider',
	templateUrl: './color-slider.component.html',
	styleUrls: ['./color-slider.component.scss'],
})
export class ColorSliderComponent implements AfterViewInit {
	@ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
	@Output() color: EventEmitter<string> = new EventEmitter();

	private ctx: CanvasRenderingContext2D;
	private selectedHeight: number;

	constructor(private drawingService: DrawingService) {
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
	}

	ngAfterViewInit(): void {
		this.selectedHeight = 1;
		this.draw();
	}

	private onMouseUp(): void {
		document.body.removeEventListener('mousemove', this.onMouseMove);
		document.body.removeEventListener('mouseup', this.onMouseUp);
	}

	onMouseDown(evt: MouseEvent): void {
		document.body.addEventListener('mousemove', this.onMouseMove);
		document.body.addEventListener('mouseup', this.onMouseUp);
		this.onMouseMove(evt);
	}

	private onMouseMove(evt: MouseEvent): void {
		const canvasDimensions = this.canvas.nativeElement.getBoundingClientRect();

		let y = evt.y - canvasDimensions.top;
		y = y < 0 ? 0 : y >= canvasDimensions.height ? canvasDimensions.height - 1 : y;

		this.selectedHeight = y;
		this.draw();
		this.emitColor(this.canvas.nativeElement.width / 2, y);
	}

	private emitColor(x: number, y: number): void {
		const hexColor = this.getColorAtPosition(x, y);
		this.color.emit(hexColor);
	}

	private getColorAtPosition(x: number, y: number): string {
		const imageData = this.ctx.getImageData(x, y, 1, 1).data;
		return this.drawingService.RGBToHex(imageData[0], imageData[1], imageData[2]);
	}

	private draw(): void {
		if (!this.ctx) {
			this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
		}

		const width = this.canvas.nativeElement.width;
		const height = this.canvas.nativeElement.height;

		const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
		// tslint:disable:no-magic-numbers
		gradient.addColorStop(0, '#FF0000');
		gradient.addColorStop(1 / 6, '#FFFF00');
		gradient.addColorStop(1 / 3, '#00FF00');
		gradient.addColorStop(1 / 2, '#00FFFF');
		gradient.addColorStop(2 / 3, '#0000FF');
		gradient.addColorStop(5 / 6, '#FF00FF');
		gradient.addColorStop(1, '#FF0000');
		// tslint:enable:no-magic-numbers

		this.ctx.beginPath();
		this.ctx.rect(0, 0, width, height);
		this.ctx.fillStyle = gradient;
		this.ctx.fill();
		this.ctx.closePath();

		this.ctx.beginPath();
		this.ctx.strokeStyle = 'white';
		this.ctx.lineWidth = Global.SELECTED_LINE_WIDTH;
		this.ctx.rect(0, this.selectedHeight - Global.SELECTED_LINE_WIDTH, width, Global.SELECTED_RECTANGLE_HEIGHT);
		this.ctx.stroke();
		this.ctx.closePath();
	}
}
