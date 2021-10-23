import { Component, HostListener, OnInit } from '@angular/core';
import { Vec2 } from '@app/classes/vec2';
import { ClipboardService } from '@app/services/clipboard/clipboard.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { SelectionService } from '@app/services/selection/selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { ToolService } from '@app/services/tools/tool.service';
import { Arrows, Command, Global, Shortcut } from '@app/shared/global';

@Component({
	selector: 'app-selection-manager',
	templateUrl: './selection-manager.component.html',
	styleUrls: ['./selection-manager.component.scss'],
})
export class SelectionManagerComponent implements OnInit {
	position: Vec2;
	size: Vec2;
	delta: Vec2;
	sign: Vec2;
	keyMap: Map<string, boolean>;
	timerMode: boolean;

	constructor(
		public toolService: ToolService,
		private shiftSelection: ShiftSelectionService,
		private resizeSelection: ResizeSelectionService,
		private clipboard: ClipboardService,
	) {
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.size = this.sign = Global.TEST_VECTOR;
		this.position = this.delta = Global.DEFAULT_VECTOR;
		this.keyMap = new Map();
		this.keyMap.set(Arrows.ARROWDOWN, false);
		this.keyMap.set(Arrows.ARROWLEFT, false);
		this.keyMap.set(Arrows.ARROWRIGHT, false);
		this.keyMap.set(Arrows.ARROWUP, false);
		this.timerMode = false;
	}

	ngOnInit(): void {
		(document.getElementById('selection') as HTMLElement).addEventListener('mousedown', this.onMouseDown);
		(document.getElementById('selection') as HTMLElement).addEventListener('mouseup', this.onMouseUp);
	}

	onMouseDown(event: MouseEvent): void {
		if ('placeBox$' in this.toolService.currentTool) {
			this.shiftSelection.operation = 0;
		}
		this.toolService.changeTool(Global.SHIFT_SELECTION_SHORTCUT);
		const element = document.getElementById('selection-manager') as HTMLElement;
		this.position = {
			x: parseFloat((element.parentElement as HTMLElement).style.left),
			y: parseFloat((element.parentElement as HTMLElement).style.top),
		};
		this.size = { x: parseFloat(element.style.width), y: parseFloat(element.style.height) };
		this.shiftSelection.handleMouseDown(event, this.position, this.size);
	}

	onMouseUp(event: MouseEvent): void {
		this.toolService.currentTool.isDrawing = false;
		this.shiftSelection.onMouseUp();
	}

	@HostListener('body:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent): void {
		if (this.keyIsArrow(event.key)) {
			this.handleArrowsDown(event.key);
		} else if (event.ctrlKey) {
			this.handleCtrlDown(event.key);
		} else if (event.key === Command.SHIFT) {
			this.resizeSelection.shiftIsPressed = true;
		} else if (event.key === Command.DELETE && this.clipboard.selector.isActiveSelection) {
			this.clipboard.handleCommand(event.key, this.shiftSelection.operation);
		} else if (event.key === Command.ESCAPE) {
			this.handleEscapeDown();
		}
	}

	private handleArrowsDown(key: string): void {
		if ('placeBox$' in this.toolService.currentTool) {
			this.toolService.changeTool(Global.SHIFT_SELECTION_SHORTCUT);
			this.shiftSelection.operation = 0;
		}
		this.keyMap.set(key, true);

		if (this.toolService.currentTool.info.shortcut === 'shiftSelection') {
			setTimeout(
				() => {
					const element = document.getElementById('selection-manager') as HTMLElement;
					this.size = { x: parseFloat(element.style.width), y: parseFloat(element.style.height) };
					(this.toolService.currentTool as ShiftSelectionService).handleCommandMap(this.keyMap, this.size);
					this.timerMode = false;
					this.clipboard.selector.isActiveSelection = false;
					this.shiftSelection.isDrawing = true;
				},
				this.timerMode ? Global.INIT_TIMER : Global.OTHER_TIMER,
			);
		}
	}

	private handleCtrlDown(key: string): void {
		if (key === 'a') {
			this.toolService.changeTool(Shortcut.SURFACE_SELECTION);
			this.toolService.handleCommand(new KeyboardEvent('keydown', { key: 'a', ctrlKey: true }), true);
		} else if (this.clipboard.selector.isActiveSelection || key === 'v') {
			this.clipboard.handleCommand(key, this.shiftSelection.operation);

			this.clipboard.changeClipSize$.subscribe(() => {
				if ('cx'.includes(key)) {
					this.changeClipSize();
				}
			});

			if (key === 'v') {
				this.shiftSelection.operation = 1;
				this.resizeSelection.isFirstResize = false;
				this.toolService.changeTool(Global.SHIFT_SELECTION_SHORTCUT);
				this.shiftSelection.handleCommandMap(this.keyMap, this.clipboard.clipSize);
			}
		}
	}

	private handleEscapeDown(): void {
		if ('placeBox$' in this.toolService.currentTool) {
			(this.toolService.currentTool as SelectionService).deleteCurrentSelection();
		} else if (this.toolService.currentTool.info.shortcut === Global.SHIFT_SELECTION_SHORTCUT) {
			(this.toolService.currentTool as ShiftSelectionService).selector.deleteCurrentSelection();
		} else if (this.toolService.currentTool.info.shortcut === Global.RESIZE_SELECTION_SHORTCUT) {
			(this.toolService.currentTool as ResizeSelectionService).selector.deleteCurrentSelection();
		}
	}

	@HostListener('body:keyup', ['$event'])
	handleKeyUp(event: KeyboardEvent): void {
		if (this.keyIsArrow(event.key)) {
			if (this.toolService.currentTool.info.shortcut === 'shiftSelection') {
				setTimeout(
					() => {
						this.keyMap.set(event.key, false);
						(this.toolService.currentTool as ShiftSelectionService).handleCommandMap(this.keyMap, this.size);
						let counter = 0;
						this.keyMap.forEach((value: boolean, key: string) => {
							if (
								key.substring(0, Global.ARROW_SUBSTRING_LENGTH) === Arrows.ARROWDOWN.substring(0, Global.ARROW_SUBSTRING_LENGTH) &&
								!value
							) {
								counter++;
							}
						});
						this.timerMode = counter === Global.ARROW_NUMBER ? true : false;
						if (this.timerMode) {
							this.clipboard.selector.isActiveSelection = true;
							this.toolService.changeTool(this.shiftSelection.selector.info.shortcut);
							this.toolService.currentTool.isDrawing = false;
						}
					},
					this.timerMode ? Global.INIT_TIMER : Global.OTHER_TIMER,
				);
			}
		} else if (event.key === Command.SHIFT) {
			this.resizeSelection.shiftIsPressed = false;
		}
	}

	private keyIsArrow(value: string): boolean {
		return value === Arrows.ARROWDOWN || value === Arrows.ARROWLEFT || value === Arrows.ARROWRIGHT || value === Arrows.ARROWUP;
	}

	private changeClipSize(): void {
		const element = document.getElementById('selection-manager') as HTMLElement;
		this.size = { x: parseFloat(element.style.width), y: parseFloat(element.style.height) };
		this.clipboard.clipSize = this.size;
	}
}
