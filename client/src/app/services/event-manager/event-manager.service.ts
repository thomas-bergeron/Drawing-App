import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarrouselComponent } from '@app/components/carrousel/carrousel.component';
import { ExportComponent } from '@app/components/export/export.component';
import { SaveComponent } from '@app/components/save/save.component';
import { WarningComponent } from '@app/components/warning/warning.component';
import { GridService } from '@app/services/grid/grid.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { Global } from '@app/shared/global';
import { DrawingService } from 'src/app/services/drawing/drawing.service';
import { ToolService } from 'src/app/services/tools/tool.service';

@Injectable({
	providedIn: 'root',
})
export class EventManagerService {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	private isKeyDown: boolean = false;
	private commandMap: Map<string, () => void> = new Map<string, () => void>();
	constructor(private toolService: ToolService, private drawingService: DrawingService, public dialog: MatDialog) {
		this.handleKeydown = this.handleKeydown.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onWheel = this.onWheel.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onDoubleClick = this.onDoubleClick.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.enableShortcuts();
		this.commandMap.set(this.getEventHashKey(Global.REDO_EVENT), () => {
			this.redoWrapper();
		});
		this.commandMap.set(this.getEventHashKey(Global.UNDO_EVENT), () => {
			this.undoWrapper();
		});
		this.commandMap.set(this.getEventHashKey(Global.EXPORT_EVENT), () => {
			this.exportWrapper();
		});
		this.commandMap.set(this.getEventHashKey(Global.CARROUSEL_EVENT), () => {
			this.carrouselWrapper();
		});
		this.commandMap.set(this.getEventHashKey(Global.SAVE_EVENT), () => {
			this.saveWrapper();
		});
		this.commandMap.set(this.getEventHashKey(Global.OPEN_EVENT), () => {
			this.openWrapper();
		});
	}

	enableShortcuts(): void {
		document.body.addEventListener('keydown', this.handleKeydown);
	}

	disableShortcuts(): void {
		document.body.removeEventListener('keydown', this.handleKeydown);
	}
	toggleView(shortcut: string): void {
		if (shortcut.toLowerCase() === 'g') {
			(this.toolService.getService(shortcut) as GridService).toggleGrid();
		}
	}
	isGridActive(): boolean {
		const gridService: GridService = this.toolService.getService('g') as GridService;
		if (gridService.info.name !== 'grille') {
			return false;
		}
		return gridService.options.gridOptions.isActive;
	}

	private getEventHashKey(event: KeyboardEvent): string {
		const ctrlKey = event.ctrlKey ? 'ctrl+' : '';
		const shiftKey = event.shiftKey ? 'shift+' : '';
		const key = event.key.toLowerCase();
		return ctrlKey + shiftKey + key;
	}

	private redoWrapper(): void {
		if (!this.toolService.currentTool.info.name.includes('selection')) {
			this.drawingService.redo();
		}
	}

	private undoWrapper(): void {
		if (!this.toolService.currentTool.info.name.includes('selection')) {
			this.drawingService.undo();
		}
	}
	exportWrapper(): void {
		if (!this.drawingService.isEmpty()) {
			this.disableShortcuts();
			const dialogExportRef = this.dialog.open(ExportComponent, { panelClass: 'custom-dialog-container' });
			dialogExportRef.afterClosed().subscribe((result: boolean) => {
				this.enableShortcuts();
			});
		}
	}

	private saveWrapper(): void {
		this.disableShortcuts();
		const dialogExportRef = this.dialog.open(SaveComponent, { panelClass: 'custom-dialog-container' });
		dialogExportRef.afterClosed().subscribe((result: boolean) => {
			this.enableShortcuts();
		});
	}

	private carrouselWrapper(): void {
		this.disableShortcuts();
		const dialogCarrouselRef = this.dialog.open(CarrouselComponent, { panelClass: 'custom-carrousel-container' });
		dialogCarrouselRef.afterClosed().subscribe((result: boolean) => {
			this.enableShortcuts();
			if (result) {
				if (!this.drawingService.isEmpty()) {
					const ref = this.dialog.open(WarningComponent, { panelClass: 'custom-warning-container' });
					ref.afterClosed().subscribe((response: boolean) => {
						if (response) this.drawingService.initCanvas();
					});
				} else {
					this.drawingService.initCanvas();
				}
			}
		});
	}

	private openWrapper(): void {
		if (!this.drawingService.isEmpty()) {
			this.disableShortcuts();
			const dialogNewRef = this.dialog.open(WarningComponent, { panelClass: 'custom-warning-container' });
			dialogNewRef.afterClosed().subscribe((result: boolean) => {
				this.enableShortcuts();
				if (result) this.drawingService.new();
			});
		}
	}

	private handleShortcut(event: KeyboardEvent): boolean {
		let hasHandled = true;
		const key = this.getEventHashKey(event);
		if (this.commandMap.has(key)) {
			(this.commandMap.get(key) as () => void)();
		} else {
			hasHandled = false;
			this.toolService.handleCommand(event, this.isKeyDown);
		}
		return hasHandled;
	}

	private handleKeydown(event: KeyboardEvent): void {
		if (event.key !== 'F12') {
			event.preventDefault();
		}

		if (!this.toolService.hasBegunDrawing() && !this.handleShortcut(event)) {
			const key = (event.ctrlKey ? 'ctrl-' : '') + event.key;
			if (this.toolService.currentTool.info.name.includes('selection') && !'rsv'.includes(event.key) && this.toolService.isValidToolKey(key)) {
				this.drawingService.addAction(this.drawingService.lastAction);
			}
			this.toolService.changeTool(key);
		}
	}

	startDrawing(event: MouseEvent): void {
		if (this.toolService.currentTool.info.name === 'shift-selection' && this.getTarget(event).id === 'previewLayer') {
			this.toolService.changeTool((this.toolService.currentTool as ShiftSelectionService).selector.info.shortcut);
			return;
		} else if (this.toolService.currentTool.info.name === 'resize-selection' && this.getTarget(event).id === 'previewLayer') {
			this.toolService.changeTool((this.toolService.currentTool as ResizeSelectionService).selector.info.shortcut);
			return;
		}
		this.disableShortcuts();
		document.body.addEventListener('mouseup', this.onMouseUp);
		document.body.addEventListener('keydown', this.onKeyDown);

		if (
			!this.toolService.hasBegunDrawing() ||
			this.toolService.currentTool.info.name === 'line' ||
			this.toolService.currentTool.info.name === 'lasso'
		) {
			this.toolService.currentTool.onMouseDown(event);
		}
	}

	private getTarget(event: MouseEvent): Element {
		return event.target as Element;
	}

	onMouseMove(event: MouseEvent): void {
		this.toolService.currentTool.onMouseMove(event);
	}

	onWheel(event: WheelEvent): void {
		this.toolService.currentTool.onWheel(event);
	}

	private onMouseUp(event: MouseEvent): void {
		this.toolService.currentTool.onMouseUp(event);
		document.body.removeEventListener('mouseup', this.onMouseUp);
		if (this.toolService.currentTool.info.name !== 'line' && this.toolService.currentTool.info.name !== 'lasso') {
			this.enableShortcuts();
			document.body.removeEventListener('keydown', this.onKeyDown);
		} else {
			if (this.toolService.currentTool.info.name === 'line') {
				document.body.addEventListener('dblclick', this.onDoubleClick);
			}
		}
	}

	private onDoubleClick(event: MouseEvent): void {
		this.toolService.currentTool.onDoubleClick(event);
		this.enableShortcuts();
		document.body.removeEventListener('keydown', this.onKeyDown);
		document.body.removeEventListener('dblclick', this.onDoubleClick);
	}

	private onKeyUp(event: KeyboardEvent): void {
		if (this.isKeyDown) {
			this.toolService.handleCommand(event, false);
			this.isKeyDown = !this.isKeyDown;
		}

		document.body.removeEventListener('keyup', this.onKeyUp);
	}
	private onKeyDown(event: KeyboardEvent): void {
		event.preventDefault();
		if (!this.isKeyDown) {
			this.toolService.handleCommand(event, true);
			this.isKeyDown = !this.isKeyDown;
		}
		document.body.addEventListener('keyup', this.onKeyUp);
	}
}
