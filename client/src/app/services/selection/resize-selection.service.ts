import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { SelectionService } from './selection.service';

@Injectable({
	providedIn: 'root',
})
export class ResizeSelectionService extends Tool {
	info: ToolInfo = new ToolInfo('resize-selection', 'Redimensionnement de sélection', 'resizeSelection');
	options: ToolOption = new ToolOption(0, false, false, 0);
	selector: SelectionService;
	isFirstResize: boolean;
	shiftIsPressed: boolean;

	private size: Vec2;
	private initBoxPosition: Vec2;
	// tslint:disable-next-line: no-empty
	lastAction: CallableFunction = () => {};

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.size = { x: 1, y: 1 };
		this.isFirstResize = true;
		this.shiftIsPressed = false;
	}

	resize(newSize: Vec2, oldSize: Vec2, sign: Vec2, tag: string): Vec2 {
		let mode = 1;
		if (this.isFirstResize) {
			this.isFirstResize = false;
			this.initBoxPosition = this.selector.origin;
			mode = 0;
		}

		sign.x = tag.includes('w') ? -sign.x : sign.x;
		sign.y = tag.includes('n') ? -sign.y : sign.y;

		newSize = { x: Math.sign(sign.x) * newSize.x, y: Math.sign(sign.y) * newSize.y };
		this.updateCanvas(mode, newSize, oldSize);
		Global.IS_FLIPPED = { x: Math.sign(sign.x), y: Math.sign(sign.y) };
		return { x: this.size.x * Math.sign(sign.x), y: this.size.y * Math.sign(sign.y) };
	}

	private minLimitResize(position: Vec2, oldSize: Vec2): Vec2 {
		if (position.x < 0) {
			position.x = 0;
			this.size.x = oldSize.x;
		}

		if (position.y < 0) {
			position.y = 0;
			this.size.y = oldSize.y;
		}

		return position;
	}

	endSelection(): void {
		this.updateCanvas(2, this.size, this.size);
		this.isFirstResize = true;
		this.selector.callPlaceBox(Global.RESET_VECTOR);
	}

	private updateCanvas(mode: number, newSize: Vec2, oldSize: Vec2): void {
		const selection = this.selector.selection;
		this.size.x = newSize.x === 0 ? 1 : newSize.x;
		this.size.y = newSize.y === 0 ? 1 : newSize.y;
		this.selector.origin = this.minLimitResize(this.selector.origin, oldSize);
		this.selector.redrawSelection(this.selector.origin, mode, this.size, selection);
		const imageData: ImageData = new ImageData(new Uint8ClampedArray(selection.data), selection.width, selection.height);
		const positionCopy = { ...this.selector.origin };
		const delta: Vec2 = { ...this.size };
		const initBoxPositionCopy = { ...this.initBoxPosition };
		const resizeService: ResizeSelectionService = { ...this };
		const func: CallableFunction = () => {
			this.clearMethod(resizeService, initBoxPositionCopy, delta);
			resizeService.selector.redrawSelection(positionCopy, mode, delta, imageData);
			resizeService.selector.redrawSelection(positionCopy, 2, delta, imageData);
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			(document.getElementById('selection-box') as HTMLElement).style.display = 'none';
		};
		this.drawingService.lastAction = func;
	}

	private clearMethod(resizeService: ResizeSelectionService, position: Vec2, deltas: Vec2): void {
		if ('drawCircle' in resizeService.selector) {
			const baseCtx = this.drawingService.baseCtx;
			baseCtx.save();
			baseCtx.beginPath();
			baseCtx.ellipse(position.x + deltas.x / 2, position.y + deltas.y / 2, deltas.x / 2, deltas.y / 2, 0, 0, 2 * Math.PI);
			baseCtx.closePath();
			baseCtx.clip();
			this.drawingService.baseCtx.clearRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
			baseCtx.restore();
		} else {
			this.drawingService.baseCtx.clearRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
		}
	}
}
