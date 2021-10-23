import { Injectable } from '@angular/core';
import { LineOptions } from '@app/classes/line-options';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, EnumAngleLigne, Global } from '@app/shared/global';

// Ceci est une implémentation de base de l'outil Crayon pour aider à débuter le projet
// L'implémentation ici ne couvre pas tous les critères d'accepetation du projet
// Vous êtes encouragés de modifier et compléter le code.
// N'oubliez pas de regarder les tests dans le fichier spec.ts aussi!
@Injectable({
	providedIn: 'root',
})
export class LineService extends Tool {
	info: ToolInfo = new ToolInfo('line', 'Ligne', 'l');
	options: ToolOption = new ToolOption(undefined, true);
	protected pathData: Vec2[];
	protected mousePos: Vec2;
	protected isGuided: boolean = false;
	private line: number[];
	private guidedPos: Vec2;
	tipPos: Vec2;

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.clearPath();
	}

	handleCommand(command: KeyboardEvent, isDown: boolean): void {
		if (!this.isDrawing) {
			return;
		}

		switch (command.key) {
			case Command.BACKSPACE: {
				if (isDown) {
					this.deleteLastSegment();
				}
				break;
			}
			case Command.SHIFT: {
				if (!this.isGuided && isDown) {
					this.lock();
				} else {
					this.unlock();
				}
				break;
			}
			case Command.ESCAPE: {
				if (isDown) {
					this.deleteLine();
					this.drawingService.previewCtx.setLineDash([0]);
				}
				break;
			}
		}
	}

	onMouseDown(event: MouseEvent): void {
		this.isDrawing = true;
		this.click(event);
	}
	protected deleteLastSegment(): void {
		if (this.pathData.length < 2) {
			return;
		}
		this.pathData.pop();
		this.updateTip();
		this.updatePreview();
	}

	onMouseMove(event: MouseEvent): void {
		this.drawingService.previewCtx.canvas.style.cursor = 'crosshair';
		if (this.isDrawing) {
			this.mousePos = this.getPagePositionFromMouse(event);
			this.updateTip();
			this.updatePreview();
		}
	}
	protected stopDrawing(event: MouseEvent): void {
		this.mousePos = this.getPositionFromMouse(event);
		this.updateTip();
		const initialPoint = this.pathData[0];
		const distance = this.distanceBetweenPoints(initialPoint, this.tipPos);
		if (distance < Global.RAYON_MAX) {
			this.pathData.length -= 2;

			this.pathData.push(initialPoint);
		} else {
			this.pathData.length -= 1;
		}

		this.isDrawing = false;
		this.tipPos = this.pathData[this.pathData.length - 1];

		const path: Vec2[] = [...this.pathData];
		const options = { ...this.options };
		options.lineOptions = new LineOptions();
		options.lineOptions.connectionDotSize = this.options.lineOptions.connectionDotSize;
		options.lineOptions.hasConnectionDots = this.options.lineOptions.hasConnectionDots;
		const info = {
			ctx: this.drawingService.baseCtx,
			pointsPath: path,
			color: this.drawingService.primaryColor,
			options,
			lineOption: { ...options.lineOptions },
		};

		const func: CallableFunction = () => {
			this.drawLine(this.drawingService.baseCtx, info.pointsPath, {} as Vec2, info.color, info.options);
		};
		func();
		this.drawingService.addAction(func);
		this.clearPath();
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		this.unlock();
	}

	protected updatePreview(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		this.drawLine(this.drawingService.previewCtx, this.pathData, this.tipPos, this.drawingService.primaryColor, this.options);
	}

	private drawConnectDots(ctx: CanvasRenderingContext2D, path: Vec2[], lineOptions: LineOptions): void {
		for (const point of path) {
			this.drawCircle(point.x, point.y, ctx, lineOptions);
		}
	}
	private drawCircle(x: number, y: number, ctx: CanvasRenderingContext2D, lineOptions: LineOptions): void {
		ctx.beginPath();
		ctx.arc(x, y, lineOptions.connectionDotSize, 0, 2 * Math.PI, true);
		ctx.fill();
	}

	protected lock(): void {
		if (this.pathData.length > 0) {
			this.line = this.getClosestLine(this.mousePos, this.pathData[this.pathData.length - 1]);
			this.toggleGuidingMode(true);
			this.updateTip();
			this.updatePreview();
		}
	}
	protected unlock(): void {
		this.toggleGuidingMode(false);
		if (this.pathData.length > 0) {
			this.updateTip();
			this.updatePreview();
		}
	}

	protected calculateGuidedPosition(oldPoint: Vec2, line: number[], mousePos: Vec2): Vec2 {
		const a = line[0]; // ax + by + c = 0
		const b = line[1];
		const c = line[2];

		let xFormula;
		let formula;
		if (a === 0) {
			xFormula = mousePos.x;
			formula = oldPoint.y;
		} else if (b === 0) {
			xFormula = oldPoint.x;
			formula = mousePos.y;
		} else {
			xFormula = mousePos.x;
			formula = -(a * mousePos.x + c) * b;
		}
		return { x: xFormula, y: formula } as Vec2;
	}

	protected drawLine(ctx: CanvasRenderingContext2D, path: Vec2[], tipPosition: Vec2, color: string, /*alpha: number, */ options: ToolOption): void {
		if (path.length === 0) {
			return;
		}

		ctx.lineWidth = options.size;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.strokeStyle = color;
		ctx.fillStyle = color;
		ctx.beginPath();
		for (const point of path) {
			ctx.lineTo(point.x, point.y);
		}
		ctx.lineTo(tipPosition.x, tipPosition.y);
		ctx.stroke();
		if (options.lineOptions.hasConnectionDots) {
			this.drawConnectDots(ctx, path, options.lineOptions);
		}
	}
	protected toggleGuidingMode(isGuide: boolean): void {
		this.isGuided = isGuide;
	}
	protected deleteLine(): void {
		this.clearPath();
		this.updatePreview();
		this.isDrawing = false;
	}

	private distanceBetweenPoints(point1: Vec2, point2: Vec2): number {
		const a: number = Math.pow(point1.x - point2.x, 2);
		const b: number = Math.pow(point1.y - point2.y, 2);
		return Math.sqrt(a + b);
	}

	protected clearPath(): void {
		this.pathData = [];
	}

	protected updateTip(): void {
		if (this.isGuided && this.pathData.length > 0) {
			this.guidedPos = this.calculateGuidedPosition(this.pathData[this.pathData.length - 1], this.line, this.mousePos);
			this.tipPos = this.guidedPos;
		} else {
			this.tipPos = this.mousePos;
		}
	}
	onDoubleClick(event: MouseEvent): void {
		this.stopDrawing(event);
	}
	protected click(event: MouseEvent): void {
		this.mousePos = this.getPositionFromMouse(event) as Vec2;
		this.updateTip();
		this.pathData.push(this.tipPos);
		this.updatePreview();
	}
	private getDistanceFromPointToLine(point: Vec2, line: number[]): number {
		const val = Math.abs(line[0] * point.x + line[1] * point.y + line[2]);
		const divider = Math.sqrt(line[0] * line[0] + line[1] * line[1]);
		return val / divider;
	}

	protected getClosestLine(currentPoint: Vec2, lastPoint: Vec2): number[] {
		const lineList = [...Global.LINE_LIST];
		lineList[EnumAngleLigne.CENTTRENTECINQ].pop();
		lineList[EnumAngleLigne.QUARANTECINQ].pop();
		lineList[EnumAngleLigne.VERTICAL].pop();
		lineList[EnumAngleLigne.HORIZONTAL].pop();
		lineList[EnumAngleLigne.CENTTRENTECINQ].push(-(lastPoint.x + lastPoint.y));
		lineList[EnumAngleLigne.QUARANTECINQ].push(-(lastPoint.x - lastPoint.y));
		lineList[EnumAngleLigne.VERTICAL].push(-lastPoint.x);
		lineList[EnumAngleLigne.HORIZONTAL].push(-lastPoint.y);

		const distance = lineList.map((line) => this.getDistanceFromPointToLine(currentPoint, line));
		const maxDistance = Math.min(...distance);
		const maxIndex = distance.indexOf(maxDistance);
		return lineList[maxIndex];
	}
}
