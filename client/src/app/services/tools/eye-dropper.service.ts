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
export class EyeDropperService extends Tool {
	private readonly PIXEL_SCALE: number = 16;
	private readonly CURSOR_SIZE: number = 40;
	private CURSOR: HTMLImageElement = new Image();

	info: ToolInfo = new ToolInfo('eye-dropper', 'EyeDropper', 'i');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE);

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.CURSOR.src = '../../assets/eye-dropper.png';
	}

	onMouseDown(event: MouseEvent): void {
		const position: Vec2 = this.getPagePositionFromMouse(event);
		const color = this.drawingService.baseCtx.getImageData(position.x, position.y, 1, 1).data;

		if (event.button === MouseButton.Left) {
			this.drawingService.changeColor(this.drawingService.RGBToHex(color[0], color[1], color[2], color[Global.GREEN_INDEX_HEX]), true, true);
		} else {
			this.drawingService.changeColor(this.drawingService.RGBToHex(color[0], color[1], color[2], color[Global.GREEN_INDEX_HEX]), false, true);
		}
	}

	onMouseMove(event: MouseEvent): void {
		const canvas = document.getElementById('eye-dropper-canvas') as HTMLCanvasElement;
		const context = canvas.getContext('2d') as CanvasRenderingContext2D;

		this.drawingService.clearCanvas(context);
		this.drawingService.clearCanvas(this.drawingService.previewCtx);

		const cursor: Vec2 = this.getPagePositionFromMouse(event);
		if (cursor.x >= 0 && cursor.x <= this.drawingService.canvasSize.x && cursor.y >= 0 && cursor.y <= this.drawingService.canvasSize.y) {
			this.drawZoom(context, cursor);
			this.drawCursor(this.drawingService.previewCtx, cursor);
		}
	}

	private drawZoom(ctx: CanvasRenderingContext2D, position: Vec2): void {
		const radius = ctx.canvas.width / (this.PIXEL_SCALE * 2);
		const previewCtx: CanvasRenderingContext2D = this.drawingService.previewCtx;
		const baseCtx: CanvasRenderingContext2D = this.drawingService.baseCtx;

		ctx.imageSmoothingQuality = 'low';
		ctx.imageSmoothingEnabled = false;

		previewCtx.save();

		previewCtx.beginPath();
		previewCtx.ellipse(position.x, position.y, radius, radius, 0, 0, 2 * Math.PI);
		previewCtx.closePath();
		previewCtx.clip();
		previewCtx.drawImage(baseCtx.canvas, 0, 0);
		previewCtx.restore();

		ctx.drawImage(previewCtx.canvas, position.x - radius, position.y - radius, radius * 2, radius * 2, 0, 0, ctx.canvas.width, ctx.canvas.height);
		this.drawingService.clearCanvas(previewCtx);

		ctx.lineWidth = 2;
		ctx.globalCompositeOperation = 'difference';
		ctx.strokeStyle = 'white';
		ctx.strokeRect(ctx.canvas.width / 2, ctx.canvas.height / 2, this.PIXEL_SCALE, this.PIXEL_SCALE / 2);
	}

	private drawCursor(ctx: CanvasRenderingContext2D, position: Vec2): void {
		ctx.drawImage(this.CURSOR, position.x, position.y - this.CURSOR_SIZE, this.CURSOR_SIZE, this.CURSOR_SIZE);
	}
}
