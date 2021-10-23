import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { MouseButton } from '@app/shared/global';

// Ceci est une implémentation de base de l'outil Crayon pour aider à débuter le projet
// L'implémentation ici ne couvre pas tous les critères d'accepetation du projet
// Vous êtes encouragés de modifier et compléter le code.
// N'oubliez pas de regarder les tests dans le fichier spec.ts aussi!
@Injectable({
	providedIn: 'root',
})
export class PencilService extends Tool {
	private pathData: Vec2[];
	info: ToolInfo = new ToolInfo('pencil', 'Crayon', 'c');
	options: ToolOption = new ToolOption();

	constructor(drawingService: DrawingService) {
		super(drawingService);
		this.clearPath();
	}

	onMouseDown(event: MouseEvent): void {
		this.isDrawing = event.button === MouseButton.Left;
		if (this.isCanvasReady()) {
			this.mouseDownCoord = this.getPagePositionFromMouse(event);
			this.updateView(this.mouseDownCoord, this.drawingService.previewCtx, this.pathData);
		}
	}
	private updateView(lastPoint: Vec2, ctx: CanvasRenderingContext2D, path: Vec2[]): void {
		path.push(lastPoint);
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		this.drawLine(ctx, path, new ToolOption(undefined, false, false, this.options.size), this.drawingService.primaryColor);
	}

	onMouseUp(event: MouseEvent): void {
		if (this.isDrawing) {
			const mousePosition = this.getPagePositionFromMouse(event);
			this.updateView(mousePosition, this.drawingService.baseCtx, this.pathData);
			const path: Vec2[] = [...this.pathData];
			const info = { options: { ...this.options }, color: this.drawingService.primaryColor };
			const func: CallableFunction = () => {
				this.drawLine(this.drawingService.baseCtx, path, info.options, info.color);
			};
			this.drawingService.addAction(func);
		}
		this.isDrawing = false;

		this.clearPath();
	}

	onMouseMove(event: MouseEvent): void {
		if (this.isCanvasReady()) {
			const mousePosition = this.getPagePositionFromMouse(event);
			this.updateView(mousePosition, this.drawingService.previewCtx, this.pathData);
		}
	}

	private isCanvasReady(): boolean {
		return this.isDrawing;
	}

	private drawLine(ctx: CanvasRenderingContext2D, path: Vec2[], options: ToolOption, color: string /*, alpha: number*/): void {
		ctx.lineWidth = options.size;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.strokeStyle = color;
		ctx.beginPath();
		for (const point of path) {
			ctx.lineTo(point.x, point.y);
		}
		ctx.stroke();
	}

	private clearPath(): void {
		this.pathData = [];
	}
}
