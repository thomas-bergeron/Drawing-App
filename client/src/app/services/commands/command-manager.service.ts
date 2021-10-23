import { Injectable } from '@angular/core';
// import { CanvasAction } from '@app/classes/canvas-action';

@Injectable({
	providedIn: 'root',
})
export class CommandManagerService {
	private normalStack: CallableFunction[] = [] as CallableFunction[];
	private historyStack: CallableFunction[] = [] as CallableFunction[];

	constructor() {
		this.normalStack = [] as CallableFunction[];
		this.historyStack = [] as CallableFunction[];
	}

	async undo(): Promise<void> {
		if (!this.undoIsReady()) {
			return;
		}
		this.historyStack.push(this.normalStack.pop() as CallableFunction);
		await this.update();
	}

	async redo(): Promise<void> {
		if (!this.redoIsReady()) {
			return;
		}
		this.normalStack.push(this.historyStack.pop() as CallableFunction);
		await this.update();
	}

	clear(): void {
		this.normalStack = [];
		this.historyStack = [];
	}

	redoIsReady(): boolean {
		return !(this.historyStack.length < 1);
	}
	undoIsReady(): boolean {
		return !(this.normalStack.length < 2);
	}

	private async update(): Promise<void> {
		for (const action of this.normalStack) {
			await action();
		}
	}
	replaceAction(action: CallableFunction): void {
		this.normalStack.pop();
		this.normalStack.push(action);
	}

	addAction(action: CallableFunction): void {
		this.normalStack.push(action);
		this.historyStack = [];
	}
}
