import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { SurfaceSelectionService } from '@app/services//selection/surface-selection.service';
import { ClipboardService } from '@app/services/clipboard/clipboard.service';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { GridService } from '@app/services/grid/grid.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { EllipseSelectionService } from '@app/services/selection/ellipse-selection.service';
import { LassoSelectionService } from '@app/services/selection/lasso-selection.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { SelectionService } from '@app/services/selection/selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { Global } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EllipseService } from './ellipse.service';
import { EraserService } from './eraser.service';
import { EyeDropperService } from './eye-dropper.service';
import { FillService } from './fill-bucket.service';
import { LineService } from './line.service';
import { PencilService } from './pencil.service';
import { PolygoneService } from './polygone.service';
import { RectangleService } from './rectangle.service';
import { SprayService } from './spray.service';
import { StampService } from './stamp.service';
import { TextService } from './text.service';

@Injectable({
	providedIn: 'root',
})
export class ToolService {
	currentTool: Tool;
	private toolMap: Map<string, Tool> = new Map();

	changeLimitSizeCallSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	changeLimitSize$: Observable<number> = this.changeLimitSizeCallSource.asObservable();
	changeCurrentSelectionModeCallSource: Subject<SelectionService> = new BehaviorSubject<SelectionService>(
		new RectangleSelectionService(
			new DrawingService(new CommandManagerService()),
			new ShiftSelectionService(
				new DrawingService(new CommandManagerService()),
				new MagnetService(new GridService(new DrawingService(new CommandManagerService()))),
			),
		),
	);
	changeCurrentSelectionMode$: Observable<SelectionService> = this.changeCurrentSelectionModeCallSource.asObservable();

	constructor(
		private pencilService: PencilService,
		private lineService: LineService,
		private eraserService: EraserService,
		private rectangleService: RectangleService,
		private ellipseService: EllipseService,
		private polygoneService: PolygoneService,
		private rectangleSelectionService: RectangleSelectionService,
		private ellipseSelectionService: EllipseSelectionService,
		private surfaceSelectionService: SurfaceSelectionService,
		private shiftSelectionService: ShiftSelectionService,
		private resizeSelectionService: ResizeSelectionService,
		private sprayService: SprayService,
		private eyeDropperService: EyeDropperService,
		private fillService: FillService,
		private gridService: GridService,
		private lassoSelectionService: LassoSelectionService,
		private textService: TextService,
		public clipboardService: ClipboardService,
		private stampService: StampService,
		public magnetService: MagnetService,
	) {
		this.toolMap.set(this.pencilService.info.shortcut, this.pencilService);
		this.toolMap.set(this.lineService.info.shortcut, this.lineService);
		this.toolMap.set(this.eraserService.info.shortcut, this.eraserService);
		this.toolMap.set(this.rectangleService.info.shortcut, this.rectangleService);
		this.toolMap.set(this.ellipseService.info.shortcut, this.ellipseService);
		this.toolMap.set(this.polygoneService.info.shortcut, this.polygoneService);
		this.toolMap.set(this.rectangleSelectionService.info.shortcut, this.rectangleSelectionService);
		this.toolMap.set(this.ellipseSelectionService.info.shortcut, this.ellipseSelectionService);
		this.toolMap.set(this.surfaceSelectionService.info.shortcut, this.surfaceSelectionService);
		this.toolMap.set(Global.SHIFT_SELECTION_SHORTCUT, this.shiftSelectionService);
		this.toolMap.set(Global.RESIZE_SELECTION_SHORTCUT, this.resizeSelectionService);
		this.toolMap.set(this.sprayService.info.shortcut, this.sprayService);
		this.toolMap.set(this.eyeDropperService.info.shortcut, this.eyeDropperService);
		this.toolMap.set(this.fillService.info.shortcut, this.fillService);
		this.toolMap.set(this.gridService.info.shortcut, this.gridService);
		this.toolMap.set(this.lassoSelectionService.info.shortcut, this.lassoSelectionService);
		this.toolMap.set(this.textService.info.shortcut, this.textService);
		this.toolMap.set(this.stampService.info.shortcut, this.stampService);

		this.currentTool = pencilService;
	}

	changeTool(toolKey: string): void {
		if (toolKey === 'g') {
			if (this.isToolActive(toolKey)) {
				this.gridService.toggleGrid();
				return;
			}
			this.gridService.toggleGrid();
		} else if (toolKey === 'm') {
			this.magnetService.toggleIsActive();
			return;
		}

		if (this.currentTool.info.shortcut === toolKey || !this.toolMap.has(toolKey)) return;

		if (toolKey !== Global.SHIFT_SELECTION_SHORTCUT && toolKey !== Global.RESIZE_SELECTION_SHORTCUT) {
			if (this.currentTool.info.name === 'shift-selection') {
				(this.currentTool as ShiftSelectionService).endSelection();
			} else if (this.currentTool.info.name === 'resize-selection') {
				(this.currentTool as ResizeSelectionService).endSelection();
			} else if ('placeBox$' in this.currentTool) {
				(this.currentTool as SelectionService).callPlaceBox(Global.RESET_VECTOR);
			}
		}
		this.currentTool = this.toolMap.get(toolKey) as Tool;
		this.currentTool.info.name === 'eraser'
			? this.callChangeLimitSize(Global.ERASER_MIN_TRAIL_SIZE)
			: this.callChangeLimitSize(Global.MIN_TOOL_SIZE);

		if ('placeBox$' in this.currentTool) {
			(this.currentTool as SelectionService).callPlaceBox(Global.RESET_VECTOR);
			this.callChangeCurrentSelectionMode(this.currentTool);
		}
		// Encapsulation à revoir
		this.currentTool.getDrawingService().resetCursor(this.currentTool);
	}

	isToolActive(shortcut: string): boolean {
		if (shortcut === 'g') {
			return this.gridService.options.gridOptions.isActive as boolean;
		} else {
			return this.currentTool.info.shortcut === shortcut;
		}
	}

	getService(shortcut: string): Tool {
		return this.toolMap.get(shortcut) as Tool;
	}

	updateGridSize(size: number): void {
		this.gridService.updateSize(size);
	}

	isValidToolKey(key: string): boolean {
		return this.toolMap.has(key);
	}

	handleCommand(command: KeyboardEvent, isDown: boolean): void {
		this.currentTool.handleCommand(command, isDown);
	}
	callChangeLimitSize(minSize: number): void {
		this.changeLimitSizeCallSource.next(minSize);
	}

	callChangeCurrentSelectionMode(mode: SelectionService): void {
		this.changeCurrentSelectionModeCallSource.next(mode);
	}

	hasBegunDrawing(): boolean {
		return this.currentTool.isDrawing;
	}

	magnetIsActive(): boolean {
		return this.magnetService.isActive;
	}
}
