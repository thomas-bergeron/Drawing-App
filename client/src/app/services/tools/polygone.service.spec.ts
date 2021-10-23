import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseEnum } from '@app/shared/global';
import { PolygoneService } from './polygone.service';

describe('PolygoneService', () => {
	let service: PolygoneService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);
		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		service = TestBed.inject(PolygoneService);
		spyOn(service, 'updatePreview').and.callThrough();
		spyOn(service, 'updateBase').and.callThrough();
		spyOn(service, 'drawPolygone').and.callThrough();
		spyOn(service, 'drawCircularPerimeter').and.callThrough();
		spyOn(service, 'getPolygonePoints').and.callThrough();
		spyOn(service, 'calculateRadius').and.callThrough();
		spyOn(previewCtxStub, 'stroke').and.callThrough();
		spyOn(previewCtxStub, 'fill').and.callThrough();
		spyOn(previewCtxStub, 'ellipse').and.callThrough();
		spyOn(previewCtxStub, 'lineTo').and.callThrough();
		spyOn(previewCtxStub, 'beginPath').and.callThrough();

		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub;
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;
		service.target = { x: 25, y: 25 } as Vec2;
		service.origin = { x: 25, y: 25 } as Vec2;
		service.center = { x: 0, y: 0 } as Vec2;
		service.radius = Global.DEFAULT_RADIUS;
		service.verticesCoords = Global.TEST_VERTICES;
		service.options.shapeOptions.nbVertices = Global.TEST_NBVERTICES;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// Tests updatePreview
	it(' updatePreview should call drawPolygone', () => {
		service.updatePreview();
		expect(service.drawPolygone).toHaveBeenCalled();
	});

	it(' updatePreview should call drawCircularPerimeter', () => {
		service.updatePreview();
		expect(service.drawCircularPerimeter).toHaveBeenCalled();
	});

	// Tests updateBase
	it(' updateBase should call drawPolygone', () => {
		service.updateBase();
		expect(service.drawPolygone).toHaveBeenCalled();
	});

	it(' updateBase should call addAction on drawingService', () => {
		service.updateBase();
		expect(drawServiceSpy.addAction).toHaveBeenCalled();
	});

	// Tests mouseDown
	it(' mouseDown should set origin to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.origin).toEqual(expectedResult);
	});

	it(' mouseDown should set isDrawing property to true on left click', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(true);
	});

	it(' if the contour and fill properties are both set to false, onMouseDown should set contour to true', () => {
		service.options.shapeOptions.contour = false;
		service.options.shapeOptions.fill = false;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.options.shapeOptions.contour).toEqual(true);
	});

	it('should return if shape is inverted', () => {
		const point1: Vec2 = { x: 0, y: 0 };
		const point2: Vec2 = { x: 0, y: 0 };
		// tslint:disable:no-any
		spyOn<any>(service, 'distanceBetweenPoints').and.callFake(() => {
			return 0;
		});
		// tslint:disable:no-magic-numbers
		service['circleRadius'] = 3;
		service['breakPointRadius'] = 3;
		expect(service.isInverted([point1, point2])).toBeTruthy();
	});

	it('should clear vertice array', () => {
		const array = [
			{ x: 0, y: 0 },
			{ x: 10, y: 0 },
			{ x: 10, y: 10 },
			{ x: 0, y: 10 },
		];
		// tslint:disable:no-any
		spyOn<any>(service, 'isInverted').and.callFake(() => {
			return true;
		});
		expect(service.findIntersectionPoints(array, 1)).toEqual([] as Vec2[]);
	});

	it(' onMouseUp should should set target to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.target).toEqual(expectedResult);
	});

	it(' onMouseUp should set isDrawing property to false', () => {
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(false);
	});

	it(' onMouseMove should set target to correct position if the mouse is down', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.target).toEqual(expectedResult);
	});

	it(' onMouseMove should call updatePreview is isDrawing is true', () => {
		service.isDrawing = true;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.updatePreview).toHaveBeenCalled();
	});

	// Tests drawPolygone
	it(' drawPolygone should call beginPath()', () => {
		service.drawPolygone(
			previewCtxStub,
			service.options.shapeOptions.nbVertices,
			service.verticesCoords,
			service.options.shapeOptions.fill,
			service.options.shapeOptions.contour,
			service.options.size,
			service['drawingService'].primaryColor,
			service['drawingService'].secondaryColor,
		);
		expect(previewCtxStub.beginPath).toHaveBeenCalled();
	});

	it(' drawPolygone should call stroke() if the contour property is true', () => {
		service.options.shapeOptions.contour = true;

		service.drawPolygone(
			previewCtxStub,
			service.options.shapeOptions.nbVertices,
			service.verticesCoords,
			service.options.shapeOptions.fill,
			service.options.shapeOptions.contour,
			service.options.size,
			service['drawingService'].primaryColor,
			service['drawingService'].secondaryColor,
		);
		expect(previewCtxStub.stroke).toHaveBeenCalled();
	});

	it(' drawPolygone should call fill() if the fill property is true', () => {
		service.options.shapeOptions.fill = true;

		service.drawPolygone(
			previewCtxStub,
			service.options.shapeOptions.nbVertices,
			service.verticesCoords,
			service.options.shapeOptions.fill,
			service.options.shapeOptions.contour,
			service.options.size,
			service['drawingService'].primaryColor,
			service['drawingService'].secondaryColor,
		);
		expect(previewCtxStub.fill).toHaveBeenCalled();
	});

	it(' drawPolygone should not call stroke() if the contour property is false', () => {
		service.options.shapeOptions.contour = false;

		service.drawPolygone(
			previewCtxStub,
			service.options.shapeOptions.nbVertices,
			service.verticesCoords,
			service.options.shapeOptions.fill,
			service.options.shapeOptions.contour,
			service.options.size,
			service['drawingService'].primaryColor,
			service['drawingService'].secondaryColor,
		);
		expect(previewCtxStub.stroke).not.toHaveBeenCalled();
	});

	it(' drawPolygone should not call fill() if the fill property is false', () => {
		service.options.shapeOptions.fill = false;

		service.drawPolygone(
			previewCtxStub,
			service.options.shapeOptions.nbVertices,
			service.verticesCoords,
			service.options.shapeOptions.fill,
			service.options.shapeOptions.contour,
			service.options.size,
			service['drawingService'].primaryColor,
			service['drawingService'].secondaryColor,
		);
		expect(previewCtxStub.fill).not.toHaveBeenCalled();
	});

	it(' drawPolygone should not call beginPath() if the number of vertices exceeds the limits', () => {
		service.options.shapeOptions.nbVertices = Global.MAX_VERTICES_NUMBER + 1;

		service.drawPolygone(
			previewCtxStub,
			service.options.shapeOptions.nbVertices,
			service.verticesCoords,
			service.options.shapeOptions.fill,
			service.options.shapeOptions.contour,
			service.options.size,
			service['drawingService'].primaryColor,
			service['drawingService'].secondaryColor,
		);
		expect(previewCtxStub.beginPath).not.toHaveBeenCalled();
	});

	// getPolygonePoints tests
	it(' getPolygonePoint should set vertices to correct positions', () => {
		service.verticesCoords = [];

		service.center = { x: 200, y: 200 };

		service.getPolygonePoints();
		for (let i = 0; i < service.options.shapeOptions.nbVertices; i++) {
			expect(Math.round(service.verticesCoords[i].x)).toEqual(Global.TEST_VERTICES[i].x);
			expect(Math.round(service.verticesCoords[i].y)).toEqual(Global.TEST_VERTICES[i].y);
		}
	});

	// getPolygonePoints tests
	it(' getPolygonePoint should set first vertices y coordinate [radius] units below center on the y axis if shape being drawn downwards', () => {
		service.verticesCoords = [];
		service.radius = 0;

		service.center = { x: 200, y: 200 };
		const expectedResult: Vec2 = { x: 200, y: 200 };

		service.getPolygonePoints();
		expect(service.verticesCoords[0]).toEqual(expectedResult);
	});

	// drawCircularPerimeter tests
	it(' drawCircle should call ellipse() and stroke() if the isDrawing property is true', () => {
		service.isDrawing = true;

		service.drawCircularPerimeter();
		expect(previewCtxStub.ellipse).toHaveBeenCalled();
		expect(previewCtxStub.stroke).toHaveBeenCalled();
	});

	// calculateRadius tests
	it(' circleRadius should be the sum of the shape radius and the contour thickness if contour is true', () => {
		service.options.shapeOptions.contour = true;
		service.origin = { x: 100, y: 100 };
		service.target = { x: 125, y: 125 };
		service.options.size = Global.MIN_TOOL_SIZE;

		service.calculateRadius();
		expect(service.circleRadius).toEqual(Global.TEST_RADIUS);
	});
});
