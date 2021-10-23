import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { Arrows, Global, MouseButton } from '@app/shared/global';
import { SelectionService } from './selection.service';

@Injectable({
	providedIn: 'root',
})
export class ShiftSelectionService extends Tool {
	info: ToolInfo = new ToolInfo('shift-selection', 'Déplacement de sélection', 'shiftSelection');
	options: ToolOption = new ToolOption(0, false, false, 0);
	selector: SelectionService;
	operation: number;

	private position: Vec2;
	private initBoxPosition: Vec2;
	private factors: Vec2;
	private size: Vec2;
	private isShifting: boolean;

	// tslint:disable-next-line: no-empty
	lastAction: CallableFunction = () => {};

	constructor(drawingService: DrawingService, private magnetService: MagnetService) {
		super(drawingService);
		this.isShifting = false;
		this.operation = 0;
		this.factors = { x: 0, y: 0 };
		this.size = { x: 1, y: 1 };
	}

	handleCommandMap(keyMap: Map<string, boolean>, size: Vec2): void {
		this.size = size;
		if (!this.isDrawing || !this.isShifting) {
			if (this.operation === 0) {
				this.initBoxPosition = this.selector.origin;
			}
			this.changeFactors(keyMap);
			this.selector.selectRectangle(this.selector.origin);
			const deltas = { x: Math.abs(this.size.x), y: Math.abs(this.size.y) };
			this.position = {
				x: this.selector.origin.x + this.factors.x,
				y: this.selector.origin.y + this.factors.y,
			};
			this.minLimitMouse();

			this.updateCanvas(this.operation, deltas, false);
			this.operation = 1;
		}
	}

	handleMouseDown(event: MouseEvent, position: Vec2, size: Vec2): void {
		this.initBoxPosition = position;
		this.size = size;
		this.onMouseDown(event);
	}

	onMouseDown(event: MouseEvent): void {
		this.isDrawing = event.button === MouseButton.Left;
		if (this.isDrawing) {
			this.selector.isActiveSelection = false;
			this.isShifting = true;
			this.mouseDownCoord = { x: event.x, y: event.y };
			this.position = this.initBoxPosition;
			this.updateCanvas(this.operation, { x: Math.abs(this.size.x), y: Math.abs(this.size.y) }, true);
			this.operation = 1;
		}
	}

	onMouseUp(): void {
		if (this.isShifting) {
			this.isShifting = false;
			this.isDrawing = false;
			this.selector.isActiveSelection = true;
			const deltas = { x: Math.abs(this.size.x), y: Math.abs(this.size.y) };
			this.minLimitMouse();
			this.updateCanvas(this.operation, deltas, true);
		}
	}

	onMouseMove(event: MouseEvent): void {
		if (this.isShifting) {
			const deltas = { x: Math.abs(this.size.x), y: Math.abs(this.size.y) };
			const eventPos = { x: event.x, y: event.y };
			this.position = {
				x: this.initBoxPosition.x + eventPos.x - this.mouseDownCoord.x,
				y: this.initBoxPosition.y + eventPos.y - this.mouseDownCoord.y,
			};
			this.minLimitMouse();
			this.updateCanvas(this.operation, deltas, true);
		}
	}

	private minLimitMouse(): void {
		if (this.position.x < -Math.abs(this.size.x) + Global.RECTANGLE_LIMIT_OFFSET) {
			this.position.x = -Math.abs(this.size.x) + Global.RECTANGLE_LIMIT_OFFSET;
		}

		if (this.position.y < 0) {
			this.position.y = 0;
		}
	}

	private actionWrapper(
		shiftService: ShiftSelectionService,
		initBoxPositionCopy: Vec2,
		delta: Vec2,
		positionCopy2: Vec2,
		deltas: Vec2,
		imageData: ImageData,
	): void {
		this.clearMethod(shiftService, initBoxPositionCopy, delta);
		shiftService.selector.redrawSelection(positionCopy2, 1, deltas, imageData);
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		const htmlElement: HTMLElement = document.getElementById('selection-box') as HTMLElement;
		if (htmlElement) htmlElement.style.display = 'none';
	}
	private actionWrapper2(
		shiftService: ShiftSelectionService,
		initBoxPositionCopy2: Vec2,
		deltaCopy: Vec2,
		positionCopy: Vec2,
		mode: number,
		deltas: Vec2,
		imageDataCopy: ImageData,
	): void {
		this.clearMethod(shiftService, initBoxPositionCopy2, deltaCopy);
		shiftService.selector.redrawSelection(positionCopy, mode, deltas, imageDataCopy);
		shiftService.selector.redrawSelection(positionCopy, 2, deltas, imageDataCopy);
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		const htmlElement = document.getElementById('selection-box') as HTMLElement;
		if (htmlElement) htmlElement.style.display = 'none';
	}

	private updateCanvas(mode: number, deltas: Vec2, isMouse: boolean): void {
		deltas = { x: deltas.x * Global.IS_FLIPPED.x, y: deltas.y * Global.IS_FLIPPED.y };
		this.magnetService.calculatePosition(this.position, this.size, isMouse, this.factors);
		const selection = this.selector.selection;
		if (!isMouse && mode === 0) {
			this.selector.redrawSelection(this.initBoxPosition, mode, deltas, selection);
			const imageData: ImageData = new ImageData(new Uint8ClampedArray(selection.data), selection.width, selection.height);
			const positionCopy2 = { ...this.position };
			const delta: Vec2 = { ...deltas };
			const initBoxPositionCopy = { ...this.initBoxPosition };
			const shiftService2: ShiftSelectionService = { ...this };
			this.drawingService.lastAction = () => {
				this.actionWrapper(shiftService2, initBoxPositionCopy, delta, positionCopy2, delta, imageData);
			};
		}

		this.selector.redrawSelection(this.position, mode, deltas, selection);
		const shiftService: ShiftSelectionService = { ...this };
		const initBoxPositionCopy2 = { ...this.initBoxPosition };
		const imageDataCopy: ImageData = new ImageData(new Uint8ClampedArray(selection.data), selection.width, selection.height);
		const positionCopy = { ...this.position };
		const deltaCopy: Vec2 = { ...deltas };
		this.drawingService.lastAction = () => {
			this.actionWrapper2(shiftService, initBoxPositionCopy2, deltaCopy, positionCopy, mode, deltaCopy, imageDataCopy);
		};
	}

	private clearMethod(shiftService: ShiftSelectionService, position: Vec2, deltas: Vec2): void {
		if ('drawCircle' in shiftService.selector) {
			const baseCtx = this.drawingService.baseCtx;
			baseCtx.save();
			baseCtx.beginPath();
			baseCtx.ellipse(position.x + deltas.x / 2, position.y + deltas.y / 2, deltas.x / 2, deltas.y / 2, 0, 0, 2 * Math.PI);
			baseCtx.closePath();
			baseCtx.clip();
			baseCtx.clearRect(position.x - 1, position.y - 1, deltas.x + 1, deltas.y + 1);
			baseCtx.restore();
		} else {
			this.drawingService.baseCtx.clearRect(position.x - 1, position.y - 1, deltas.x + 1, deltas.y + 1);
		}
	}

	private changeFactors(keyMap: Map<string, boolean>): void {
		this.factors.x = keyMap.get(Arrows.ARROWLEFT) ? -Global.SHIFT_AMOUNT : 0;
		this.factors.x = keyMap.get(Arrows.ARROWRIGHT) ? Global.SHIFT_AMOUNT : this.factors.x;
		this.factors.y = keyMap.get(Arrows.ARROWUP) ? -Global.SHIFT_AMOUNT : 0;
		this.factors.y = keyMap.get(Arrows.ARROWDOWN) ? Global.SHIFT_AMOUNT : this.factors.y;
	}

	endSelection(): void {
		if (this.selector.deltaX !== 0 && this.selector.deltaY !== 0) {
			this.operation = 2;
			this.updateCanvas(this.operation, { x: Math.abs(this.size.x), y: Math.abs(this.size.y) }, true);
			this.selector.callPlaceBox(Global.RESET_VECTOR);
		}
	}
}
