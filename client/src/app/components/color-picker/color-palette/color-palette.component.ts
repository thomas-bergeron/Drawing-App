import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from 'src/app/shared/global';

// Ce composant a ete construit a l'aide du tutoriel suivant
// https://malcoded.com/posts/angular-color-picker/

@Component({
	selector: 'app-color-palette',
	templateUrl: './color-palette.component.html',
	styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements AfterViewInit, OnChanges {
	@ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

	@Input() hue: string;
	@Output() color: EventEmitter<string> = new EventEmitter();

	private ctx: CanvasRenderingContext2D;

	private selectedPosition: Vec2;

	constructor(private drawingService: DrawingService) {
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
	}

	ngAfterViewInit(): void {
		this.selectedPosition = { x: this.canvas.nativeElement.width - 1, y: 0 };
		this.draw();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.hue && this.canvas) {
			this.draw();
			this.emitColor(this.selectedPosition.x, this.selectedPosition.y);
		}
	}

	onMouseDown(evt: MouseEvent): void {
		document.body.addEventListener('mousemove', this.onMouseMove);
		document.body.addEventListener('mouseup', this.onMouseUp);
		this.onMouseMove(evt);
	}

	private onMouseUp(): void {
		document.body.removeEventListener('mousemove', this.onMouseMove);
		document.body.removeEventListener('mouseup', this.onMouseUp);
	}

	private onMouseMove(evt: MouseEvent): void {
		const canvasDimensions = this.canvas.nativeElement.getBoundingClientRect();

		let x = evt.x - canvasDimensions.left;
		x = x < 0 ? 0 : x >= canvasDimensions.width ? canvasDimensions.width - 1 : x;

		let y = evt.y - canvasDimensions.top;
		y = y < 0 ? 0 : y > canvasDimensions.height ? canvasDimensions.height : y;

		this.selectedPosition = { x, y };
		this.draw();
		this.emitColor(x, y);
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

		this.ctx.fillStyle = this.hue;
		this.ctx.fillRect(1, 0, width - 1, height - 1);

		const whiteGrad = this.ctx.createLinearGradient(0, 0, width - 1, 0);
		whiteGrad.addColorStop(0, '#FFFFFFFF');
		whiteGrad.addColorStop(1, '#FFFFFF00');

		this.ctx.fillStyle = whiteGrad;
		this.ctx.fillRect(0, 0, width - 1, height);

		const blackGrad = this.ctx.createLinearGradient(0, 0, 0, height - 1);
		blackGrad.addColorStop(0, '#00000000');
		blackGrad.addColorStop(1, '#000000FF');

		this.ctx.fillStyle = blackGrad;
		this.ctx.fillRect(0, 1, width, height - 1);

		this.ctx.strokeStyle = 'white';
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.arc(this.selectedPosition.x, this.selectedPosition.y, Global.SELECTED_RECTANGLE_HEIGHT, 0, 2 * Math.PI);
		this.ctx.lineWidth = Global.SELECTED_LINE_WIDTH;
		this.ctx.stroke();
	}
}
