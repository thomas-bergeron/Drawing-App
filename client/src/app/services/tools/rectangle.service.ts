import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, MouseButton } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class RectangleService extends Tool {
	info: ToolInfo = new ToolInfo('rectangle', 'Rectangle', '1');
	options: ToolOption = new ToolOption(0);
	shiftDown: boolean = false;
	origin: Vec2;
	target: Vec2;

	// Le constructeur
	constructor(drawingService: DrawingService) {
		super(drawingService);
	}

	// Méthode qui check si shift est pesé et update le previewCtx
	handleCommand(command: KeyboardEvent): void {
		if (!this.isDrawing) {
			this.shiftDown = false;
			return;
		}

		if (command.key === Command.SHIFT) {
			this.shiftDown = !this.shiftDown;
			this.updatePreview();
		} else if (command.key === Command.ESCAPE) {
			this.isDrawing = false;
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
		}
	}

	// Update du previewCtx. Dessine un carré si shift est pesé.
	updatePreview(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);

		if (this.shiftDown) {
			this.drawSquare(
				this.drawingService.previewCtx,
				this.origin,
				this.target,
				this.options,
				this.drawingService.primaryColor,
				this.drawingService.secondaryColor,
			);
		} else {
			this.drawRectangle(
				this.drawingService.previewCtx,
				this.origin,
				this.target,
				this.options,
				this.drawingService.primaryColor,
				this.drawingService.secondaryColor,
			);
		}
	}

	// Update du baseCtx. Dessine un carré si shift est pesé.
	updateBase(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		const options = { ...this.options };
		options.shapeOptions = { ...this.options.shapeOptions };
		const target = { ...this.target };
		const origin = { ...this.origin };
		const pColor = this.drawingService.primaryColor;
		const sColor = this.drawingService.secondaryColor;
		const funcSquare: CallableFunction = () => {
			this.drawSquare(this.drawingService.baseCtx, origin, target, options, pColor, sColor);
		};

		const funcRect: CallableFunction = () => {
			this.drawRectangle(this.drawingService.baseCtx, origin, target, options, pColor, sColor);
		};
		if (this.shiftDown) {
			funcSquare();
			this.drawingService.addAction(funcSquare);
		} else {
			funcRect();
			this.drawingService.addAction(funcRect);
		}
	}

	// Mouse down function: enregistre les coordonnees du click et indique que le dessin du rectangle est commencé;
	// Donne la position de son origine et reset la position du target
	onMouseDown(event: MouseEvent): void {
		this.isDrawing = event.button === MouseButton.Left;

		if (!this.options.shapeOptions.contour && !this.options.shapeOptions.fill) {
			this.options.shapeOptions.contour = true;
		}

		if (this.isDrawing) {
			this.origin = this.getPagePositionFromMouse(event);
			this.target = this.getPagePositionFromMouse(event);
		}
	}

	// Mouse up function: enregistre les coordonnees du mouseUp, et update le canvas de base.
	onMouseUp(event: MouseEvent): void {
		event.preventDefault();
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);
			this.updateBase();
		}

		this.isDrawing = false;
	}

	// Update le previewCtx et le target à chaque mouvement si le dessin d'un rectangle est commencé
	onMouseMove(event: MouseEvent): void {
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);
			this.updatePreview();
		}
	}

	getRectangleCenterCoord(origin: Vec2, target: Vec2): Vec2 {
		let y = 0;
		let x = 0;
		if (origin.y > target.y) {
			y = (origin.y - target.y) / 2 + target.y;
		} else {
			y = (target.y - origin.y) / 2 + origin.y;
		}
		if (origin.x > target.x) {
			x = (origin.x - target.x) / 2 + target.x;
		} else {
			x = (target.x - origin.x) / 2 + origin.x;
		}
		return { x, y };
	}

	getFillPoints(origin: Vec2, target: Vec2, options: ToolOption): Vec2[] {
		const center = this.getRectangleCenterCoord(origin, target);
		const newOrigin = {} as Vec2;
		const newTarget = {} as Vec2;
		if (Math.abs(origin.x - target.x) <= options.size || Math.abs(origin.y - target.y) <= options.size) {
			return {} as Vec2[];
		}
		if (origin.x > center.x) {
			newOrigin.x = origin.x - options.size / 2;
			newTarget.x = target.x + options.size / 2;
		} else {
			newOrigin.x = origin.x + options.size / 2;
			newTarget.x = target.x - options.size / 2;
		}
		if (origin.y > center.y) {
			newOrigin.y = origin.y - options.size / 2;
			newTarget.y = target.y + options.size / 2;
		} else {
			newOrigin.y = origin.y + options.size / 2;
			newTarget.y = target.y - options.size / 2;
		}
		return [newOrigin, newTarget];
	}

	// Dessin du rectangle sur le preview durant le drag and drop
	drawRectangle(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2, options: ToolOption, color: string, colorSec: string): void {
		// Dessin du preview en fonction du style désiré
		ctx.strokeStyle = colorSec;
		ctx.lineWidth = options.size;
		ctx.lineCap = 'square';
		ctx.lineJoin = 'miter';

		ctx.fillStyle = color;
		if (options.shapeOptions.contour) {
			ctx.strokeRect(origin.x, origin.y, target.x - origin.x, target.y - origin.y);
		}

		ctx.fillStyle = color;
		if (options.shapeOptions.fill) {
			let newOrigin = {} as Vec2;
			let newTarget = {} as Vec2;
			const pointsVec: Vec2[] = this.getFillPoints(origin, target, options);
			newOrigin = pointsVec.length === 2 ? pointsVec[0] : ({} as Vec2);
			newTarget = pointsVec.length === 2 ? pointsVec[1] : ({} as Vec2);
			ctx.fillRect(newOrigin.x, newOrigin.y, newTarget.x - newOrigin.x, newTarget.y - newOrigin.y);
		}
	}

	// Dessin du carré sur le preview durant le drag and drop
	drawSquare(ctx: CanvasRenderingContext2D, origin: Vec2, target: Vec2, options: ToolOption, color: string, colorSec: string): void {
		// Dessin du preview durant le drag and drop
		ctx.fillStyle = color;
		ctx.lineCap = 'square';
		ctx.lineJoin = 'miter';
		ctx.strokeStyle = colorSec;
		ctx.lineWidth = options.size;
		ctx.strokeStyle = colorSec;
		ctx.lineWidth = options.size;
		if (options.shapeOptions.contour) {
			ctx.strokeRect(origin.x, origin.y, target.x - origin.x, Math.sign(target.y - origin.y) * Math.abs(target.x - origin.x));
		}
		if (options.shapeOptions.fill) {
			let newOrigin = {} as Vec2;
			let newTarget = {} as Vec2;
			const pointsVec: Vec2[] = this.getFillPoints(origin, target, options);
			newOrigin = pointsVec.length === 2 ? pointsVec[0] : ({} as Vec2);
			newTarget = pointsVec.length === 2 ? pointsVec[1] : ({} as Vec2);
			ctx.fillRect(
				newOrigin.x,
				newOrigin.y,
				newTarget.x - newOrigin.x,
				Math.sign(newTarget.y - newOrigin.y) * Math.abs(newTarget.x - newOrigin.x),
			);
		}
	}
}
