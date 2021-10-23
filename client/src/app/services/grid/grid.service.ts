import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class GridService extends Tool {
	gridColor: string = 'rgba(221,221,221)';
	commandMap: Map<string, () => void> = new Map<string, () => void>();
	info: ToolInfo = new ToolInfo('grille', 'Grille', 'g');
	options: ToolOption = new ToolOption(undefined, undefined, undefined, 1, true);
	vPath: string = 'M ' + this.options.gridOptions.size + ' 0 V' + this.options.gridOptions.size;
	hPath: string = 'M 0 ' + this.options.gridOptions.size + ' H' + this.options.gridOptions.size;
	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.commandMap.set('+', () => {
			this.incrementGridSize();
		});
		this.commandMap.set('=', () => {
			this.incrementGridSize();
		});
		this.commandMap.set('-', () => {
			this.decrementGridSize();
		});
	}

	toggleGrid(): void {
		this.options.gridOptions.isActive = !this.options.gridOptions.isActive;
	}

	handleCommand(command: KeyboardEvent, isDown: boolean): void {
		const key = command.key;
		if (this.commandMap.has(key)) {
			(this.commandMap.get(key) as () => void)();
		}
	}

	updateSize(size: number): void {
		this.options.gridOptions.size = size;
		this.vPath = 'M ' + this.options.gridOptions.size + ' 0 V' + this.options.gridOptions.size;
		this.hPath = 'M 0 ' + this.options.gridOptions.size + ' H' + this.options.gridOptions.size;
	}

	incrementGridSize(): void {
		if (this.options.gridOptions.size < Global.MAX_SQUARE_SIZE) {
			this.options.gridOptions.size += Global.INCREMENT_VALUE - (this.options.gridOptions.size % Global.INCREMENT_VALUE);
		}
		this.updateSize(this.options.gridOptions.size);
	}
	decrementGridSize(): void {
		if (this.options.gridOptions.size > Global.MIN_SQUARE_SIZE) {
			this.options.gridOptions.size -=
				this.options.gridOptions.size % Global.INCREMENT_VALUE === 0
					? Global.INCREMENT_VALUE
					: this.options.gridOptions.size % Global.INCREMENT_VALUE;
		} else {
			this.options.gridOptions.size = Global.MIN_SQUARE_SIZE;
		}

		this.updateSize(this.options.gridOptions.size);
	}
}
