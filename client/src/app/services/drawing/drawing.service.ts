import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { Vec2 } from '@app/classes/vec2';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { Global } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class DrawingService {
	baseCtx: CanvasRenderingContext2D;
	previewCtx: CanvasRenderingContext2D;
	primaryColor: string = '#000000FF';
	secondaryColor: string = '#FF0000FF';
	colorHistory: string[] = new Array(Global.COLOR_HISTORY_COUNT);
	positionX: number;
	containerSize: Vec2 = { x: Global.DEFAULT_WIDTH, y: Global.DEFAULT_HEIGHT };
	canvasSize: Vec2 = { x: Global.DEFAULT_WIDTH, y: Global.DEFAULT_HEIGHT };
	canvasImage: string = '';
	bottomResizePos: Vec2;
	rightResizePos: Vec2;
	cornerResizePos: Vec2;
	commandManager: CommandManagerService;
	eastBoxPos: Vec2;
	northBoxPos: Vec2;
	northEastBoxPos: Vec2;
	northWestBoxPos: Vec2;
	southBoxPos: Vec2;
	southEastBoxPos: Vec2;
	southWestBoxPos: Vec2;
	westBoxPos: Vec2;

	// tslint:disable-next-line: no-empty
	lastAction: CallableFunction = () => {};

	constructor(commandManagerParam: CommandManagerService) {
		this.colorHistory[0] = this.primaryColor;
		this.colorHistory[1] = this.secondaryColor;
		this.commandManager = commandManagerParam;
		this.canvasImage = localStorage.getItem('save') !== null ? (localStorage.getItem('save') as string) : '';
	}

	clearCanvas(context: CanvasRenderingContext2D): void {
		context.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
		if (context === this.baseCtx) {
			context.fillStyle = 'white';
			context.fillRect(0, 0, this.canvasSize.x, this.canvasSize.y);
		}
	}

	addAction(action: CallableFunction): void {
		this.commandManager.addAction(action);
		localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
	}

	undoIsReady(): boolean {
		return this.commandManager.undoIsReady();
	}

	redoIsReady(): boolean {
		return this.commandManager.redoIsReady();
	}

	undo(): void {
		if (this.undoIsReady()) {
			this.clearCanvas(this.baseCtx);
			if (this.canvasImage !== '') {
				const image = new Image();
				image.onload = () => {
					this.baseCtx.drawImage(image, 0, 0);
				};
				image.src = this.canvasImage;
			}
		}
		this.commandManager.undo().then(() => {
			localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
		});
	}

	redo(): void {
		if (this.canvasImage !== '') {
			const image = new Image();
			image.onload = () => {
				this.baseCtx.drawImage(image, 0, 0);
			};
			image.src = this.canvasImage;
		}
		this.commandManager.redo().then(() => {
			localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
		});
	}

	changeColor(color: string, changePrimaryColor: boolean, forceAdd: boolean): void {
		const nbColors = this.colorHistory.filter((element: string) => {
			return element != undefined;
		}).length;

		let colorIndex: number = Global.UNDEFINED_COLOR;
		for (let i = 0; i < nbColors && colorIndex === Global.UNDEFINED_COLOR; i++) {
			if (this.compareColors(this.colorHistory[i], color)) colorIndex = i;
		}

		if (!forceAdd && colorIndex === Global.UNDEFINED_COLOR) return;

		if (changePrimaryColor) {
			this.primaryColor = color;
		} else {
			this.secondaryColor = color;
		}

		if (colorIndex !== Global.UNDEFINED_COLOR) {
			this.colorHistory = this.colorHistory.slice(0, colorIndex).concat(this.colorHistory.slice(colorIndex + 1, Global.COLOR_HISTORY_COUNT));
			this.colorHistory.unshift(color);
		} else {
			this.colorHistory.pop();
			this.colorHistory.unshift(color);
		}
	}

	compareColors(firstColor: string, secondColor: string): boolean {
		return firstColor.substring(0, Global.ALPHA_INDEX_HEX) === secondColor.substring(0, Global.ALPHA_INDEX_HEX);
	}

	// fonction adaptee de la page https://css-tricks.com/converting-color-spaces-in-javascript/
	RGBToHex(r: number, g: number, b: number, a?: number): string {
		let hexR: string = r.toString(16);
		let hexG: string = g.toString(16);
		let hexB: string = b.toString(16);
		let hexA;
		if (a !== undefined) hexA = a.toString(16) || '0';

		if (hexR.length === 1) hexR = '0' + hexR;
		if (hexG.length === 1) hexG = '0' + hexG;
		if (hexB.length === 1) hexB = '0' + hexB;
		if (hexA && hexA.length === 1) hexA = '0' + hexA;

		let color = '#' + hexR.toUpperCase() + hexG.toUpperCase() + hexB.toUpperCase();
		if (a !== undefined && hexA) color += hexA.toUpperCase();
		return color;
	}

	resetCursor(currentTool: Tool): void {
		this.clearCanvas(this.previewCtx);
		switch (currentTool.info.name) {
			case 'eraser':
			case 'eye-dropper':
			case 'stamp':
				this.previewCtx.canvas.style.cursor = 'none';
				break;
			default:
				this.previewCtx.canvas.style.cursor = 'crosshair';
				break;
		}
	}

	isEmpty(): boolean {
		const pixelBuffer = new Uint32Array(this.baseCtx.getImageData(0, 0, this.canvasSize.x, this.canvasSize.y).data.buffer);
		return !pixelBuffer.some((color) => color !== 0);
	}

	isWhiteCanvas(): boolean {
		const pixelBuffer = new Uint32Array(this.baseCtx.getImageData(0, 0, this.canvasSize.x, this.canvasSize.y).data);
		return !pixelBuffer.some((color) => color !== Global.MAX_HEX_VALUE);
	}

	new(): void {
		this.baseCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
		this.previewCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.x);
		this.commandManager.clear();
		this.canvasImage = '';
		this.initCanvas();
	}

	placeResizeButton(component: Vec2): void {
		this.bottomResizePos = { x: component.x / 2 - Global.HALF_CP_SIZE, y: component.y };
		this.rightResizePos = { x: component.x, y: component.y / 2 - Global.HALF_CP_SIZE };
		this.cornerResizePos = { x: component.x, y: component.y };
		if (component.x <= Global.MIN_SIZE) {
			component.x = Global.MIN_SIZE;
			this.bottomResizePos.x = Global.MIN_SIZE / 2 - Global.HALF_CP_SIZE;
			this.rightResizePos.x = Global.MIN_SIZE;
			this.cornerResizePos.x = Global.MIN_SIZE;
		}
		if (component.y <= Global.MIN_SIZE) {
			component.y = Global.MIN_SIZE;
			this.bottomResizePos.y = Global.MIN_SIZE;
			this.rightResizePos.y = Global.MIN_SIZE / 2 - Global.HALF_CP_SIZE;
			this.cornerResizePos.y = Global.MIN_SIZE;
		}
	}

	getCanvasDimensions(): Vec2 {
		return { x: Math.round(this.canvasSize.x), y: Math.round(this.canvasSize.y) };
	}

	placeBoxButton(component: Vec2): void {
		const boxShift = (Global.SHIFT_FACTOR * Global.BOX_CP_SIZE) / 2;
		this.eastBoxPos = { x: component.x - boxShift, y: component.y / 2 - Global.BOX_CP_SIZE };
		this.northBoxPos = { x: component.x / 2 - Global.BOX_CP_SIZE, y: -boxShift - 2 };
		this.northEastBoxPos = { x: component.x - boxShift, y: -boxShift - 2 };
		this.northWestBoxPos = { x: -boxShift, y: -boxShift };
		this.southBoxPos = { x: component.x / 2 - Global.BOX_CP_SIZE / 2 - 1, y: component.y - boxShift };
		this.southEastBoxPos = { x: component.x - boxShift, y: component.y - boxShift };
		this.southWestBoxPos = { x: -boxShift - 2, y: component.y - boxShift };
		this.westBoxPos = { x: -boxShift - 2, y: component.y / 2 - Global.BOX_CP_SIZE };
	}

	initCanvas(): void {
		if (this.canvasImage !== '') {
			const image = new Image();

			this.baseCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
			image.onload = () => {
				this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = image.width;
				this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = image.height;
				this.baseCtx.drawImage(image, 0, 0);
				this.placeResizeButton(this.canvasSize);
				this.addActionToStack();
			};
			image.src = this.canvasImage;
		} else {
			if (this.containerSize.x < Global.MIN_SIZE_CONDITION) {
				this.canvasSize.x = Global.MIN_SIZE;
			} else {
				this.canvasSize.x = this.containerSize.x / 2;
			}
			if (this.containerSize.y < Global.MIN_SIZE_CONDITION) {
				this.canvasSize.y = Global.MIN_SIZE;
			} else {
				this.canvasSize.y = this.containerSize.y / 2;
			}
			this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x;
			this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y;
			this.placeResizeButton(this.canvasSize);
			this.addActionToStack();
		}
		this.baseCtx.fillStyle = 'white';
		this.baseCtx.fillRect(0, 0, this.canvasSize.x, this.canvasSize.y);
		localStorage.setItem('save', this.canvasImage);
	}

	addActionToStack(): void {
		const canSize = { ...this.canvasSize };
		const funcResize: CallableFunction = () => {
			this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = canSize.x;
			this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = canSize.y;
			this.placeResizeButton(this.canvasSize);
		};
		this.commandManager.addAction(funcResize);
	}
}
