import { Injectable } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, MouseButton } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class EllipseService extends Tool {
	// Le constructeur
	constructor(drawingService: DrawingService) {
		super(drawingService);
	}
	info: ToolInfo = new ToolInfo('ellipse', 'Ellipse', '2');
	options: ToolOption = new ToolOption(0);
	shiftDown: boolean = false;
	origin: Vec2;
	target: Vec2;
	sign: Vec2 = {} as Vec2;

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

	// Update du previewCtx. Dessine un cercle si shift est pesé.
	updatePreview(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		if (this.shiftDown) {
			this.drawCircle(
				this.drawingService.previewCtx,
				this.origin,
				this.options,
				this.isDrawing,
				this.drawingService.primaryColor,
				this.drawingService.secondaryColor,
				this.target,
				this.sign,
			);
		} else {
			this.drawEllipse(
				this.drawingService.previewCtx,
				this.origin,
				this.options,
				this.isDrawing,
				this.drawingService.primaryColor,
				this.drawingService.secondaryColor,
				this.target,
				this.sign,
			);
		}
	}

	// Update du baseCtx. Dessine un cercle si shift est pesé.
	updateBase(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);

		const options = { ...this.options };
		options.shapeOptions = { ...this.options.shapeOptions };
		const origin = { ...this.origin };
		const target = { ...this.target };
		const sign = { ...this.sign };
		const pColor = this.drawingService.primaryColor;
		const sColor = this.drawingService.secondaryColor;
		const mouseDown = this.isDrawing;

		const funcEllipse: CallableFunction = () => {
			this.drawEllipse(this.drawingService.baseCtx, origin, options, mouseDown, pColor, sColor, target, sign);
		};

		const funcCircle: CallableFunction = () => {
			this.drawCircle(this.drawingService.baseCtx, origin, options, mouseDown, pColor, sColor, target, sign);
		};

		if (this.shiftDown) {
			funcCircle();
			this.drawingService.addAction(funcCircle);
		} else {
			funcEllipse();
			this.drawingService.addAction(funcEllipse);
		}
	}

	// Mouse down function: enregistre les coordonnees du click et indique que le dessin de l'ellipse est commencé;
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

	// Mouse up function: enregistre les coordonnees du mouseUp, et dessine une ellipse sur le canvas de base.
	onMouseUp(event: MouseEvent): void {
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);
			this.updateBase();
			this.isDrawing = false;
		}
	}

	// Mouse move function: update le previewCtx à chaque mouvement de la souris. Si la souris n'est pas pesée,
	// clear le path continuellement.
	onMouseMove(event: MouseEvent): void {
		if (this.isDrawing) {
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.target = this.getPagePositionFromMouse(event);
			this.sign.y = Math.sign(this.target.y - this.origin.y);
			this.sign.x = Math.sign(this.target.x - this.origin.x);
			this.updatePreview();
		}
	}

	// Dessin de l'ellipse
	drawEllipse(
		ctx: CanvasRenderingContext2D,
		origin: Vec2,
		options: ToolOption,
		mouseDown: boolean,
		primaryColor: string,
		secondaryColor: string,
		target: Vec2,
		sign: Vec2,
	): void {
		ctx.beginPath();

		if (!mouseDown) {
			return;
		}
		// Style du perimetre autour de l'ellipse
		ctx.strokeStyle = 'grey';
		ctx.lineWidth = Global.ELLIPSE_PERIM_LINEWIDTH;
		ctx.setLineDash([Global.ELLIPSE_PERIM_LINEDASH]);

		const contourPadding: Vec2 = { x: 0, y: 0 };

		if (options.shapeOptions.contour) {
			contourPadding.x = sign.x * options.size;
			contourPadding.y = sign.y * options.size;
		}

		// Dessin du perimetre autour de l'ellipse
		if (ctx === this.drawingService.previewCtx) {
			ctx.strokeRect(origin.x, origin.y, target.x - origin.x + contourPadding.x, target.y - origin.y + contourPadding.y);
		}

		// Ellipse
		ctx.ellipse(
			origin.x + (target.x - origin.x) / 2 + contourPadding.x / 2,
			origin.y + (target.y - origin.y) / 2 + contourPadding.y / 2,
			Math.abs(target.x - origin.x) / 2,
			Math.abs(target.y - origin.y) / 2,
			0,
			0,
			2 * Math.PI,
		);

		ctx.setLineDash([]);
		ctx.strokeStyle = secondaryColor;
		ctx.lineWidth = options.size;
		ctx.fillStyle = primaryColor;

		if (options.shapeOptions.fill) {
			ctx.fill();
		}

		if (options.shapeOptions.contour) {
			ctx.stroke();
		}
	}

	// Dessin du cercle
	drawCircle(
		ctx: CanvasRenderingContext2D,
		origin: Vec2,
		options: ToolOption,
		mouseDown: boolean,
		primaryColor: string,
		secondaryColor: string,
		target: Vec2,
		sign: Vec2,
	): void {
		ctx.beginPath();

		if (!mouseDown) {
			return;
		}

		// Style du périmètre autour du cercle
		ctx.strokeStyle = 'grey';
		ctx.lineWidth = Global.ELLIPSE_PERIM_LINEWIDTH;
		ctx.setLineDash([Global.ELLIPSE_PERIM_LINEDASH]);

		const contourPadding: Vec2 = { x: 0, y: 0 };

		if (options.shapeOptions.contour) {
			contourPadding.x = sign.x * options.size;
			contourPadding.y = sign.y * options.size;
		}

		// Perimetre autour du cercle
		if (ctx === this.drawingService.previewCtx) {
			ctx.strokeRect(origin.x, origin.y, target.x - origin.x + contourPadding.x, sign.y * Math.abs(target.x - origin.x) + contourPadding.y);
		}

		// Cercle
		ctx.ellipse(
			origin.x + (target.x - origin.x) / 2 + contourPadding.x / 2,
			origin.y + sign.y * Math.abs((target.x - origin.x) / 2) + contourPadding.y / 2,
			Math.abs(target.x - origin.x) / 2,
			Math.abs(target.x - origin.x) / 2,
			0,
			0,
			2 * Math.PI,
		);

		// Affichage du cercle sur preview context
		ctx.setLineDash([]);
		ctx.strokeStyle = secondaryColor;
		ctx.lineWidth = options.size;
		ctx.fillStyle = primaryColor;
		if (options.shapeOptions.fill) {
			ctx.fill();
		}

		if (options.shapeOptions.contour) {
			ctx.stroke();
		}
	}
}
