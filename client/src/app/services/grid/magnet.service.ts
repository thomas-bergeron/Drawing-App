import { Injectable } from '@angular/core';
import { ToolInfo } from '@app/classes/tool-info';
import { Vec2 } from '@app/classes/vec2';
import { ControlPoint, Global } from '@app/shared/global';
import { GridService } from './grid.service';

@Injectable({
	providedIn: 'root',
})
export class MagnetService {
	info: ToolInfo = new ToolInfo('magnétisme', 'Magnétisme', 'm');
	isActive: boolean = false;
	controlPoint: ControlPoint = ControlPoint.Center;
	constructor(private grid: GridService) {}
	toggleIsActive(): void {
		this.isActive = !this.isActive;
	}
	changeControlPoint(controlPoint: string): void {
		this.controlPoint = +controlPoint;
	}
	calculatePosition(position: Vec2, boxSize: Vec2, usedMouse: boolean, direction: Vec2): void {
		if (this.isActive) {
			// init map
			const controlPointMap = new Map();
			controlPointMap.set(ControlPoint.Center, { x: boxSize.x / 2, y: boxSize.y / 2 });
			controlPointMap.set(ControlPoint.CenterDown, { x: boxSize.x / 2, y: boxSize.y });
			controlPointMap.set(ControlPoint.CenterLeft, { x: 0, y: boxSize.y / 2 });
			controlPointMap.set(ControlPoint.CenterRight, { x: boxSize.x, y: boxSize.y / 2 });
			controlPointMap.set(ControlPoint.CenterUp, { x: boxSize.x / 2, y: 0 });
			controlPointMap.set(ControlPoint.CornerDownLeft, { x: 0, y: boxSize.y });
			controlPointMap.set(ControlPoint.CornerDownRight, { x: boxSize.x, y: boxSize.y });
			controlPointMap.set(ControlPoint.CornerUpLeft, { x: 0, y: 0 });
			controlPointMap.set(ControlPoint.CornerUpRight, { x: boxSize.x, y: 0 });

			const gridSize = this.grid.options.gridOptions.size;
			const halfGrid = gridSize / 2;

			const offsetX = controlPointMap.get(this.controlPoint).x;
			const offsetY = controlPointMap.get(this.controlPoint).y;

			const posInGridX = (position.x + offsetX) % gridSize;
			const posInGridY = (position.y + offsetY) % gridSize;
			// // new position
			position.x = posInGridX > halfGrid ? position.x - posInGridX + gridSize : position.x - posInGridX;
			position.y = posInGridY > halfGrid ? position.y - posInGridY + gridSize : position.y - posInGridY;
			if (!usedMouse) {
				position.x = position.x + (direction.x / Global.SHIFT_AMOUNT) * gridSize;
				position.y = position.y + (direction.y / Global.SHIFT_AMOUNT) * gridSize;
			}
		}
	}
}
