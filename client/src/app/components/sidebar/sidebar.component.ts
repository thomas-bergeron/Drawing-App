import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { SelectionService } from '@app/services/selection/selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { ToolService } from '@app/services/tools/tool.service';
import { Command, Global } from '@app/shared/global';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';
import { SaveComponent } from 'src/app/components/save/save.component';
import { WarningComponent } from 'src/app/components/warning/warning.component';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
	constructor(
		public toolService: ToolService,
		public dialog: MatDialog,
		public drawingService: DrawingService,
		public event: EventManagerService,
	) {}

	@ViewChild('sidebarElement')
	sidebarElement: ElementRef;

	ngAfterViewInit(): void {
		this.drawingService.positionX = this.sidebarElement.nativeElement.offsetWidth;
	}

	openModal(): void {
		this.event.disableShortcuts();
		const dialogRef = this.dialog.open(CarrouselComponent, { panelClass: 'custom-carrousel-container' });
		dialogRef.afterClosed().subscribe((result: boolean) => {
			this.event.enableShortcuts();
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

	toggleDrawingOptions(shortcut: string): void {
		if (shortcut === 'g') {
			this.event.toggleView(shortcut);
		}
	}

	openExport(): void {
		this.event.exportWrapper();
	}

	openSaving(): void {
		this.event.disableShortcuts();
		const dialogRef = this.dialog.open(SaveComponent, { panelClass: 'custom-dialog-container' });
		dialogRef.afterClosed().subscribe(() => this.event.enableShortcuts());
	}
	newDrawing(): void {
		if (!this.drawingService.isEmpty()) {
			this.event.disableShortcuts();
			const dialogRef = this.dialog.open(WarningComponent, { panelClass: 'custom-warning-container' });
			dialogRef.afterClosed().subscribe((result: boolean) => {
				this.event.enableShortcuts();
				if (result) this.drawingService.new();
			});
		}
	}

	undo(): void {
		this.drawingService.undo();
	}
	redo(): void {
		this.drawingService.redo();
	}

	valueChange(value: string): void {
		const command = { key: Command.ESCAPE } as KeyboardEvent;
		this.toolService.changeTool(value);
		this.toolService.currentTool.handleCommand(command, true);
	}

	runShortcut(value: string): void {
		const command = { key: value } as KeyboardEvent;
		if (this.toolService.currentTool.info.name.includes('selection') && !'rsv'.includes(value)) {
			this.drawingService.addAction(this.drawingService.lastAction);
		}
		this.toolService.changeTool(value);
		this.toolService.currentTool.handleCommand(command, true);
	}

	handleClipboard(key: string): void {
		const operation = 'isShifting' in this.toolService.currentTool ? 1 : 0;
		this.toolService.clipboardService.handleCommand(key, operation);
	}

	selectionIsActive(): boolean {
		if ('placeBox$' in this.toolService.currentTool) {
			return (this.toolService.currentTool as SelectionService).isActiveSelection;
		} else if (Global.SHIFT_SELECTION_SHORTCUT === this.toolService.currentTool.info.shortcut) {
			return (this.toolService.currentTool as ShiftSelectionService).selector.isActiveSelection;
		} else if (Global.RESIZE_SELECTION_SHORTCUT === this.toolService.currentTool.info.shortcut) {
			return (this.toolService.currentTool as ResizeSelectionService).selector.isActiveSelection;
		}
		return false;
	}

	clipboardNotEmpty(): boolean {
		return this.toolService.clipboardService.canPaste;
	}

	toolInUse(): boolean {
		return this.toolService.hasBegunDrawing();
	}

	verifyValue(value: string): boolean {
		if (value === 'm') {
			return this.toolService.magnetIsActive();
		}
		return this.toolService.currentTool.info.shortcut === value;
	}
}
