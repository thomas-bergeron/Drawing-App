import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { Arrows, Global, MouseEnum } from '@app/shared/global';
import { EllipseSelectionService } from './ellipse-selection.service';
import { RectangleSelectionService } from './rectangle-selection.service';
import { ShiftSelectionService } from './shift-selection.service';

// tslint:disable:no-string-literal
// tslint:disable: no-any
describe('ShiftSelectionService', () => {
	let service: ShiftSelectionService;
	let canvasTestHelper: CanvasTestHelper;
	let rectangleSelectionServiceSpy: jasmine.SpyObj<RectangleSelectionService>;
	let ellipseSelectionServiceSpy: jasmine.SpyObj<EllipseSelectionService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;

	const defaultVector = { x: 0, y: 0 };

	beforeEach(() => {
		rectangleSelectionServiceSpy = jasmine.createSpyObj(
			'RectangleSelectionService',
			['redrawSelection', 'selectRectangle', 'callPlaceBox'],
			[''],
		);
		ellipseSelectionServiceSpy = jasmine.createSpyObj('EllipseSelectionService', ['drawCircle'], ['']);
		TestBed.configureTestingModule({
			providers: [{ provide: RectangleSelectionService, useValue: rectangleSelectionServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		service = TestBed.inject(ShiftSelectionService);

		service['position'] = Global.TEST_VECTOR;

		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
		baseCtxStub.canvas.width = Global.DEFAULT_CANVAS_SIZE;
		baseCtxStub.canvas.height = Global.DEFAULT_CANVAS_SIZE;

		spyOn(service, 'onMouseDown').and.callThrough();
		spyOn<any>(service, 'changeFactors').and.callThrough();
		spyOn<any>(service, 'updateCanvas').and.callThrough();
		spyOn(baseCtxStub, 'ellipse').and.callThrough();

		rectangleSelectionServiceSpy.selection = new ImageData(1, 1);
		service.selector = rectangleSelectionServiceSpy;
		service.selector.deltaX = Global.TEST_DELTA;
		service.selector.deltaY = Global.TEST_DELTA;
		service.selector.origin = Global.DEFAULT_VECTOR;

		service['drawingService'].baseCtx = baseCtxStub;
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].primaryColor = 'black';
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it(' onMouseDown should not call updateCanvas if isDrawing is false', () => {
		service.isDrawing = false;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK]);
		expect(service['updateCanvas']).not.toHaveBeenCalled();
	});

	it(' onMouseUp should set position to correct value', () => {
		service['isShifting'] = true;
		const expectedResult: Vec2 = Global.TEST_VECTOR;
		service.onMouseUp();
		expect(service['position']).toEqual(expectedResult);
	});

	it(' onMouseUp should not do anything isShifting is false', () => {
		service['isShifting'] = false;
		const expectedResult: Vec2 = { x: 24.5, y: 24.5 };
		service.onMouseUp();
		expect(service['position']).not.toEqual(expectedResult);
	});

	it(' onMouseUp should set isShifting/mouseDown property to false', () => {
		service['isShifting'] = true;
		service.onMouseUp();
		expect(service['isShifting']).toEqual(false);
		expect(service.isDrawing).toEqual(false);
	});

	it(' onMouseUp should call appropriate methods', () => {
		service['isShifting'] = true;
		service.onMouseUp();
		expect(service['updateCanvas']).toHaveBeenCalled();
	});

	it(' onMouseMove should set position to correct value', () => {
		service.mouseDownCoord = service['initBoxPosition'] = { x: 0, y: 0 };
		service['isShifting'] = true;
		const expectedResult: Vec2 = { x: 100, y: 100 };
		service.onMouseMove(Global.MOUSE_EVENTS[Global.TEST_EVENT_INDEX]);
		expect(service['position']).toEqual(expectedResult);
	});

	it(' onMouseMove should not do anything isShifting is false', () => {
		service['isShifting'] = false;
		const expectedResult: Vec2 = { x: 24.5, y: 24.5 };
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service['position']).not.toEqual(expectedResult);
	});

	it(' onMouseMove should call appropriate methods', () => {
		service.mouseDownCoord = service['initBoxPosition'] = { x: 0, y: 0 };
		service['isShifting'] = true;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service['updateCanvas']).toHaveBeenCalled();
	});

	it(' should change factors based on keys activated', () => {
		const keyMap: Map<string, boolean> = new Map<string, boolean>();
		keyMap.set(Arrows.ARROWLEFT, true);
		keyMap.set(Arrows.ARROWDOWN, false);
		keyMap.set(Arrows.ARROWRIGHT, false);
		keyMap.set(Arrows.ARROWUP, true);
		service['changeFactors'](keyMap);
		expect(service['factors']).toEqual({ x: -3, y: -3 });
		keyMap.set(Arrows.ARROWLEFT, false);
		keyMap.set(Arrows.ARROWDOWN, true);
		keyMap.set(Arrows.ARROWRIGHT, true);
		keyMap.set(Arrows.ARROWUP, false);
		service['changeFactors'](keyMap);
		expect(service['factors']).toEqual({ x: 3, y: 3 });
	});

	it(' should do nothing on handle command map if mouse is down and is shifting', () => {
		service.isDrawing = true;
		service['isShifting'] = true;
		service.handleCommandMap(new Map<string, boolean>(), { x: 0, y: 0 });
		expect(service['updateCanvas']).not.toHaveBeenCalled();
	});

	it(' handleCommandMap should set initBoxPosition to selector origin with op 0', () => {
		service.isDrawing = false;
		service.selector.origin = { x: 1, y: 1 };
		service['initBoxPosition'] = { x: 0, y: 0 };
		service.operation = 0;
		service.handleCommandMap(new Map<string, boolean>(), { x: 0, y: 0 });
		expect(service['initBoxPosition']).toEqual(service.selector.origin);
	});

	it(' handleCommandMap should not set initBoxPosition to selector origin with op != 0', () => {
		service.isDrawing = false;
		service.selector.origin = { x: 1, y: 1 };
		service['initBoxPosition'] = { x: 0, y: 0 };
		service.operation = 1;
		service.handleCommandMap(new Map<string, boolean>(), { x: 0, y: 0 });
		expect(service['initBoxPosition']).not.toEqual(service.selector.origin);
	});

	it(' should call appropriate methods with handleCommandMap', () => {
		service.isDrawing = false;
		service['factors'] = { x: 3, y: 3 };
		service.handleCommandMap(new Map<string, boolean>(), { x: 0, y: 0 });
		expect(service['changeFactors']).toHaveBeenCalled();
		expect(service.selector.selectRectangle).toHaveBeenCalled();
		expect(service['updateCanvas']).toHaveBeenCalled();
	});

	it(' handle mouse down should change initBoxPosition then call on mouse down', () => {
		service.handleMouseDown(new MouseEvent(''), Global.TEST_VECTOR, { x: 0, y: 0 });
		expect(service['initBoxPosition']).toEqual(Global.TEST_VECTOR);
		expect(service.onMouseDown).toHaveBeenCalled();
	});

	it(' endSelection should call updateCanvas and set operation to 2', () => {
		service.selector = rectangleSelectionServiceSpy;
		service.endSelection();
		expect(service.operation).toEqual(2);
		expect(service['updateCanvas']).toHaveBeenCalled();
	});

	it(' updateCanvas should call redrawSelection once', () => {
		service['updateCanvas'](0, defaultVector, true);
		expect(rectangleSelectionServiceSpy.redrawSelection).toHaveBeenCalledTimes(1);
	});

	it(' updateCanvas should call redrawSelection once if mouseDown is false and mode is not 0', () => {
		service['updateCanvas'](1, defaultVector, false);
		expect(rectangleSelectionServiceSpy.redrawSelection).toHaveBeenCalledTimes(1);
	});

	it(' updateCanvas should call redrawSelection twice if mouseDown is false and mode is 0', () => {
		service['updateCanvas'](0, defaultVector, false);
		expect(rectangleSelectionServiceSpy.redrawSelection).toHaveBeenCalledTimes(2);
	});

	it(' clearMethod should clear with ellipse if tool is ellipseSelection', () => {
		service.selector = ellipseSelectionServiceSpy;
		service['clearMethod'](service, defaultVector, defaultVector);
		expect(baseCtxStub.ellipse).toHaveBeenCalled();
	});

	it(' clearMethod should not clear with ellipse if tool is not ellipseSelection', () => {
		service['clearMethod'](service, defaultVector, defaultVector);
		expect(baseCtxStub.ellipse).not.toHaveBeenCalled();
	});

	it(' minLimitMouse should set the position to delta if position < delta', () => {
		service['position'] = { x: -100, y: -100 };
		service['size'] = { x: 0, y: 0 };
		service['minLimitMouse']();
		expect(service['position'].x).toEqual(Global.RECTANGLE_LIMIT_OFFSET);
		expect(service['position'].y).toEqual(0);
	});

	it(' minLimitMouse should not set the position to delta if position >= delta', () => {
		service['position'] = { x: 100, y: 100 };
		service['minLimitMouse']();
		expect(service['position'].x).not.toEqual(Global.RECTANGLE_LIMIT_OFFSET);
		expect(service['position'].y).not.toEqual(0);
	});
	it('should call clearMethod 1', () => {
		// tslint:disable-next-line: no-empty
		spyOn<any>(service, 'clearMethod').and.callFake(() => {});
		service['actionWrapper'](service, {} as Vec2, {} as Vec2, {} as Vec2, {} as Vec2, {} as ImageData);
		expect(service['clearMethod']).toHaveBeenCalled();
	});
	it('should call clearMethod 2', () => {
		// tslint:disable-next-line: no-empty
		spyOn<any>(service, 'clearMethod').and.callFake(() => {});
		service['actionWrapper2'](service, {} as Vec2, {} as Vec2, {} as Vec2, 1, {} as Vec2, {} as ImageData);
		expect(service['clearMethod']).toHaveBeenCalled();
	});
});
