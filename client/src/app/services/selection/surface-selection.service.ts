import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, Shortcut } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SelectionService } from './selection.service';

@Injectable({
	providedIn: 'root',
})
export class SurfaceSelectionService extends Tool implements SelectionService {
	info: ToolInfo = new ToolInfo('surface-selection', 'Sélection de la surface', 'ctrl-a');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE);
	origin: Vec2;
	deltaX: number;
	deltaY: number;
	selection: ImageData;
	isActiveSelection: boolean;

	placeBoxCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	placeBox$: Observable<Vec2> = this.placeBoxCallSource.asObservable();
	changeBoxSizeCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	changeBoxSize$: Observable<Vec2> = this.changeBoxSizeCallSource.asObservable();

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.selection = new ImageData(1, 1);
		this.isActiveSelection = false;
	}

	handleCommand(event: KeyboardEvent): void {
		this.isActiveSelection = false;
		this.origin = { x: 0, y: 0 };
		this.deltaX = this.drawingService.baseCtx.canvas.width;
		this.deltaY = this.drawingService.baseCtx.canvas.height;
		if (event.key === Shortcut.SURFACE_SELECTION.charAt(Shortcut.SURFACE_SELECTION.length - 1) || event.key === Shortcut.SURFACE_SELECTION) {
			this.selectRectangle();
		}
		if (event.key === Command.ESCAPE) {
			this.deleteCurrentSelection();
		}
	}

	selectRectangle(): void {
		const ctx = this.drawingService.baseCtx;
		this.selection = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
		this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
		this.callPlaceBox(this.origin);
		this.isActiveSelection = true;
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
