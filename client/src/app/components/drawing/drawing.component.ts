import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { GridService } from '@app/services/grid/grid.service';
import { Global } from '@app/shared/global';

@Component({
	selector: 'app-drawing',
	templateUrl: './drawing.component.html',
	styleUrls: ['./drawing.component.scss'],
})
export class DrawingComponent implements AfterViewInit {
	@ViewChild('baseCanvas', { static: false })
	baseCanvas: ElementRef<HTMLCanvasElement>;
	// On utilise ce canvas pour dessiner sans affecter le dessin final
	@ViewChild('previewCanvas', { static: false })
	previewCanvas: ElementRef<HTMLCanvasElement>;
	@ViewChild('container', { static: false })
	container: ElementRef<HTMLDivElement>;
	isResizing: boolean;
	private baseCtx: CanvasRenderingContext2D;
	private previewCtx: CanvasRenderingContext2D;
	canvasSize: Vec2;
	canvasResizePreview: Vec2;
	canvasLimit: Vec2;

	constructor(private drawingService: DrawingService, private eventManager: EventManagerService, public gridService: GridService) {
		this.isResizing = false;
		this.canvasSize = { x: Global.DEFAULT_WIDTH, y: Global.DEFAULT_HEIGHT };
		this.canvasResizePreview = { x: Global.DEFAULT_WIDTH, y: Global.DEFAULT_HEIGHT };
		this.canvasLimit = { x: Global.DEFAULT_WIDTH, y: Global.DEFAULT_HEIGHT };
		this.gridService.options.gridOptions.isActive = false;
	}

	ngAfterViewInit(): void {
		this.baseCtx = this.baseCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
		this.drawingService.baseCtx = this.baseCtx;
		this.previewCtx = this.previewCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
		this.drawingService.previewCtx = this.previewCtx;
		this.drawingService.containerSize.x = this.container.nativeElement.clientWidth;
		this.drawingService.containerSize.y = this.container.nativeElement.clientHeight;
		this.drawingService.canvasSize = this.canvasSize;

		setTimeout(() => {
			this.canvasLimit.x = this.drawingService.containerSize.x - Global.DRAWING_CONTAINER_SIZE_BUFFER;
			this.canvasLimit.y = this.drawingService.containerSize.y - Global.DRAWING_CONTAINER_SIZE_BUFFER;
			this.drawingService.initCanvas();
		});
	}

	get canvasWidth(): number {
		return this.canvasSize.x;
	}

	get canvasHeight(): number {
		return this.canvasSize.y;
	}
	get limitWidth(): number {
		return this.canvasLimit.x;
	}

	get limitHeight(): number {
		return this.canvasLimit.y;
	}

	get canvasPreview(): Vec2 {
		return this.canvasResizePreview;
	}

	get cornerResizePos(): Vec2 {
		return this.drawingService.cornerResizePos;
	}

	get rightResizePos(): Vec2 {
		return this.drawingService.rightResizePos;
	}

	get bottomResizePos(): Vec2 {
		return this.drawingService.bottomResizePos;
	}

	onMouseDown(event: MouseEvent): void {
		if (!this.isResizing) {
			this.eventManager.startDrawing(event);
		}
	}

	startPreview(): void {
		this.isResizing = true;
	}

	preview(distanceX: number, distanceY: number): void {
		this.canvasResizePreview.x = this.canvasSize.x + distanceX;
		this.canvasResizePreview.y = this.canvasSize.y + distanceY;
		this.drawingService.placeResizeButton(this.canvasResizePreview);
	}

	endPreview(): void {
		const oldCanvas = this.baseCtx.canvas.toDataURL();
		const img = new Image();
		this.isResizing = false;
		this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = this.canvasResizePreview.x;
		this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = this.canvasResizePreview.y;
		this.baseCtx.fillStyle = 'white';
		this.baseCtx.fillRect(0, 0, this.canvasSize.x, this.canvasSize.y);
		this.drawingService.placeResizeButton(this.canvasSize);
		img.onload = () => {
			this.baseCtx.drawImage(img, 0, 0);
			localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
		};
		img.src = oldCanvas;
		const canSize = { ...this.canvasResizePreview };
		const funcResize: CallableFunction = () => {
			this.actionWrapper(img, oldCanvas, canSize);
		};
		this.drawingService.addAction(funcResize);
	}

	actionWrapper(img: HTMLImageElement, oldCanvas: string, canSize: Vec2): void {
		this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = canSize.x;
		this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = canSize.y;
		this.drawingService.placeResizeButton(this.canvasSize);
		img.onload = () => {
			this.baseCtx.drawImage(img, 0, 0);
		};
		img.src = oldCanvas;
	}
}
