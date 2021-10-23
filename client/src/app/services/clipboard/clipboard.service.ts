import { Injectable } from '@angular/core';
import { ClipboardInfo } from '@app/classes/clipboard-info';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { SelectionService } from '@app/services/selection/selection.service';
import { Command, Global } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ClipboardService {
	private clip: ClipboardInfo;
	canPaste: boolean;
	selector: SelectionService;
	clipSize: Vec2;

	private changeClipSizeCallSource: Subject<string> = new BehaviorSubject<string>('');
	changeClipSize$: Observable<string> = this.changeClipSizeCallSource.asObservable();

	constructor(private drawingService: DrawingService) {
		this.clip = { selection: new ImageData(1, 1), posX: 0, posY: 0, width: 0, height: 0 };
		this.canPaste = false;
		this.clipSize = Global.DEFAULT_VECTOR;
	}

	handleCommand(key: string, operation: number): void {
		switch (key) {
			case Global.COPY_SHORTCUT:
				this.copySelection();
				break;
			case Global.CUT_SHORTCUT:
				this.cutSelection(operation);
				break;
			case Global.PASTE_SHORTCUT:
				this.pasteSelection();
				break;
			case Command.DELETE:
				this.deleteSelection(operation);
				break;
		}
	}

	private copySelection(): void {
		if (this.selector.isActiveSelection) {
			this.clip.selection = this.selector.selection;
			this.clip.posX = this.selector.origin.x;
			this.clip.posY = this.selector.origin.y;
			this.clip.width = Math.abs(this.selector.deltaX);
			this.clip.height = Math.abs(this.selector.deltaY);

			this.canPaste = true;
			this.callChangeClipSize();
		}
	}

	private cutSelection(operation: number): void {
		if (this.selector.isActiveSelection) {
			this.copySelection();
			const position = { x: this.clip.posX, y: this.clip.posY };
			this.clip.width = this.clip.width === 0 ? 1 : this.clip.width;
			this.clip.height = this.clip.height === 0 ? 1 : this.clip.height;
			this.selector.redrawSelection(position, operation !== 1 ? 0 : 1, { x: this.clip.width, y: this.clip.height }, this.clip.selection);
			this.selector.deleteCurrentSelection();
			const wrappedPosition: Vec2 = { ...position };
			const wrappedSize: Vec2 = { ...{ x: this.clip.width, y: this.clip.height } };
			const wrappedSelector: SelectionService = this.selector;
			const imageData: ImageData = this.clip.selection;
			const func: CallableFunction = () => {
				wrappedSelector.redrawSelection(wrappedPosition, operation !== 1 ? 0 : 1, wrappedSize, imageData);
				this.selector.deleteCurrentSelection();
			};
			this.drawingService.addAction(func);
		}
	}

	private pasteSelection(): void {
		if (this.canPaste) {
			const position = { x: 0, y: 0 };
			this.clipSize.x = this.clipSize.x === 0 ? this.clip.width : this.clipSize.x;
			this.clipSize.y = this.clipSize.y === 0 ? this.clip.height : this.clipSize.y;
			this.selector.deltaX = this.clip.width;
			this.selector.deltaY = this.clip.height;
			this.selector.redrawSelection(position, 1, this.clipSize, this.clip.selection);
			const wrappedPosition: Vec2 = { ...position };
			const wrappedSize: Vec2 = { ...this.clipSize };
			const wrappedSelector: SelectionService = this.selector;
			const imageData: ImageData = this.clip.selection;
			const func: CallableFunction = () => {
				wrappedSelector.redrawSelection(wrappedPosition, 1, wrappedSize, imageData);
				this.selector.deleteCurrentSelection();
			};
			this.drawingService.addAction(func);
			this.selector.selection = this.clip.selection;
			this.clip.posX = this.clip.posY = 0;
			this.selector.origin = position;
			this.selector.isActiveSelection = true;
		}
	}

	private deleteSelection(operation: number): void {
		const tempClip = this.clip;
		this.cutSelection(operation);
		this.clip = tempClip;
		this.canPaste = false;
		this.selector.deltaX = this.selector.deltaY = 0;
	}

	private callChangeClipSize(): void {
		this.changeClipSizeCallSource.next();
	}
}
