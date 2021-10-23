import { Vec2 } from './vec2';

export class Line {
	r: number;
	dx: number;
	dy: number;
	distance: number;
	initPoint: Vec2;
	finalPoint: Vec2;
	constructor(point1: Vec2, point2: Vec2, distance: number) {
		this.r = this.calculateR(point1, point2);
		this.dx = -(distance / this.r) * (point2.y - point1.y);
		this.dy = (distance / this.r) * (point2.x - point1.x);
		this.initPoint = point1;
		this.finalPoint = point2;
	}

	calculateR(point1: Vec2, point2: Vec2): number {
		return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	getNewPoint(point: Vec2): Vec2 {
		return { x: point.x + this.dx, y: point.y + this.dy };
	}

	intersection(point1: Vec2, point2: Vec2, point3: Vec2, point4: Vec2): Vec2 {
		let slope1 = 0;
		let slope2 = 0;
		let xin = 0;
		let yin = 0;
		if (point2.x - point1.x !== 0) {
			slope1 = (point2.y - point1.y) / (point2.x - point1.x);
		}

		if (point4.x - point3.x !== 0) {
			slope2 = (point4.y - point3.y) / (point4.x - point3.x);
		}

		if (slope1 !== slope2) {
			xin =
				((point1.x * point2.y - point1.y * point2.x) * (point3.x - point4.x) -
					(point3.x * point4.y - point3.y * point4.x) * (point1.x - point2.x)) /
				((point1.x - point2.x) * (point3.y - point4.y) - (point1.y - point2.y) * (point3.x - point4.x));
			yin =
				((point1.x * point2.y - point1.y * point2.x) * (point3.y - point4.y) -
					(point3.x * point4.y - point3.y * point4.x) * (point1.y - point2.y)) /
				((point1.x - point2.x) * (point3.y - point4.y) - (point1.y - point2.y) * (point3.x - point4.x));
		}
		return { x: xin, y: yin } as Vec2;
	}
}
