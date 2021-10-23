import { DrawingService } from '@app/services/drawing/drawing.service';
import { ToolInfo } from './tool-info';
import { ToolOption } from './tool-option';
import { Vec2 } from './vec2';

// tslint:disable:no-empty
export abstract class Tool {
	mouseDownCoord: Vec2;
	isDrawing: boolean = false;
	abstract info: ToolInfo;
	abstract options: ToolOption;
	pageOffset: number;

	constructor(protected drawingService: DrawingService) {}

	onMouseDown(event: MouseEvent): void {}

	onMouseUp(event: MouseEvent): void {}

	onMouseMove(event: MouseEvent): void {}

	onDoubleClick(event: MouseEvent): void {}

	onWheel(event: WheelEvent): void {}

	handleCommand(command: KeyboardEvent, isDown: boolean): void {}

	getDrawingService(): DrawingService {
		return this.drawingService;
	}

	getPositionFromMouse(event: MouseEvent): Vec2 {
		return { x: event.offsetX, y: event.offsetY };
	}

	getPagePositionFromMouse(event: MouseEvent): Vec2 {
		return { x: event.pageX - this.drawingService.positionX, y: event.pageY };
	}
}
