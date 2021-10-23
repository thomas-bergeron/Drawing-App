import { Injectable } from '@angular/core';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { LineService } from '@app/services/tools/line.service';
import { Global } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SelectionService } from './selection.service';

@Injectable({
	providedIn: 'root',
})
export class LassoSelectionService extends LineService implements SelectionService {
	info: ToolInfo = new ToolInfo('lasso', 'Sélection par Lasso', 'v');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE);
	shiftDown: boolean = false;
	origin: Vec2;
	target: Vec2;
	realDelta: Vec2;
	deltaX: number;
	deltaY: number;
	private minX: number;
	private minY: number;
	selection: ImageData;
	private closed: boolean;
	private pathDataCopy: Vec2[];
	isActiveSelection: boolean;

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

	redrawSelection(position: Vec2, status: number, deltas: Vec2, selection: ImageData): void {
		if (this.drawingService.previewCtx !== undefined) {
			if (this.isActiveSelection && position !== this.origin) {
				Global.IS_FLIPPED = { x: 1, y: 1 };
			}

			if (status === 0) {
				const baseCtx = this.drawingService.baseCtx;
				baseCtx.save();
				baseCtx.beginPath();
				for (const point of this.pathDataCopy) {
					baseCtx.lineTo(point.x, point.y);
				}
				baseCtx.closePath();
				baseCtx.clip();
				baseCtx.clearRect(position.x - 1, position.y - 1, deltas.x + 1, deltas.y + 1);
				baseCtx.restore();
			}

			this.drawingService.clearCanvas(this.drawingService.previewCtx);

			const ctx = status !== 2 ? this.drawingService.previewCtx : this.drawingService.baseCtx;
			const maskCanvas = document.createElement('canvas');
			const imgCanvas = document.createElement('canvas');
			maskCanvas.width = imgCanvas.width = ctx.canvas.width;
			maskCanvas.height = imgCanvas.height = ctx.canvas.height;
			const maskCtx = maskCanvas.getContext('2d') as CanvasRenderingContext2D;
			const imgCtx = imgCanvas.getContext('2d') as CanvasRenderingContext2D;
			imgCtx.putImageData(selection, 0, 0);

			ctx.save();

			maskCtx.beginPath();
			for (const point of this.pathDataCopy) {
				maskCtx.lineTo(point.x - this.minX, point.y - this.minY);
			}
			maskCtx.closePath();
			maskCtx.clip();
			maskCtx.fillStyle = ctx.fillStyle = 'white';
			maskCtx.fill();
			maskCtx.drawImage(imgCanvas, 0, 0);

			ctx.fill();

			ctx.scale(deltas.x / Math.abs(this.deltaX), deltas.y / Math.abs(this.deltaY));
			const divisionFactor = { x: Math.abs(deltas.x / this.deltaX), y: Math.abs(deltas.y / this.deltaY) };

			ctx.drawImage(
				maskCanvas,
				deltas.x < 0 ? -(position.x / divisionFactor.x) - Math.abs(this.deltaX) : position.x / divisionFactor.x,
				deltas.y < 0 ? -(position.y / divisionFactor.y) - Math.abs(this.deltaY) : position.y / divisionFactor.y,
			);
			ctx.restore();

			this.callChangeBoxSize({ x: Math.abs(deltas.x), y: Math.abs(deltas.y) });
			this.callPlaceBox(position);
			this.origin = position;
			this.closed = false;
			Global.IS_FLIPPED = { x: Math.sign(deltas.x), y: Math.sign(deltas.y) };
		}
	}

	protected click(event: MouseEvent): void {
		this.callPlaceBox(Global.RESET_VECTOR);
		this.pathDataCopy = [];

		Global.IS_FLIPPED = { x: 1, y: 1 };

		if (this.closed) {
			this.closed = false;
			this.isDrawing = false;
			this.updatePreview();
			return;
		}
		this.mousePos = this.getPositionFromMouse(event) as Vec2;
		this.isDrawing = true;
		if (this.shouldClosePath(this.pathData, this.mousePos)) {
			this.pathData.push(this.pathData[0]);
			if (!this.checkLastSegment()) {
				this.closed = true;
				this.updatePreview();
				this.drawRectangle();
				this.stopDrawing(event);
			}
		} else {
			this.updateTip();
			this.pathData.push(this.tipPos);
			this.checkLastSegment();
			this.updatePreview();
		}
	}

	// tslint:disable:no-empty
	onDoubleClick(event: MouseEvent): void {}

	private shouldClosePath(path: Vec2[], mousePos: Vec2): boolean {
		return path.length > 1 && Math.abs(path[0].x - mousePos.x) <= Global.RAYON_MAX && Math.abs(path[0].y - mousePos.y) <= Global.RAYON_MAX;
	}

	protected drawLine(ctx: CanvasRenderingContext2D, path: Vec2[], tipPosition: Vec2): void {
		if (path.length === 0) {
			return;
		}

		ctx.setLineDash(Global.SELECTION_LINEDASH);
		ctx.lineWidth = 1;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.strokeStyle = 'grey';

		if (this.closed && !this.checkLastSegment()) {
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'black';
		}

		ctx.beginPath();

		for (const point of path) {
			ctx.lineTo(point.x, point.y);
		}
		if (this.shouldClosePath(this.pathData, this.mousePos) && !this.isGuided) {
			tipPosition = path[0];
		}
		ctx.lineTo(tipPosition.x, tipPosition.y);
		ctx.stroke();
		this.updateTip();
	}

	private checkLastSegment(): boolean {
		if (this.pathData.length > 2) {
			const isIntersection: boolean[] = [];
			for (let i = 0; i < this.pathData.length - 1; i++) {
				const segment1: Vec2[] = [this.pathData[i], this.pathData[i + 1]];
				const segment2: Vec2[] = [this.pathData[this.pathData.length - 2], this.pathData[this.pathData.length - 1]];
				isIntersection.push(this.calculateDeterminant(segment1, segment2));
			}

			if (isIntersection.includes(true)) {
				this.deleteLastSegment();
				return true;
			}

			if (this.pathData.length === Global.CALL_AMOUNT) {
				if (this.shouldClosePath(this.pathData, this.pathData[2])) {
					this.deleteLastSegment();
					return true;
				}
			}
		}
		return false;
	}

	private calculateDeterminant(segment1: Vec2[], segment2: Vec2[]): boolean {
		const determinants: number[] = [];

		for (let i = 0; i <= 1; i++) {
			const a = segment1[0].x - segment2[i].x;
			const b = segment1[1].x - segment2[i].x;
			const c = segment1[0].y - segment2[i].y;
			const d = segment1[1].y - segment2[i].y;

			const determinant = Math.sign(a * d - b * c);
			determinants.push(determinant);
		}

		for (let i = 0; i <= 1; i++) {
			const a = segment2[0].x - segment1[i].x;
			const b = segment2[1].x - segment1[i].x;
			const c = segment2[0].y - segment1[i].y;
			const d = segment2[1].y - segment1[i].y;

			const determinant = Math.sign(a * d - b * c);
			determinants.push(determinant);
		}
		// tslint:disable:no-magic-numbers
		const zeroes: boolean = determinants[0] === 0 && determinants[1] === 0 && determinants[2] === 0 && determinants[3] === 0;

		return determinants[0] === -determinants[1] && determinants[2] === -determinants[3] && !zeroes;
	}

	private drawRectangle(): void {
		const maxX = Math.max.apply(
			Math,
			this.pathData.map((point) => {
				return point.x;
			}),
		);
		const maxY = Math.max.apply(
			Math,
			this.pathData.map((point) => {
				return point.y;
			}),
		);
		this.minX = Math.min.apply(
			Math,
			this.pathData.map((point) => {
				return point.x;
			}),
		);
		this.minY = Math.min.apply(
			Math,
			this.pathData.map((point) => {
				return point.y;
			}),
		);

		this.deltaX = maxX - this.minX;
		this.deltaY = maxY - this.minY;
		this.origin = { x: this.minX, y: this.minY };

		this.selection = this.drawingService.baseCtx.getImageData(this.origin.x, this.origin.y, this.deltaX, this.deltaY);
	}

	selectRectangle(origin: Vec2): void {
		this.changeStrokeSettings('#014BCC', 0);
		this.drawingService.previewCtx.strokeRect(origin.x, origin.y, this.deltaX, this.deltaY);
		this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
		this.callPlaceBox(origin);
		this.isActiveSelection = true;
	}

	changeStrokeSettings(color: string, dashAmount: number): void {
		this.drawingService.previewCtx.strokeStyle = color;
		this.drawingService.previewCtx.lineWidth = 1;
		this.drawingService.previewCtx.setLineDash([dashAmount]);
	}

	protected stopDrawing(event: MouseEvent): void {
		this.mousePos = this.getPositionFromMouse(event);
		this.updateTip();
		this.isDrawing = false;
		this.pathDataCopy = this.pathData;
		this.clearPath();
		this.unlock();
		this.selectRectangle(this.origin);
	}

	deleteCurrentSelection(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		this.selection = new ImageData(1, 1);
		this.callPlaceBox(Global.RESET_VECTOR);
		this.isActiveSelection = false;
	}

	callPlaceBox(origin: Vec2): void {
		this.placeBoxCallSource.next(origin);
	}

	callChangeBoxSize(delta: Vec2): void {
		this.changeBoxSizeCallSource.next(delta);
	}
}
