import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, MouseButton } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SelectionService } from './selection.service';

@Injectable({
	providedIn: 'root',
})
export class EllipseSelectionService extends Tool implements SelectionService {
	info: ToolInfo = new ToolInfo('ellipse-selection', 'Sélection en éllipse', 's');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE);
	origin: Vec2;
	deltaX: number;
	deltaY: number;
	selection: ImageData;
	isActiveSelection: boolean;
	isCircle: boolean;

	private shiftDown: boolean = false;
	private target: Vec2;
	private realDelta: Vec2;

	placeBoxCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	placeBox$: Observable<Vec2> = this.placeBoxCallSource.asObservable();
	changeBoxSizeCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	changeBoxSize$: Observable<Vec2> = this.changeBoxSizeCallSource.asObservable();

	constructor(drawingService: DrawingService) {
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
		this.changeStrokeSettings('black', Global.DEFAULT_DASH_AMOUNT);

		if (this.shiftDown) {
			this.drawCircle(this.drawingService.previewCtx, this.origin, this.target);
		} else {
			this.drawEllipse(this.drawingService.previewCtx, this.origin, this.target);
		}
	}

	onMouseDown(event: MouseEvent): void {
		if (this.isActiveSelection) {
			this.isActiveSelection = false;
			this.isCircle = false;
			this.callPlaceBox(Global.RESET_VECTOR);
			this.updatePreview();
			return;
		}
		this.isActiveSelection = false;
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
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

			this.realDelta = { x: Math.abs(this.origin.x - this.target.x), y: Math.abs(this.origin.y - this.target.y) };

			if (!this.shiftDown) {
				this.limitRectanglePosition(this.drawingService.previewCtx, this.origin, this.target);
			} else {
				this.isCircle = true;
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
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.target = this.getPagePositionFromMouse(event);
			this.updatePreview();
		}
	}

	private drawEllipse(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2): void {
		this.isCircle = false;
		const deltas = { x: target.x - origin.x, y: target.y - origin.y };
		this.strokeDashLine(ctx, origin, deltas);

		deltas.x = deltas.x === 0 ? 1 : deltas.x;
		deltas.y = deltas.y === 0 ? 1 : deltas.y;
		this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, deltas.x, deltas.y);
	}

	private drawCircle(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2): void {
		this.isCircle = true;
		this.deltaX = target.x - origin.x;
		this.deltaY = target.y - origin.y;
		this.strokeDashLine(ctx, origin, { x: this.deltaX, y: Math.sign(this.deltaY) * Math.abs(this.deltaX) });

		this.deltaX = this.deltaX === 0 ? 1 : this.deltaX;
		this.deltaY = this.deltaY === 0 ? 1 : this.deltaY;
		this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, this.deltaX, Math.sign(this.deltaY) * Math.abs(this.deltaX));
	}

	private strokeDashLine(ctx: CanvasRenderingContext2D, origin: Vec2, deltas: Vec2): void {
		ctx.beginPath();

		if (this.isDrawing) {
			ctx.ellipse(origin.x + deltas.x / 2, origin.y + deltas.y / 2, Math.abs(deltas.x) / 2, Math.abs(deltas.y) / 2, 0, 0, 2 * Math.PI);
		}

		ctx.setLineDash([]);
		this.changeStrokeSettings('white', 0);
		ctx.stroke();
		ctx.beginPath();

		if (this.isDrawing) {
			ctx.ellipse(origin.x + deltas.x / 2, origin.y + deltas.y / 2, Math.abs(deltas.x) / 2, Math.abs(deltas.y) / 2, 0, 0, 2 * Math.PI);
		}

		ctx.setLineDash([]);
		this.changeStrokeSettings('black', Global.DEFAULT_DASH_AMOUNT);
		ctx.stroke();
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
		const halfDelta = {
			x: (Math.abs(deltas.x / this.deltaX) * this.realDelta.x) / 2,
			y: (Math.abs(deltas.y / this.deltaY) * this.realDelta.y) / 2,
		};

		if (this.drawingService.previewCtx !== undefined) {
			if (status === 0) {
				const baseCtx = this.drawingService.baseCtx;
				baseCtx.save();
				baseCtx.beginPath();
				if (this.isCircle) {
					baseCtx.ellipse(
						position.x + halfDelta.x,
						position.y + halfDelta.x,
						Math.abs(halfDelta.x),
						Math.abs(halfDelta.x),
						0,
						0,
						2 * Math.PI,
					);
				} else {
					baseCtx.ellipse(
						position.x + halfDelta.x,
						position.y + halfDelta.y,
						Math.abs(halfDelta.x),
						Math.abs(halfDelta.y),
						0,
						0,
						2 * Math.PI,
					);
				}
				baseCtx.closePath();
				baseCtx.clip();
				this.drawingService.baseCtx.fillStyle = 'white';
				this.drawingService.baseCtx.fillRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
				baseCtx.restore();
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
			ctx.clip();
			ctx.beginPath();
			if (this.isCircle) {
				ctx.ellipse(position.x + halfDelta.x, position.y + halfDelta.x, Math.abs(halfDelta.x), Math.abs(halfDelta.x), 0, 0, 2 * Math.PI);
			} else {
				ctx.ellipse(position.x + halfDelta.x, position.y + halfDelta.y, Math.abs(halfDelta.x), Math.abs(halfDelta.y), 0, 0, 2 * Math.PI);
			}
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
