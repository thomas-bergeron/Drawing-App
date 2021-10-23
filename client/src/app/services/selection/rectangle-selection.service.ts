import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { SelectionService } from '@app/services/selection/selection.service';
import { Command, Global, MouseButton } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ShiftSelectionService } from './shift-selection.service';

@Injectable({
	providedIn: 'root',
})
export class RectangleSelectionService extends Tool implements SelectionService {
	info: ToolInfo = new ToolInfo('rectangle-selection', 'Sélection en rectangle', 'r');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE);
	origin: Vec2;
	deltaX: number;
	deltaY: number;
	selection: ImageData;
	isActiveSelection: boolean;

	private target: Vec2;
	private shiftDown: boolean = false;

	placeBoxCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	placeBox$: Observable<Vec2> = this.placeBoxCallSource.asObservable();
	changeBoxSizeCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	changeBoxSize$: Observable<Vec2> = this.changeBoxSizeCallSource.asObservable();

	constructor(drawingService: DrawingService, public shiftSelection: ShiftSelectionService) {
		super(drawingService);
		this.selection = new ImageData(1, 1);
		this.deltaX = 1;
		this.deltaY = 1;
		this.isActiveSelection = false;
	}

	handleCommand(command: KeyboardEvent): void {
		if (!this.isDrawing) {
			this.shiftDown = false;
			return;
		}

		if (command.key === Command.SHIFT) {
			this.shiftDown = !this.shiftDown;
			this.updatePreview();
		} else if (command.key === Command.ESCAPE) {
			this.deleteCurrentSelection();
			this.isDrawing = false;
			this.shiftDown = false;
		}
	}

	private updatePreview(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);

		if (this.shiftDown) {
			this.drawSquare(this.drawingService.previewCtx, this.origin, this.target);
		} else {
			this.drawRectangle(this.drawingService.previewCtx, this.origin, this.target);
		}
	}

	onMouseDown(event: MouseEvent): void {
		if (this.isActiveSelection) {
			this.isActiveSelection = false;
			this.callPlaceBox(Global.RESET_VECTOR);
			return;
		}
		this.isActiveSelection = false;
		this.isDrawing = event.button === MouseButton.Left;
		if (this.isDrawing) {
			this.origin = this.getPagePositionFromMouse(event);
			this.target = this.getPagePositionFromMouse(event);
			this.callPlaceBox(Global.RESET_VECTOR);
		}
	}

	onMouseUp(event: MouseEvent): void {
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);
			this.drawingService.clearCanvas(this.drawingService.previewCtx);

			if (!this.shiftDown) {
				this.limitRectanglePosition(this.drawingService.previewCtx, this.origin, this.target);
			} else {
				this.limitSquarePosition(this.drawingService.previewCtx, this.origin, this.target);
			}
			this.selectRectangle(this.origin);
			this.origin = { x: Math.min(this.origin.x, this.target.x), y: Math.min(this.origin.y, this.target.y) };
		}

		Global.IS_FLIPPED = { x: 1, y: 1 };
		this.isDrawing = false;
	}

	onMouseMove(event: MouseEvent): void {
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);
			this.updatePreview();
		}
	}

	private drawRectangle(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2): void {
		const deltas = { x: target.x - origin.x, y: target.y - origin.y };
		this.strokeDashLine(ctx, origin, deltas);

		deltas.x = deltas.x === 0 ? 1 : deltas.x;
		deltas.y = deltas.y === 0 ? 1 : deltas.y;
		this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, deltas.x, deltas.y);
	}

	private drawSquare(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2): void {
		this.deltaX = target.x - origin.x;
		this.deltaY = target.y - origin.y;
		this.strokeDashLine(ctx, origin, { x: this.deltaX, y: Math.sign(this.deltaY) * Math.abs(this.deltaX) });

		this.deltaX = this.deltaX === 0 ? 1 : this.deltaX;
		this.deltaY = this.deltaY === 0 ? 1 : this.deltaY;
		this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, this.deltaX, Math.sign(this.deltaY) * Math.abs(this.deltaX));
	}

	private strokeDashLine(ctx: CanvasRenderingContext2D, origin: Vec2, deltas: Vec2): void {
		this.changeStrokeSettings('white', 0);
		ctx.strokeRect(origin.x, origin.y, deltas.x, deltas.y);
		this.changeStrokeSettings('black', Global.DEFAULT_DASH_AMOUNT);
		ctx.strokeRect(origin.x, origin.y, deltas.x, deltas.y);
	}

	selectRectangle(origin: Vec2): void {
		this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
		this.callPlaceBox(origin);
		this.changeStrokeSettings('black', 0);
		this.isActiveSelection = true;
	}

	private limitRectanglePosition(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2): void {
		target.x = target.x > ctx.canvas.width ? ctx.canvas.width : target.x;
		target.y = target.y > ctx.canvas.height ? ctx.canvas.height : target.y;
		target.x = target.x < 0 ? 0 : target.x;
		target.y = target.y < 0 ? 0 : target.y;
		this.deltaX = target.x - origin.x;
		this.deltaY = target.y - origin.y;
	}

	private limitSquarePosition(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2): void {
		this.deltaX = target.x - origin.x;
		this.deltaY = Math.sign(this.target.y - this.origin.y) * Math.abs(this.deltaX);
		if (origin.x + this.deltaX > ctx.canvas.width) {
			this.deltaX = ctx.canvas.width - origin.x;
		}
		if (origin.y + this.deltaY > ctx.canvas.height) {
			this.deltaY = ctx.canvas.height - origin.y;
		}
		if (origin.x + this.deltaX < 0) {
			this.deltaX = -origin.x;
		}
		if (origin.y + this.deltaY < 0) {
			this.deltaY = -origin.y;
		}
	}

	private changeStrokeSettings(color: string, dashAmount: number): void {
		this.drawingService.previewCtx.strokeStyle = color;
		this.drawingService.previewCtx.lineWidth = 1;
		this.drawingService.previewCtx.setLineDash([dashAmount]);
	}

	deleteCurrentSelection(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		this.selection = new ImageData(1, 1);
		this.callPlaceBox(Global.RESET_VECTOR);
		this.isActiveSelection = false;
	}

	redrawSelection(position: Vec2, status: number, deltas: Vec2, selection: ImageData): void {
		if (this.drawingService.previewCtx !== undefined) {
			if (status === 0) {
				this.drawingService.baseCtx.fillStyle = 'white';
				this.drawingService.baseCtx.fillRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
			}

			this.drawingService.clearCanvas(this.drawingService.previewCtx);

			const ctx = status !== 2 ? this.drawingService.previewCtx : this.drawingService.baseCtx;
			const divisionFactor = { x: Math.abs(deltas.x / this.deltaX), y: Math.abs(deltas.y / this.deltaY) };
			const maskCanvas = document.createElement('canvas');
			maskCanvas.width = window.innerWidth / divisionFactor.x;
			maskCanvas.height = window.innerHeight / divisionFactor.y;
			const maskCtx = maskCanvas.getContext('2d') as CanvasRenderingContext2D;

			maskCtx.putImageData(selection, position.x / divisionFactor.x, position.y / divisionFactor.y);
			ctx.save();
			ctx.beginPath();
			ctx.rect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
			ctx.closePath();

			ctx.fillStyle = 'white';
			ctx.fill();
			ctx.clip();
			ctx.scale(deltas.x / Math.abs(this.deltaX), deltas.y / Math.abs(this.deltaY));
			ctx.drawImage(
				maskCanvas,
				deltas.x < 0 ? deltas.x / divisionFactor.x - (2 * position.x) / divisionFactor.x : 0,
				deltas.y < 0 ? deltas.y / divisionFactor.y - (2 * position.y) / divisionFactor.y : 0,
			);
			ctx.restore();

			this.callChangeBoxSize({ x: Math.abs(deltas.x), y: Math.abs(deltas.y) });
			this.callPlaceBox(position);
			this.origin = position;
		}
	}

	callPlaceBox(origin: Vec2): void {
		this.placeBoxCallSource.next(origin);
	}

	callChangeBoxSize(delta: Vec2): void {
		this.changeBoxSizeCallSource.next(delta);
	}
}
