import { Injectable } from '@angular/core';
import { TextOptions } from '@app/classes/text-options';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { Global } from '@app/shared/global';
import { Tool } from 'src/app/classes/tool';
import { DrawingService } from 'src/app/services/drawing/drawing.service';

@Injectable({
	providedIn: 'root',
})
export class TextService extends Tool {
	private readonly DEFAULT_INDICATOR_SIZE: number = 4;
	// tslint:disable-next-line:no-magic-numbers
	private readonly CURSOR_HEIGHT_FACTOR: number = 2 / 3;

	info: ToolInfo = new ToolInfo('text', 'Texte', 't');
	options: ToolOption = new ToolOption(undefined, false, false, Global.UNDEFINED_SIZE, false, false, true);
	isDrawing: boolean = false;

	private currentPos: number = 0;
	private textPos: Vec2;
	private text: string = '';

	private commandMap: Map<string, () => void> = new Map<string, () => void>();

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.fontChanged = this.fontChanged.bind(this);

		this.commandMap.set('Backspace', () => {
			this.backspaceEvent();
		});
		this.commandMap.set('Delete', () => {
			this.deleteEvent();
		});
		this.commandMap.set('ArrowRight', () => {
			this.arrowRightEvent();
		});
		this.commandMap.set('ArrowLeft', () => {
			this.arrowLeftEvent();
		});
		this.commandMap.set('ArrowUp', () => {
			this.arrowUpEvent();
		});
		this.commandMap.set('ArrowDown', () => {
			this.arrowDownEvent();
		});
		this.commandMap.set('Escape', () => {
			this.escapeEvent();
		});
	}

	onMouseDown(event: MouseEvent, preventDrawing?: boolean): void {
		if (!this.isDrawing) {
			event.stopPropagation();

			this.isDrawing = true;
			this.textPos = super.getPagePositionFromMouse(event);
			this.drawPreview();

			document.body.addEventListener('keydown', this.handleKeyDown);
			document.body.addEventListener('mousedown', this.onMouseDown);
		} else if (this.shouldEndEditing(event)) {
			if (!preventDrawing && this.text.length > 0) {
				const text = this.text;
				const textPos = this.textPos;
				const textOptions = { ...this.options.textOptions };
				const color = this.drawingService.primaryColor;
				const drawTextCallable: CallableFunction = () => {
					this.drawText(this.drawingService.baseCtx, text, textPos, textOptions, color);
				};
				drawTextCallable();
				this.drawingService.addAction(drawTextCallable);
			}

			this.isDrawing = false;
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.text = '';
			this.currentPos = 0;

			document.body.removeEventListener('keydown', this.handleKeyDown);
			document.body.removeEventListener('mousedown', this.onMouseDown);
		} else {
			document.body.addEventListener('mouseup', this.fontChanged);
		}
	}

	private fontChanged(): void {
		setTimeout(() => {
			this.drawPreview();
		});
		document.body.removeEventListener('mouseup', this.fontChanged);
	}

	private shouldEndEditing(event: MouseEvent): boolean {
		let shouldEnd = true;

		const attributesPanel = document.getElementById('attributes-panel') as HTMLDivElement;
		const colorPicker = document.getElementsByClassName('color-picker')[0] as HTMLDivElement;
		shouldEnd =
			!(
				event.x >= attributesPanel.offsetLeft &&
				event.x <= attributesPanel.offsetLeft + attributesPanel.offsetWidth &&
				event.y >= attributesPanel.offsetTop &&
				event.y <= attributesPanel.offsetTop + attributesPanel.offsetHeight
			) && colorPicker === undefined;

		return shouldEnd;
	}

	handleKeyDown(event: KeyboardEvent): void {
		if (this.commandMap.has(event.key)) {
			(this.commandMap.get(event.key) as () => void)();
		} else if (!this.isPreventedKey(event)) {
			const char: string = event.key === 'Enter' ? '\n' : event.key;
			this.text = this.text.slice(0, this.currentPos) + char + this.text.slice(this.currentPos, this.text.length);
			this.currentPos++;
		}

		this.drawPreview();
	}

	private isPreventedKey(event: KeyboardEvent): boolean {
		const preventedKeys: string[] = [
			'CapsLock',
			'Shift',
			'Meta',
			'Alt',
			'Control',
			'Tab',
			'AltGraph',
			'ContextMenu',
			'Dead',
			'F1',
			'F2',
			'F3',
			'F4',
			'F5',
			'F6',
			'F7',
			'F8',
			'F9',
			'F10',
			'F11',
			'F12',
		];
		return preventedKeys.includes(event.key);
	}

	private backspaceEvent(): void {
		const newText = this.text.slice(0, this.currentPos - 1) + this.text.slice(this.currentPos, this.text.length);
		if (newText.length < this.text.length) {
			this.text = newText;
			this.currentPos--;
		}
	}

	private deleteEvent(): void {
		this.text = this.text.slice(0, this.currentPos) + this.text.slice(this.currentPos + 1, this.text.length);
	}

	private arrowRightEvent(): void {
		if (this.currentPos + 1 <= this.text.length) this.currentPos++;
	}

	private arrowLeftEvent(): void {
		if (this.currentPos - 1 >= 0) this.currentPos--;
	}

	private arrowUpEvent(): void {
		const lines = this.text.split('\n');
		const pos = this.getLinePos();
		if (pos.x - 1 >= 0) {
			switch (this.options.textOptions.alignment) {
				case 'left':
					this.currentPos = this.currentPos - (pos.y + Math.max(lines[pos.x - 1].slice(pos.y).length, 0) + 1);
					break;
				case 'center':
					const offset = pos.y - Math.floor(lines[pos.x].length / 2);
					this.currentPos =
						this.currentPos -
						(lines[pos.x].slice(0, lines[pos.x].length / 2 + offset).length +
							lines[pos.x - 1].slice(Math.max(Math.floor(lines[pos.x - 1].length / 2) + offset, 0)).length +
							1);
					break;
				case 'right':
					this.currentPos = this.currentPos - (pos.y + Math.min(lines[pos.x].slice(pos.y).length, lines[pos.x - 1].length) + 1);
					break;
			}
		}
	}

	private arrowDownEvent(): void {
		const lines = this.text.split('\n');
		const pos = this.getLinePos();
		if (pos.x + 1 < lines.length)
			switch (this.options.textOptions.alignment) {
				case 'left':
					this.currentPos = this.currentPos + (Math.max(lines[pos.x].slice(pos.y).length, 0) + lines[pos.x + 1].slice(0, pos.y).length + 1);
					break;
				case 'center':
					const offset = pos.y - Math.floor(lines[pos.x].length / 2);
					this.currentPos =
						this.currentPos +
						lines[pos.x].slice(lines[pos.x].length / 2 + offset).length +
						lines[pos.x + 1].slice(0, Math.max(Math.floor(lines[pos.x + 1].length / 2) + offset, 0)).length +
						1;
					break;
				case 'right':
					this.currentPos =
						this.currentPos +
						lines[pos.x].slice(pos.y).length +
						Math.max(lines[pos.x + 1].length - lines[pos.x].slice(pos.y).length, 0) +
						1;
					break;
			}
	}

	private escapeEvent(): void {
		this.onMouseDown(new MouseEvent('mousedown'), true);
	}

	private getLinePos(): Vec2 {
		const lines: string[] = this.text.split('\n');

		let returnValues = { x: Global.UNDEFINED_SIZE, y: Global.UNDEFINED_SIZE };
		let linePos = 0;
		lines.forEach((line, index) => {
			const lineLength = line.length;
			if (this.currentPos >= linePos && this.currentPos <= linePos + lineLength) {
				returnValues = { x: index, y: this.currentPos - linePos };
			}

			linePos += lineLength + 1;
		});
		return returnValues;
	}

	private drawPreview(): void {
		const ctx: CanvasRenderingContext2D = this.drawingService.previewCtx;
		this.drawingService.clearCanvas(ctx);

		ctx.fillStyle = 'black';
		ctx.fillRect(
			this.textPos.x - this.DEFAULT_INDICATOR_SIZE / 2,
			this.textPos.y - this.DEFAULT_INDICATOR_SIZE / 2,
			this.DEFAULT_INDICATOR_SIZE,
			this.DEFAULT_INDICATOR_SIZE,
		);

		const cursorPos = this.getLinePos();
		this.drawText(ctx, this.text, this.textPos, this.options.textOptions, this.drawingService.primaryColor, cursorPos);
	}

	private drawText(ctx: CanvasRenderingContext2D, text: string, pos: Vec2, textOptions: TextOptions, color: string, cursorPos?: Vec2): void {
		ctx.fillStyle = color;
		ctx.textAlign = textOptions.alignment as CanvasTextAlign;

		let boldItalic = textOptions.isItalic ? 'italic ' : '';
		boldItalic += textOptions.isBold ? 'bold ' : '';
		ctx.font = boldItalic + ' ' + textOptions.fontSize + 'px ' + textOptions.font;

		const lines: string[] = text.split('\n');

		let totalHeight = 0;
		let alignmentX = 0;

		if (textOptions.alignment !== 'left') {
			lines.forEach((line) => {
				const textWidth = ctx.measureText(line).width;
				if (textWidth > alignmentX) alignmentX = textWidth;
			});

			if (textOptions.alignment === 'center') alignmentX = alignmentX / 2;
		}

		lines.forEach((line, index) => {
			const fontMetrics = ctx.measureText(line);
			const lineHeight = fontMetrics.fontBoundingBoxAscent + fontMetrics.fontBoundingBoxDescent;

			if (index > 0) {
				totalHeight += lineHeight;
			}

			if (cursorPos !== undefined && cursorPos.x === index) {
				const cursor: Vec2 = { x: 0, y: pos.y + totalHeight };
				switch (textOptions.alignment) {
					case 'left':
						cursor.x = pos.x + alignmentX + ctx.measureText(line.slice(0, cursorPos.y)).width;
						break;
					case 'center':
						cursor.x = pos.x + alignmentX + ctx.measureText(line.slice(0, cursorPos.y)).width - ctx.measureText(line).width / 2;
						break;
					case 'right':
						cursor.x = pos.x + alignmentX - ctx.measureText(line.slice(cursorPos.y)).width;
						break;
				}

				ctx.save();
				ctx.fillStyle = 'black';
				ctx.fillRect(cursor.x, cursor.y, 1, -lineHeight * this.CURSOR_HEIGHT_FACTOR);
				ctx.restore();
			}

			ctx.fillText(line, pos.x + alignmentX, pos.y + totalHeight);
		});
	}
}
