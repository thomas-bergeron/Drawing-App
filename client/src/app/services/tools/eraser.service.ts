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
export class EraserService extends Tool {
	private pathData: Vec2[];

	info: ToolInfo = new ToolInfo('eraser', 'Efface', 'e');
	options: ToolOption = new ToolOption(undefined, false, false, Global.ERASER_MIN_TRAIL_SIZE);

	private cursor: Vec2;

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.clearPath();
	}

	onMouseDown(event: MouseEvent): void {
		this.isDrawing = event.button === MouseButton.Left;
		if (this.isDrawing) {
			this.clearPath();
			this.cursor = this.getPagePositionFromMouse(event);
			this.pathData.push(this.cursor);

			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.erase(this.drawingService.previewCtx, this.pathData, this.options);
			this.drawCursor(this.drawingService.previewCtx, this.cursor);
		}
	}

	onMouseUp(event: MouseEvent): void {
		if (this.isDrawing) {
			const mousePosition = this.getPagePositionFromMouse(event);
			this.pathData.push(mousePosition);
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.erase(this.drawingService.baseCtx, this.pathData, this.options);
			this.isDrawing = false;
			const path: Vec2[] = [...this.pathData];
			const options = { ...this.options };
			const funcErase: CallableFunction = () => {
				this.erase(this.drawingService.baseCtx, path, options);
			};
			this.drawingService.addAction(funcErase);
		}
		this.isDrawing = false;
		this.clearPath();
	}

	onMouseMove(event: MouseEvent): void {
		this.cursor = this.getPagePositionFromMouse(event);
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		if (this.isDrawing) {
			this.pathData.push(this.cursor);
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.erase(this.drawingService.previewCtx, this.pathData, this.options);
		}

		this.drawCursor(this.drawingService.previewCtx, this.cursor);
	}

	private erase(ctx: CanvasRenderingContext2D, path: Vec2[], options: ToolOption): void {
		const strokeStyle = ctx.strokeStyle;
		ctx.fillStyle = 'white';
		ctx.lineWidth = options.size;
		ctx.fillRect(path[0].x - options.size / 2, path[0].y - options.size / 2, options.size, options.size);

		for (let i = 0; i < path.length - 1; i++) {
			let point0 = { x: path[i].x, y: path[i].y };
			let point1 = { x: path[i + 1].x, y: path[i + 1].y };
			let deltas = { x: point1.x - point0.x, y: point1.y - point0.y };
			const isYAxis = Math.abs(deltas.y) > Math.abs(deltas.x);

			if (isYAxis) {
				point0 = { x: path[i].y, y: path[i].x };
				point1 = { x: path[i + 1].y, y: path[i + 1].x };
				deltas = { x: point1.x - point0.x, y: point1.y - point0.y };
			}
			if (point0.x > point1.x) {
				let tmp = {} as Vec2;
				tmp = point0;
				point0 = point1;
				point1 = tmp;
			}
			this.plotLine(ctx, point0, point1, deltas, isYAxis, options);
		}
		ctx.strokeStyle = strokeStyle;
	}

	private plotLine(ctx: CanvasRenderingContext2D, point0: Vec2, point1: Vec2, deltas: Vec2, isYAxis: boolean, options: ToolOption): void {
		const slope = deltas.y / deltas.x;
		const abscissa = point0.y - slope * point0.x;

		for (let x = point0.x; x < point1.x; x += 2) {
			const y = slope * x + abscissa;

			if (isYAxis) {
				ctx.fillRect(y - options.size / 2, x - options.size / 2, options.size, options.size);
			} else {
				ctx.fillRect(x - options.size / 2, y - options.size / 2, options.size, options.size);
			}
		}
	}

	private clearPath(): void {
		this.pathData = [];
	}

	private drawCursor(ctx: CanvasRenderingContext2D, cursor: Vec2): void {
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 1;
		ctx.strokeRect(cursor.x - this.options.size / 2, cursor.y - this.options.size / 2, this.options.size, this.options.size);
		ctx.fillStyle = 'white';
		ctx.fillRect(cursor.x - this.options.size / 2, cursor.y - this.options.size / 2, this.options.size, this.options.size);
	}
}
