import { Injectable } from '@angular/core';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { Global } from '@app/shared/global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
// tslint:disable:no-empty
export abstract class SelectionService {
	info: ToolInfo;
	options: ToolOption;
	origin: Vec2;
	deltaX: number;
	deltaY: number;
	selection: ImageData;
	isActiveSelection: boolean;

	placeBoxCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	placeBox$: Observable<Vec2> = this.placeBoxCallSource.asObservable();
	changeBoxSizeCallSource: Subject<Vec2> = new BehaviorSubject<Vec2>(Global.DEFAULT_VECTOR);
	changeBoxSize$: Observable<Vec2> = this.changeBoxSizeCallSource.asObservable();

	handleCommand(command: KeyboardEvent, isDown?: boolean): void {}

	selectRectangle(origin: Vec2): void {}

	deleteCurrentSelection(): void {}

	callPlaceBox(origin: Vec2): void {}

	callChangeBoxSize(delta: Vec2): void {}

	redrawSelection(position: Vec2, status: number, deltas: Vec2, selection: ImageData): void {}
}
