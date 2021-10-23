import { Injectable } from '@angular/core';
import { Line } from '@app/classes/math-line';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, MouseButton } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class PolygoneService extends Tool {
	info: ToolInfo = new ToolInfo('polygone', 'Polygone', '3');
	options: ToolOption = new ToolOption(Global.DEFAULT_VERTICES_NUMBER);
	origin: Vec2;
	target: Vec2;
	center: Vec2 = { x: 0, y: 0 };
	verticesCoords: Vec2[] = new Array<Vec2>(this.options.shapeOptions.nbVertices + 1);
	radius: number;
	circleRadius: number;
	breakPointRadius: number = -1;

	// Le constructeur
	constructor(drawingService: DrawingService) {
		super(drawingService);
	}

	handleCommand(command: KeyboardEvent): void {
		if (command.key === Command.ESCAPE) {
			this.isDrawing = false;
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
		}
	}

	// Update du previewCtx.
	updatePreview(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);

		this.drawCircularPerimeter();
		this.drawPolygone(
			this.drawingService.previewCtx,
			this.options.shapeOptions.nbVertices,
			this.verticesCoords,
			this.options.shapeOptions.fill,
			this.options.shapeOptions.contour,
			this.options.size,
			this.drawingService.primaryColor,
			this.drawingService.secondaryColor,
		);
	}

	// Update du baseCtx.
	updateBase(): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
		const option = {
			nbVertices: this.options.shapeOptions.nbVertices,
			verticesCoord: [...this.verticesCoords],
			fill: this.options.shapeOptions.fill,
			contour: this.options.shapeOptions.contour,
			size: this.options.size,
			primaryColor: this.drawingService.primaryColor,
			secondaryColor: this.drawingService.secondaryColor,
		};
		const func: CallableFunction = () => {
			this.drawPolygone(
				this.drawingService.baseCtx,
				option.nbVertices,
				option.verticesCoord,
				option.fill,
				option.contour,
				option.size,
				option.primaryColor,
				option.secondaryColor,
			);
		};
		this.drawingService.addAction(func);
		this.drawPolygone(
			this.drawingService.baseCtx,
			this.options.shapeOptions.nbVertices,
			this.verticesCoords,
			this.options.shapeOptions.fill,
			this.options.shapeOptions.contour,
			this.options.size,
			this.drawingService.primaryColor,
			this.drawingService.secondaryColor,
		);
	}

	// Mouse down function: enregistre les coordonnees du click et indique que le dessin du polygone est commencé;
	// Donne la position de son origine et reset la position du target
	onMouseDown(event: MouseEvent): void {
		this.drawingService.clearCanvas(this.drawingService.previewCtx);
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
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);
			this.drawingService.clearCanvas(this.drawingService.previewCtx);
			this.isDrawing = false;
			this.updateBase();
		}
	}

	// Update le previewCtx et le target à chaque mouvement si le dessin d'un rectangle est commencé
	onMouseMove(event: MouseEvent): void {
		if (this.isDrawing) {
			this.target = this.getPagePositionFromMouse(event);

			this.center.x = this.origin.x + (this.target.x - this.origin.x) / 2;
			this.center.y = this.origin.y + Math.sign(this.target.y - this.origin.y) * this.radius;

			this.verticesCoords = [];
			this.calculateRadius();
			this.getPolygonePoints();
			this.updatePreview();
		}
	}

	// Calcul du rayon du cercle
	calculateRadius(): void {
		this.radius = Math.abs((this.target.x - this.origin.x) / 2);

		if (this.options.shapeOptions.contour) {
			this.circleRadius = this.radius + this.options.size / 2;
		} else {
			this.circleRadius = this.radius;
		}
	}

	// update la liste des coordonnees des sommets du polygone
	getPolygonePoints(): void {
		const angleDiff: number = (2 * Math.PI) / this.options.shapeOptions.nbVertices;
		let currentCoordsX: number;
		let currentCoordsY: number;

		for (let i = 0; i < this.options.shapeOptions.nbVertices + 1; i++) {
			let currentAngle: number;

			if (this.target.y - this.origin.y < 0) {
				currentAngle = angleDiff * i - Math.PI / 2;
			} else {
				currentAngle = angleDiff * i + Math.PI / 2;
			}

			currentCoordsX = this.center.x + this.radius * Math.cos(currentAngle);
			currentCoordsY = this.center.y + this.radius * Math.sin(currentAngle);

			this.verticesCoords[i] = { x: currentCoordsX, y: currentCoordsY };
		}
	}

	drawPolygone(
		ctx: CanvasRenderingContext2D,
		nbVertices: number,
		verticesCoords: Vec2[],
		fill: boolean,
		contour: boolean,
		size: number,
		primaryColor: string,
		secondaryColor: string,
	): void {
		ctx.lineWidth = size;
		ctx.lineJoin = 'round';
		ctx.fillStyle = primaryColor;
		ctx.strokeStyle = secondaryColor;
		ctx.setLineDash([]);

		if (nbVertices >= Global.DEFAULT_VERTICES_NUMBER && nbVertices <= Global.MAX_VERTICES_NUMBER) {
			const shape = new Path2D();
			const shapeFill = new Path2D();
			const vertices: Vec2[] = contour ? this.findIntersectionPoints(verticesCoords, size) : verticesCoords;

			ctx.beginPath();

			if (fill) {
				if (vertices.length > 1) {
					for (const point of vertices) {
						shapeFill.lineTo(point.x, point.y);
					}
				}
				shapeFill.closePath();
				ctx.fill(shapeFill, 'evenodd');
				if (!contour) {
					ctx.fill(shape, 'evenodd');
				}
			}
			if (contour) {
				for (const point of verticesCoords) {
					shape.lineTo(point.x, point.y);
				}
				shape.closePath();
				ctx.stroke(shape);
			}
		}
	}

	// dessin du perimetre circulaire
	drawCircularPerimeter(): void {
		this.drawingService.previewCtx.beginPath();

		if (this.isDrawing) {
			this.drawingService.previewCtx.strokeStyle = 'grey';
			this.drawingService.previewCtx.lineWidth = Global.PERIM_LINEWIDTH;
			this.drawingService.previewCtx.setLineDash([Global.PERIM_LINEDASH]);

			// Cercle
			this.drawingService.previewCtx.ellipse(this.center.x, this.center.y, this.circleRadius, this.circleRadius, 0, 0, 2 * Math.PI);
			this.drawingService.previewCtx.stroke();
		}
		this.drawingService.previewCtx.closePath();
	}

	private distanceBetweenPoints(point1: Vec2, point2: Vec2): number {
		const a: number = Math.pow(point1.x - point2.x, 2);
		const b: number = Math.pow(point1.y - point2.y, 2);
		return Math.sqrt(a + b);
	}

	isInverted(vertices2: Vec2[]): boolean {
		const newDist = this.distanceBetweenPoints(vertices2[0], vertices2[1]);
		if (Math.round(newDist) === 0) {
			this.breakPointRadius = this.circleRadius;
		}
		return this.breakPointRadius >= this.circleRadius;
	}

	findIntersectionPoints(vertices: Vec2[], size: number): Vec2[] {
		const lineArray: Line[] = [] as Line[];
		let verticesPoints: Vec2[] = [];

		for (let i = 0; i < vertices.length - 1; i++) {
			lineArray.push(new Line(vertices[i], vertices[i + 1], size / 2));
		}
		let point1;
		let point2;
		let point3;
		let point4;

		for (let i = 0; i < lineArray.length; i++) {
			point1 = lineArray[i].getNewPoint(lineArray[i].initPoint);
			point2 = lineArray[i].getNewPoint(lineArray[i].finalPoint);

			let intersectPoint: Vec2 = {} as Vec2;
			if (i === lineArray.length - 1) {
				point3 = lineArray[0].getNewPoint(lineArray[0].initPoint);
				point4 = lineArray[0].getNewPoint(lineArray[0].finalPoint);
				const intersectP = lineArray[0].intersection(point1, point2, point3, point4);

				verticesPoints.push(intersectP);
			} else {
				point3 = lineArray[i + 1].getNewPoint(lineArray[i + 1].initPoint);
				point4 = lineArray[i + 1].getNewPoint(lineArray[i + 1].finalPoint);
			}
			intersectPoint = lineArray[0].intersection(point1, point2, point3, point4);
			verticesPoints.push(intersectPoint);
		}

		if (this.isInverted(verticesPoints)) {
			verticesPoints = [];
		} else {
			verticesPoints.push(verticesPoints[0]);
		}

		return verticesPoints;
	}
}
