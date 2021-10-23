import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseEnum } from '@app/shared/global';
import { EraserService } from './eraser.service';

describe('EraseService', () => {
	let service: EraserService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	// tslint:disable:no-any
	let eraseSpy: jasmine.Spy<any>;
	let plotLineSpy: jasmine.Spy<any>;
	let cursorSpy: jasmine.Spy<any>;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		service = TestBed.inject(EraserService);
		eraseSpy = spyOn<any>(service, 'erase').and.callThrough();
		plotLineSpy = spyOn<any>(service, 'plotLine').and.callThrough();
		spyOn(service, 'onMouseDown').and.callThrough();
		spyOn(previewCtxStub, 'strokeRect').and.callThrough();
		spyOn(previewCtxStub, 'fillRect').and.callThrough();
		cursorSpy = spyOn<any>(service, 'drawCursor').and.callThrough();

		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub;
		service['drawingService'].previewCtx = previewCtxStub;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it(' should set cursor to correct position on mouse down with left click', () => {
		const expectedResult = service.getPagePositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		// tslint:disable:no-string-literal
		expect(service['cursor']).toEqual(expectedResult);
	});

	it(' should call clearPath,erase and drawCursor', () => {
		// tslint:disable:no-string-literal
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(eraseSpy).toHaveBeenCalled();
		expect(cursorSpy).toHaveBeenCalled();
	});
	it(' should not call clearPath,erase and drawCursor', () => {
		// tslint:disable:no-string-literal
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK]);
		expect(eraseSpy).not.toHaveBeenCalled();
		expect(cursorSpy).not.toHaveBeenCalled();
	});

	it(' onMouseUp should call erase if mouse is down', () => {
		service.mouseDownCoord = { x: 0, y: 0 };
		service.isDrawing = true;

		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(eraseSpy).toHaveBeenCalled();
	});

	it(' onMouseUp should not call erase if mouse is not down', () => {
		service.mouseDownCoord = { x: 0, y: 0 };
		service.isDrawing = false;

		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(eraseSpy).not.toHaveBeenCalled();
	});

	it(' onMouseMove should add point to path', () => {
		service.isDrawing = true;
		const event = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		const initLength = service['pathData'].length;
		service.onMouseMove(event);
		expect(service['pathData'].length).toEqual(initLength + 1);
		expect(service['pathData'].pop()).toEqual(service.getPagePositionFromMouse(event));
	});
	it(' onMouseMove should call erase if mouse is down and canvas is ready', () => {
		service.isDrawing = true;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(eraseSpy).toHaveBeenCalled();
		expect(drawServiceSpy.clearCanvas).toHaveBeenCalled();
		expect(cursorSpy).toHaveBeenCalled();
	});

	it(' onMouseMove should not call erase if mouse was not already down or canvas not ready', () => {
		service.isDrawing = false;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(eraseSpy).not.toHaveBeenCalled();
		expect(cursorSpy).toHaveBeenCalled();
	});

	it(' should interpolate square when the path is not empty', () => {
		const path: Vec2[] = Global.TEST_PATH;

		// tslint:disable:no-string-literal
		service['erase'](previewCtxStub, path, service.options);
		expect(service['plotLine']).toHaveBeenCalledTimes(Global.NUMBER_OF_PLOTLINE_CALLS);
	});

	it(' should switch x and y when there is a y variation is bigger than x variation', () => {
		const path: Vec2[] = Global.Y_AXIS_TEST_PATH;
		const expectedPoint0 = { x: path[0].y, y: path[0].x };
		const expectedPoint1 = { x: path[1].y, y: path[1].x };
		const expectedDeltas = { x: expectedPoint1.x - expectedPoint0.x, y: expectedPoint1.y - expectedPoint0.y };

		// tslint:disable:no-string-literal
		service['erase'](previewCtxStub, path, service.options);
		expect(service['plotLine']).toHaveBeenCalledWith(previewCtxStub, expectedPoint0, expectedPoint1, expectedDeltas, true, service.options);
	});

	it(' should do points in reverse order with negative delta', () => {
		const path: Vec2[] = Global.INVERTED_TEST_PATH;
		const expectedPoint0 = path[0];
		const expectedPoint1 = path[1];
		const expectedDeltas = { x: expectedPoint1.x - expectedPoint0.x, y: expectedPoint1.y - expectedPoint0.y };

		// tslint:disable:no-string-literal
		service['erase'](previewCtxStub, path, service.options);
		expect(plotLineSpy).toHaveBeenCalledWith(previewCtxStub, expectedPoint1, expectedPoint0, expectedDeltas, false, service.options);
	});

	it(' should only do a fillRect when path has one point', () => {
		const path: Vec2[] = [];
		path.push(Global.TEST_PATH[0]);

		// tslint:disable:no-string-literal
		service['erase'](previewCtxStub, path, service.options);
		expect(previewCtxStub.fillRect).toHaveBeenCalled();
		expect(plotLineSpy).not.toHaveBeenCalled();
	});

	it(' should interpolate at the right coordinates', () => {
		const path = Global.TEST_PATH;
		const deltas = { x: path[1].x - path[0].x, y: path[1].y - path[0].y };
		const expectedCoordinatesA = { x: 2, y: 0.2 };
		const expectedCoordinatesB = { x: 6, y: 0.6 };

		// tslint:disable:no-string-literal
		service['plotLine'](previewCtxStub, path[0], path[1], deltas, false, service.options);
		expect(previewCtxStub.fillRect).toHaveBeenCalledWith(
			expectedCoordinatesA.x - Global.ERASER_MIN_TRAIL_SIZE / 2,
			expectedCoordinatesA.y - Global.ERASER_MIN_TRAIL_SIZE / 2,
			Global.ERASER_MIN_TRAIL_SIZE,
			Global.ERASER_MIN_TRAIL_SIZE,
		);
		expect(previewCtxStub.fillRect).toHaveBeenCalledWith(
			expectedCoordinatesB.x - Global.ERASER_MIN_TRAIL_SIZE / 2,
			expectedCoordinatesB.y - Global.ERASER_MIN_TRAIL_SIZE / 2,
			Global.ERASER_MIN_TRAIL_SIZE,
			Global.ERASER_MIN_TRAIL_SIZE,
		);
	});

	it(' should make a rectangle for every interpolation', () => {
		const path = Global.TEST_PATH;
		const deltas = { x: path[1].x - path[0].x, y: path[1].y - path[0].y };
		const expectedInterpolationNumber = Global.NUMBER_OF_INTERPOLATION;

		// tslint:disable:no-string-literal
		service['plotLine'](previewCtxStub, path[0], path[1], deltas, false, service.options);
		expect(previewCtxStub.fillRect).toHaveBeenCalledTimes(expectedInterpolationNumber);
	});

	it(' should not make a rectangle when distance is 0', () => {
		const path = [];
		path.push(Global.TEST_PATH[0]);
		path.push(Global.TEST_PATH[0]);
		const deltas = { x: path[1].x - path[0].x, y: path[1].y - path[0].y };
		const expectedInterpolationNumber = 0;

		// tslint:disable:no-string-literal
		service['plotLine'](previewCtxStub, path[0], path[1], deltas, false, service.options);
		expect(previewCtxStub.fillRect).toHaveBeenCalledTimes(expectedInterpolationNumber);
	});

	it(' should make a rectangle for every interpolation when the distance is long', () => {
		const path = Global.FAR_INTERPOLATION_POINTS;
		const deltas = { x: path[1].x - path[0].x, y: path[1].y - path[0].y };
		const expectedInterpolationNumber = Global.EXTREME_NB_OF_INTERPOLATION;

		// tslint:disable:no-string-literal
		service['plotLine'](previewCtxStub, path[0], path[1], deltas, false, service.options);
		expect(previewCtxStub.fillRect).toHaveBeenCalledTimes(expectedInterpolationNumber);
	});

	it(' should draw a cursor when draw cursor is called', () => {
		const testPosition = Global.TEST_PATH[0];
		const expectedFillStyle = '#ffffff';
		const expectedStrokeStyle = '#000000';
		previewCtxStub.fillStyle = expectedStrokeStyle;
		previewCtxStub.strokeStyle = expectedFillStyle;

		// tslint:disable:no-string-literal
		service['drawCursor'](previewCtxStub, testPosition);
		expect(previewCtxStub.fillStyle).toEqual(expectedFillStyle);
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
		expect(previewCtxStub.strokeStyle).toEqual(expectedStrokeStyle);
		expect(previewCtxStub.fillRect).toHaveBeenCalled();
	});
});
