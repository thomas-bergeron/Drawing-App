import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { Global, MouseButton } from '@app/shared/global';
import { DrawingService } from 'src/app/services/drawing/drawing.service';

@Injectable({
	providedIn: 'root',
})
export class StampService extends Tool {
	private readonly DEFAULT_ORIENTATION_INCREMENT: number = 15;
	private readonly MAX_ORIENTATION: number = 360;

	info: ToolInfo = new ToolInfo('stamp', 'Stamp', 'd');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE, false, false, false, true);

	constructor(drawingService: DrawingService) {
		super(drawingService);
	}

	onMouseMove(event: MouseEvent): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);

		const pos: Vec2 = this.getPagePositionFromMouse(event);
		if (pos.x < 0 || pos.x >= this.drawingService.canvasSize.x || pos.y < 0 || pos.y >= this.drawingService.canvasSize.y) return;

		const [image, size] = this.getImageInfo();
		this.drawImage(this.drawingService.previewCtx, image, pos, size, this.options.stampOptions.orientation);
	}

	onMouseDown(event: MouseEvent): void {
		if (event.button !== MouseButton.Left) return;

		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		const [image, size] = this.getImageInfo();
		const pos: Vec2 = this.getPagePositionFromMouse(event);
		const orientation = this.options.stampOptions.orientation;
		const drawImageCallable: CallableFunction = () => {
			this.drawImage(this.drawingService.baseCtx, image, pos, size, orientation);
		};
		drawImageCallable();
		this.drawingService.addAction(drawImageCallable);
	}

	onWheel(event: WheelEvent): void {
		let incrementFactor = event.altKey ? 1 : this.DEFAULT_ORIENTATION_INCREMENT;
		// tslint:disable-next-line:no-magic-numbers
		incrementFactor *= event.deltaY > 0 ? 1 : -1;

		const oldOrientation = this.options.stampOptions.orientation;
		const newOrientation = oldOrientation - incrementFactor;
		if (newOrientation < 0) {
			this.options.stampOptions.orientation = 0;
		} else if (newOrientation > this.MAX_ORIENTATION) {
			this.options.stampOptions.orientation = this.MAX_ORIENTATION;
		} else {
			this.options.stampOptions.orientation = newOrientation;
		}

		if (this.options.stampOptions.orientation !== oldOrientation) this.onMouseMove(event);
	}

	private getImageInfo(): [HTMLImageElement, Vec2] {
		const image = new Image();
		image.src = this.options.stampOptions.stampSrc;
		const size: Vec2 = {
			x: image.width * this.options.stampOptions.scalingFactor,
			y: image.height * this.options.stampOptions.scalingFactor,
		};

		return [image, size];
	}

	private drawImage(ctx: CanvasRenderingContext2D, image: HTMLImageElement, pos: Vec2, size: Vec2, orientation: number): void {
		ctx.save();
		ctx.translate(pos.x, pos.y);
		// disable pour ecrire 180 degres qui ne changera jamais
		// tslint:disable-next-line:no-magic-numbers
		ctx.rotate((orientation * Math.PI) / 180);
		ctx.drawImage(image, -size.x / 2, -size.y / 2, size.x, size.y);
		ctx.restore();
	}
}
