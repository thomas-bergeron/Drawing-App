export class ShapeOptions {
	contour: boolean = false;
	fill: boolean = true;
	nbVertices: number;

	constructor(nbVertices: number) {
		if (nbVertices !== 0) this.nbVertices = nbVertices;
	}
}
