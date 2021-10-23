import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseButton } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class SprayService extends Tool {
	private pathData: Vec2[];
	private pointPath: Vec2[] = [];

	info: ToolInfo = new ToolInfo('spray', 'Aérosol', 'a');
	options: ToolOption = new ToolOption(undefined, false, true);
	spray: ReturnType<typeof setInterval>;
	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.clearPath();
	}

	onMouseDown(event: MouseEvent): void {
		this.isDrawing = event.button === MouseButton.Left;
		if (this.isCanvasReady()) {
			this.mouseDownCoord = this.getPagePositionFromMouse(event);
			this.spray = setInterval(() => {
				this.updateView(this.mouseDownCoord, this.drawingService.previewCtx, this.pathData);
			}, Global.TIME_DELAY);
		}
	}

	private updateView(lastPoint: Vec2, ctx: CanvasRenderingContext2D, path: Vec2[]): void {
		path.push(lastPoint);
		this.generateSpray(lastPoint);

		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		const options: ToolOption = new ToolOption(undefined, false, true);
		options.sprayOptions = { ...this.options.sprayOptions };
		options.size = this.options.size;
		this.drawLine(ctx, this.pointPath, options, this.drawingService.primaryColor);
	}

	private generateSpray(point: Vec2): void {
		const radius = this.options.sprayOptions.spraySize;
		const dotsPerTick = (this.options.sprayOptions.sprayTime * Global.TIME_DELAY) / Global.SECOND_MS;
		for (let i = 0; i < dotsPerTick; i++) {
			const offSet: Vec2 = this.randomPoint(radius, point);
			this.pointPath.push(offSet);
		}
	}

	private randomPoint(radius: number, origin: Vec2): Vec2 {
		for (;;) {
			const x: number = Math.random() * 2 - 1;
			const y: number = Math.random() * 2 - 1;
			if (x * x + y * y <= 1) {
				return { x: radius * x + origin.x, y: radius * y + origin.y } as Vec2;
			}
		}
	}

	onMouseUp(event: MouseEvent): void {
		clearInterval(this.spray);
		if (this.isDrawing) {
			const mousePosition = this.getPagePositionFromMouse(event);
			this.updateView(mousePosition, this.drawingService.baseCtx, this.pathData);
			const path: Vec2[] = [...this.pointPath];
			const info = { options: { ...this.options }, color: this.drawingService.primaryColor };
			info.options.sprayOptions = { ...this.options.sprayOptions };
			const func: CallableFunction = () => {
				this.drawLine(this.drawingService.baseCtx, path, info.options, info.color);
			};
			this.drawingService.addAction(func);
		}
		this.isDrawing = false;

		this.clearPath();
	}

	onMouseMove(event: MouseEvent): void {
		this.drawingService.previewCtx.canvas.style.cursor = 'crosshair';
		if (this.isCanvasReady()) {
			const mousePosition = this.getPagePositionFromMouse(event);
			this.mouseDownCoord = mousePosition;
		}
	}

	private isCanvasReady(): boolean {
		return this.isDrawing;
	}

	private drawLine(ctx: CanvasRenderingContext2D, path: Vec2[], options: ToolOption, color: string): void {
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.fillStyle = color;
		ctx.beginPath();
		for (const pts of path) {
			ctx.fillRect(pts.x, pts.y, options.sprayOptions.dropletSize, options.sprayOptions.dropletSize);
		}
	}

	private clearPath(): void {
		this.pathData = [];
		this.pointPath = [];
	}
}
