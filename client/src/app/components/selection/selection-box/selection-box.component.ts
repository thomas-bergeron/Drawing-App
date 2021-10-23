import { Component } from '@angular/core';
import { Vec2 } from '@app/classes/vec2';
import { ClipboardService } from '@app/services/clipboard/clipboard.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { SelectionService } from '@app/services/selection/selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { ToolService } from '@app/services/tools/tool.service';
import { Global } from '@app/shared/global';

@Component({
	selector: 'app-selection-box',
	templateUrl: './selection-box.component.html',
	styleUrls: ['./selection-box.component.scss'],
})
export class SelectionBoxComponent {
	shiftIsPressed: boolean;

	private position: Vec2 = Global.DEFAULT_VECTOR;
	private size: Vec2 = Global.TEST_VECTOR;
	private newSize: Vec2 = Global.TEST_VECTOR;
	private oldSize: Vec2;
	private delta: Vec2 = Global.DEFAULT_VECTOR;
	private oldDistance: Vec2 = Global.DEFAULT_VECTOR;
	private sign: Vec2 = Global.TEST_VECTOR;
	private currentSelectionMode: SelectionService;
	isResizing: boolean = false;

	constructor(
		private drawingService: DrawingService,
		public toolService: ToolService,
		private shiftSelection: ShiftSelectionService,
		private resizeSelectionService: ResizeSelectionService,
		private clipboard: ClipboardService,
	) {
		this.toolService.changeCurrentSelectionMode$.subscribe((mode: SelectionService) => {
			this.changeCurrentSelectionMode(mode);
		});
	}

	placeBox(origin: Vec2): void {
		this.isResizing = false;
		const element = document.getElementById('selection-box') as HTMLElement;
		if (element) {
			element.style.display = 'block';
		}

		this.position = origin;
		if (origin === Global.RESET_VECTOR) {
			this.changeBoxSize(origin);
			element.style.display = 'none';
			this.currentSelectionMode.isActiveSelection = false;
		}
		const newVisibility = origin === Global.RESET_VECTOR ? 'hidden' : 'visible';
		const cpArray = document.getElementsByClassName('box-button');
		// tslint:disable-next-line: prefer-for-of
		for (let i = 0; i < cpArray.length; i++) {
			(cpArray[i] as HTMLElement).style.visibility = newVisibility;
		}
		this.drawingService.placeBoxButton(this.size);
	}

	changeBoxSize(delta: Vec2): void {
		this.isResizing = true;
		this.size = { x: Math.abs(delta.x), y: Math.abs(delta.y) };
		this.delta = delta;
	}

	changeCurrentSelectionMode(mode: SelectionService): void {
		this.currentSelectionMode = mode;
		this.shiftSelection.selector = mode;
		this.clipboard.selector = mode;
		this.currentSelectionMode.changeBoxSize$.subscribe((delta: Vec2) => {
			this.changeBoxSize(delta);
		});
		this.currentSelectionMode.placeBox$.subscribe((origin: Vec2) => {
			this.placeBox(origin);
		});
	}

	get boxWidth(): number {
		return this.size.x;
	}

	get boxHeight(): number {
		return this.size.y;
	}

	get boxLeft(): number {
		return this.delta.x < 0 ? this.position.x + this.delta.x : this.position.x;
	}

	get boxTop(): number {
		return this.delta.y < 0 ? this.position.y + this.delta.y : this.position.y;
	}

	get eastBoxPos(): Vec2 {
		return this.drawingService.eastBoxPos;
	}

	get northBoxPos(): Vec2 {
		return this.drawingService.northBoxPos;
	}

	get northEastBoxPos(): Vec2 {
		return this.drawingService.northEastBoxPos;
	}

	get northWestBoxPos(): Vec2 {
		return this.drawingService.northWestBoxPos;
	}

	get southBoxPos(): Vec2 {
		return this.drawingService.southBoxPos;
	}

	get westBoxPos(): Vec2 {
		return this.drawingService.westBoxPos;
	}

	get southEastBoxPos(): Vec2 {
		return this.drawingService.southEastBoxPos;
	}

	get southWestBoxPos(): Vec2 {
		return this.drawingService.southWestBoxPos;
	}

	startPreview(): void {
		this.oldDistance = Global.DEFAULT_VECTOR;
		this.oldSize = this.newSize = this.size;
		this.resizeSelectionService.selector = this.currentSelectionMode;
		this.toolService.changeTool(Global.RESIZE_SELECTION_SHORTCUT);
		this.toolService.currentTool.isDrawing = true;
		this.resizeSelectionService.resize(this.size, this.size, this.sign, '');
	}

	preview(distanceX: number, distanceY: number, tag: string): void {
		const shiftIsPressed = this.resizeSelectionService.shiftIsPressed;
		const conditionOrigin = this.determineCondition({ x: distanceX, y: distanceY }, tag, shiftIsPressed);

		if (!shiftIsPressed) {
			this.resizeSelectionService.selector.origin.x += conditionOrigin.x === 0 ? distanceX - this.oldDistance.x : 0;
			this.resizeSelectionService.selector.origin.y += conditionOrigin.y === 0 ? distanceY - this.oldDistance.y : 0;
			this.sign = { x: conditionOrigin.x === 0 ? Global.MINUS_ONE : 1, y: conditionOrigin.y === 0 ? Global.MINUS_ONE : 1 };
		} else {
			this.resizeSelectionService.selector.origin.x += (distanceX - this.oldDistance.x) * (conditionOrigin.x !== 0 ? Global.MINUS_ONE : 1);
			this.resizeSelectionService.selector.origin.y += (distanceY - this.oldDistance.y) * (conditionOrigin.y !== 0 ? Global.MINUS_ONE : 1);
			this.sign = { x: conditionOrigin.x === 0 ? Global.MINUS_TWO : 2, y: conditionOrigin.y === 0 ? Global.MINUS_TWO : 2 };
		}
		this.newSize = {
			x: this.size.x + (distanceX - this.oldDistance.x) * this.sign.x,
			y: this.size.y + (distanceY - this.oldDistance.y) * this.sign.y,
		};

		this.oldDistance = { x: distanceX, y: distanceY };
		this.newSize = this.resizeSelectionService.resize(this.newSize, this.size, this.sign, tag);
		this.changeBoxSize(this.newSize);
	}

	private determineCondition(distances: Vec2, tag: string, isShift: boolean): Vec2 {
		const condition = { x: 1, y: 1 };
		if (tag.includes('n')) {
			condition.y = this.oldSize.y - (isShift ? distances.y * 2 : distances.y) > 0 ? 0 : condition.y;
		}
		if (tag.includes('w')) {
			condition.x = this.oldSize.x - (isShift ? distances.x * 2 : distances.x) > 0 ? 0 : condition.x;
		}
		if (tag.includes('s')) {
			condition.y = this.oldSize.y + (isShift ? distances.y * 2 : distances.y) > 0 ? condition.y : 0;
		}
		if (tag.includes('e')) {
			condition.x = this.oldSize.x + (isShift ? distances.x * 2 : distances.x) > 0 ? condition.x : 0;
		}
		return condition;
	}

	endPreview(): void {
		this.size = this.newSize;
		this.resizeSelectionService.resize(this.size, this.size, this.sign, '');
		this.changeBoxSize(this.size);
		this.toolService.currentTool.isDrawing = false;
	}
}
