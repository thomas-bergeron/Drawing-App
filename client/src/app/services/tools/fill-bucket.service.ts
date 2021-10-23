import { Injectable } from '@angular/core';
import { Queue } from '@app/classes/data-structures/queue';
import { Tool } from '@app/classes/tool';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseButton, RGB } from '@app/shared/global';

@Injectable({
	providedIn: 'root',
})
export class FillService extends Tool {
	private startingPoint: Vec2;
	private fillPoints: Vec2[] = new Array<Vec2>();
	info: ToolInfo = new ToolInfo('fill', 'Fill', 'b');
	options: ToolOption = new ToolOption(undefined, undefined, undefined, undefined, undefined, true);
	private baseColor: Uint8ClampedArray;
	private replacementColor: Uint8ClampedArray;
	private row: number[] = [Global.NEGATIVE_DEFAULT_DELTA, Global.NEGATIVE_DEFAULT_DELTA, Global.NEGATIVE_DEFAULT_DELTA, 0, 0, 1, 1, 1];
	private col: number[] = [Global.NEGATIVE_DEFAULT_DELTA, 0, 1, Global.NEGATIVE_DEFAULT_DELTA, 1, Global.NEGATIVE_DEFAULT_DELTA, 0, 1];
	private imageData: ImageData;
	private actionMap: Map<number, () => void> = new Map();
	private visitedMatrix: boolean[][];

	constructor(protected drawingService: DrawingService) {
		super(drawingService);
		this.actionMap.set(MouseButton.Left, () => {
			this.leftClickMode(
				this.drawingService.baseCtx,
				this.startingPoint,
				this.baseColor,
				this.fillPoints,
				this.visitedMatrix,
				this.imageData,
				this.replacementColor,
			);
		});
		this.actionMap.set(MouseButton.Right, () => {
			this.rightClickMode(this.imageData, this.replacementColor, this.baseColor);
		});
	}
	private copyImageData(ctx: CanvasRenderingContext2D, src: ImageData): ImageData {
		const image = ctx.createImageData(src.width, src.height);
		image.data.set(src.data);
		return image;
	}
	private copyColor(color: Uint8ClampedArray): Uint8ClampedArray {
		const col = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		for (let i = 0; i < Global.SIZE_OF_DATA; i++) {
			col[i] = color[i];
		}
		return col;
	}
	private deepCopyInstance(
		ctx: CanvasRenderingContext2D,
	): {
		ctx: CanvasRenderingContext2D;
		startingPoint: Vec2;
		baseColor: Uint8ClampedArray;
		fillPoints: Vec2[];
		visitedMatrix: boolean[][];
		imageData: ImageData;
		replacementColor: Uint8ClampedArray;
	} {
		return {
			ctx,
			startingPoint: { ...this.startingPoint },
			baseColor: this.copyColor(this.baseColor),
			fillPoints: [...this.fillPoints],
			visitedMatrix: [...this.visitedMatrix],
			imageData: this.copyImageData(ctx, this.imageData),
			replacementColor: this.copyColor(this.replacementColor),
		};
	}
	getCanvasSize(): Vec2 {
		const dimensions: Vec2 = this.drawingService.getCanvasDimensions();
		if (isNaN(dimensions.x) || isNaN(dimensions.y) || !dimensions) {
			return { x: Global.DEFAULT_CANVAS_SIZE, y: Global.DEFAULT_CANVAS_SIZE };
		}

		return dimensions;
	}

	private resetVisitedMatrix(visitedMatrix: boolean[][]): boolean[][] {
		const width: number = this.getCanvasSize().x ? this.getCanvasSize().x : Global.DEFAULT_CANVAS_SIZE;
		const height: number = this.getCanvasSize().y ? this.getCanvasSize().y : Global.DEFAULT_CANVAS_SIZE;
		if (!visitedMatrix || visitedMatrix.length !== width || visitedMatrix[0].length !== height) {
			visitedMatrix = new Array(width).fill(false).map(() => new Array(height).fill(false));
		} else {
			for (let i = 0; i < width; i++) {
				for (let j = 0; j < height; j++) {
					visitedMatrix[i][j] = false;
				}
			}
		}

		return visitedMatrix;
	}

	private handleClick(event: MouseEvent): void {
		if (this.actionMap.has(event.button)) {
			(this.actionMap.get(event.button) as () => void)();
			const copy: {
				ctx: CanvasRenderingContext2D;
				startingPoint: Vec2;
				baseColor: Uint8ClampedArray;
				fillPoints: Vec2[];
				visitedMatrix: boolean[][];
				imageData: ImageData;
				replacementColor: Uint8ClampedArray;
			} = this.deepCopyInstance(this.drawingService.baseCtx);
			let action: CallableFunction;
			if (event.button === MouseButton.Left) {
				action = () => {
					this.leftClickMode(
						copy.ctx,
						copy.startingPoint,
						copy.baseColor,
						copy.fillPoints,
						copy.visitedMatrix,
						copy.imageData,
						copy.replacementColor,
					);
				};
			} else {
				action = () => {
					this.rightClickMode(copy.imageData, copy.replacementColor, copy.baseColor);
				};
			}
			this.drawingService.addAction(action);
		}
	}

	private rightClickMode(imageData: ImageData, replacementColor: Uint8ClampedArray, baseColor: Uint8ClampedArray): void {
		this.replaceAllColor(imageData, replacementColor, baseColor);
	}

	private leftClickMode(
		ctx: CanvasRenderingContext2D,
		startingPoint: Vec2,
		baseColor: Uint8ClampedArray,
		fillPoints: Vec2[],
		visitedMatrix: boolean[][],
		imageData: ImageData,
		replacementColor: Uint8ClampedArray,
	): void {
		visitedMatrix = this.resetVisitedMatrix(visitedMatrix);
		fillPoints = [];
		this.getRegionPoints(startingPoint, baseColor, fillPoints, visitedMatrix, ctx, imageData);
		this.paintBucketFill(ctx, imageData, replacementColor, fillPoints);
	}
	private getImageData(ctx: CanvasRenderingContext2D, point: Vec2): ImageData {
		return ctx.getImageData(point.x, point.y, ctx.canvas.width, ctx.canvas.height);
	}
	private async putImageData(ctx: CanvasRenderingContext2D, imageData: ImageData): Promise<void> {
		await ctx.putImageData(imageData, 0, 0);
	}

	onMouseUp(event: MouseEvent): void {
		this.imageData = this.getImageData(this.drawingService.baseCtx, { x: 0, y: 0 });
		this.visitedMatrix = this.resetVisitedMatrix(this.visitedMatrix);
		this.fillPoints = [];
		this.startingPoint = this.getPagePositionFromMouse(event);
		this.fillPoints.push(this.startingPoint);
		this.baseColor = this.getRGBA(this.startingPoint, this.imageData);
		this.replacementColor = this.hexToRGB(this.drawingService.primaryColor);
		this.handleClick(event);
	}

	private getIndex(point: Vec2): number {
		return (point.y * this.getCanvasSize().x + point.x) * Global.SIZE_OF_DATA;
	}
	private getRGBA(point: Vec2, imageData: ImageData): Uint8ClampedArray {
		let index = this.getIndex(point);
		const data: Uint8ClampedArray = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		data[RGB.R] = imageData.data[index];
		data[RGB.G] = imageData.data[++index];
		data[RGB.B] = imageData.data[++index];
		data[RGB.A] = imageData.data[++index];
		return data;
	}

	private hexToRGB(hex: string): Uint8ClampedArray {
		const data: Uint8ClampedArray = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		let i = 1;
		data[RGB.R] = parseInt(hex.slice(i++, ++i), Global.HEX_BASE);
		data[RGB.G] = parseInt(hex.slice(i++, ++i), Global.HEX_BASE);
		data[RGB.B] = parseInt(hex.slice(i++, ++i), Global.HEX_BASE);
		data[RGB.A] = parseInt(hex.slice(i++, ++i), Global.HEX_BASE);

		return data;
	}

	private replaceColor(index: number, color: Uint8ClampedArray): void {
		this.imageData.data[index] = color[RGB.R];
		this.imageData.data[++index] = color[RGB.G];
		this.imageData.data[++index] = color[RGB.B];
		this.imageData.data[++index] = color[RGB.A];
	}

	private isValid(pixel: Vec2, imageData: ImageData, baseColor: Uint8ClampedArray): boolean {
		return (
			pixel.x >= 0 &&
			pixel.x < this.getCanvasSize().x &&
			pixel.y >= 0 &&
			pixel.y < this.getCanvasSize().y &&
			this.acceptedColor(this.getRGBA(pixel, imageData), baseColor)
		);
	}

	private replaceAllColor(imageData: ImageData, replacementColor: Uint8ClampedArray, baseColor: Uint8ClampedArray): void {
		for (let i = 0; i < imageData.data.length; i += Global.SIZE_OF_DATA) {
			const data: Uint8ClampedArray = new Uint8ClampedArray(Global.SIZE_OF_DATA);
			data[RGB.R] = imageData.data[i];
			data[RGB.G] = imageData.data[i + RGB.G];
			data[RGB.B] = imageData.data[i + RGB.B];
			data[RGB.A] = imageData.data[i + RGB.A];

			if (this.acceptedColor(data, baseColor)) {
				this.replaceColor(i, replacementColor);
			}
		}
		this.putImageData(this.drawingService.baseCtx, imageData);
	}

	private getRegionPoints(
		startPos: Vec2,
		baseColor: Uint8ClampedArray,
		fillPoints: Vec2[],
		visitedMatrix: boolean[][],
		ctx: CanvasRenderingContext2D,
		imageData: ImageData,
	): void {
		const queue: Queue<Vec2> = new Queue();
		queue.push(startPos);
		if (fillPoints.length > 0) {
			fillPoints = [];
		}

		while (queue.length > 0) {
			const curNode: Vec2 = queue.pop() as Vec2;
			if (curNode.x > visitedMatrix.length || curNode.y > visitedMatrix[0].length) {
				break;
			}
			if (this.acceptedColor(this.getRGBA(curNode, imageData), baseColor)) {
				fillPoints.push(curNode);
			}

			visitedMatrix[curNode.x][curNode.y] = true;
			for (let i = 0; i < this.row.length; i++) {
				let visitedX = curNode.x + this.row[i] > 0 ? curNode.x + this.row[i] : 0;
				let visitedY = curNode.y + this.col[i] > 0 ? curNode.y + this.col[i] : 0;
				visitedX = curNode.x + this.row[i] < ctx.canvas.width ? visitedX : ctx.canvas.width - 1;
				visitedY = curNode.y + this.col[i] < ctx.canvas.height ? visitedY : ctx.canvas.height - 1;
				if (!visitedMatrix[visitedX][visitedY] && this.isValid({ x: visitedX, y: visitedY }, imageData, baseColor)) {
					queue.push({ x: visitedX, y: visitedY });
					visitedMatrix[visitedX][visitedY] = true;
				} else {
					visitedMatrix[visitedX][visitedY] = true;
				}
			}
		}
	}

	private acceptedColor(color: Uint8ClampedArray, target: Uint8ClampedArray): boolean {
		return this.getTolerance(target, color) <= this.options.bucketOptions.tolerance;
	}

	private getTolerance(base: Uint8ClampedArray, target: Uint8ClampedArray): number {
		const dR = Math.abs((base[RGB.R] - target[RGB.R]) / Global.MAX_HEX_VALUE);
		const dG = Math.abs((base[RGB.G] - target[RGB.G]) / Global.MAX_HEX_VALUE);
		const dB = Math.abs((base[RGB.B] - target[RGB.B]) / Global.MAX_HEX_VALUE);
		const dA = Math.abs((base[RGB.A] - target[RGB.A]) / Global.MAX_HEX_VALUE);
		return ((dR + dG + dB + dA) / Global.SIZE_OF_DATA) * Global.PERCENTAGE_CONST;
	}

	private paintBucketFill(ctx: CanvasRenderingContext2D, imageData: ImageData, replacementColor: Uint8ClampedArray, fillPoints: Vec2[]): void {
		for (const point of fillPoints) {
			this.replaceColor(this.getIndex(point), replacementColor);
		}
		this.putImageData(ctx, imageData);
		fillPoints = [];
	}
}
