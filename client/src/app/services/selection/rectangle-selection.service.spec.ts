import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, MouseEnum } from '@app/shared/global';
import { RectangleSelectionService } from './rectangle-selection.service';

// tslint:disable:no-any
// tslint:disable:no-string-literal
describe('RectangleSelectionService', () => {
	let service: RectangleSelectionService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	let limitRectangleSpy: jasmine.Spy<any>;
	let limitSquareSpy: jasmine.Spy<any>;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub.canvas.width = Global.DEFAULT_CANVAS_SIZE;
		previewCtxStub.canvas.height = Global.DEFAULT_CANVAS_SIZE;

		service = TestBed.inject(RectangleSelectionService);
		spyOn<any>(service, 'updatePreview').and.callThrough();
		spyOn<any>(service, 'drawRectangle').and.callThrough();
		spyOn<any>(service, 'drawSquare').and.callThrough();
		spyOn(service, 'selectRectangle').and.callThrough();
		spyOn<any>(service, 'changeStrokeSettings').and.callThrough();
		spyOn(service, 'deleteCurrentSelection').and.callThrough();
		spyOn(service, 'callPlaceBox').and.callThrough();
		spyOn(service, 'callChangeBoxSize').and.callThrough();
		spyOn(previewCtxStub, 'stroke').and.callThrough();
		spyOn(previewCtxStub, 'strokeRect').and.callThrough();
		spyOn(previewCtxStub, 'drawImage').and.callThrough();
		spyOn(baseCtxStub, 'getImageData').and.callThrough();
		spyOn(baseCtxStub, 'clearRect').and.callThrough();
		spyOn(baseCtxStub, 'fillRect').and.callThrough();
		spyOn(baseCtxStub, 'drawImage').and.callThrough();

		limitRectangleSpy = spyOn<any>(service, 'limitRectanglePosition').and.callThrough();
		limitSquareSpy = spyOn<any>(service, 'limitSquarePosition').and.callThrough();

		service['target'] = { x: 125, y: 125 };
		service.origin = { x: 100, y: 100 };

		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub;
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].primaryColor = 'black';
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;

		service.selection = new ImageData(1, 1);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it(' updatePreview should call drawSquare if shift is down', () => {
		service['shiftDown'] = true;
		service['updatePreview']();
		expect(service['drawSquare']).toHaveBeenCalled();
	});

	it(' updatePreview should call drawRectangle if shift is up', () => {
		service['shiftDown'] = false;
		service['updatePreview']();
		expect(service['drawRectangle']).toHaveBeenCalled();
	});

	it(' onMouseDown should set origin/target to correct position if mouseDown is true', () => {
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.isDrawing = true;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.origin).toEqual(expectedResult);
		expect(service['target']).toEqual(expectedResult);
	});

	it(' onMouseDown should not set origin/target to correct position if mouseDown is false', () => {
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.isDrawing = false;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK]);
		expect(service.origin).not.toEqual(expectedResult);
		expect(service['target']).not.toEqual(expectedResult);
	});

	it(' onMouseDown should set isDrawing property to true on left click', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(true);
	});

	it(' onMouseDown should callPlaceBox and return if isActiveSelection', () => {
		service.isActiveSelection = true;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.callPlaceBox).toHaveBeenCalledTimes(1);
		expect(service.isActiveSelection).toEqual(false);
	});

	it(' onMouseUp should set target to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service['target']).toEqual(expectedResult);
	});

	it(' onMouseUp should set isDrawing property to false', () => {
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(false);
	});

	it(' onMouseUp should set target to correct position', () => {
		service.isDrawing = true;
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.selectRectangle).toHaveBeenCalled();
	});

	it(' onMouseUp should call change the limit based on shift', () => {
		service.isDrawing = true;
		service['shiftDown'] = false;
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(limitRectangleSpy).toHaveBeenCalled();
		service.isDrawing = true;
		service['shiftDown'] = true;
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(limitSquareSpy).toHaveBeenCalled();
	});

	it(' onMouseMove should call updatePreview() if the rectangle is being drawn', () => {
		service.isDrawing = true;

		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS]);
		expect(service['updatePreview']).toHaveBeenCalled();
	});

	it(' onMouseMove should not call updatePreview() if the rectangle is not being drawn', () => {
		service.isDrawing = false;

		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service['updatePreview']).not.toHaveBeenCalled();
	});

	it('handleCommand should set shiftDown to false is the drawing has not begun', () => {
		service.isDrawing = false;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service['shiftDown']).toEqual(false);
	});

	it('handleCommand should set shiftDown to true if shift is down and path has begun', () => {
		service.isDrawing = true;
		service['shiftDown'] = false;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service['shiftDown']).toEqual(true);
	});

	it('handleCommand should set shiftDown to false if shift is down and path has begun', () => {
		service.isDrawing = false;
		service['shiftDown'] = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service['shiftDown']).toEqual(false);
	});

	it('handleCommand should call updatePreview if the path has begun', () => {
		service.isDrawing = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service['updatePreview']).toHaveBeenCalled();
	});

	it('handleCommand should not call updatePreview if the command is not shift', () => {
		service.isDrawing = true;
		const command = { key: Command.BACKSPACE } as KeyboardEvent;
		service.handleCommand(command);
		expect(service['updatePreview']).not.toHaveBeenCalled();
	});

	it('handleCommand should deleteSelection if the command is escape', () => {
		service.isDrawing = true;
		const command = { key: Command.ESCAPE } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.deleteCurrentSelection).toHaveBeenCalled();
	});

	it('drawRectangle should call all the appropriate methods', () => {
		service['drawRectangle'](previewCtxStub, service.origin, service['target']);
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
		expect(baseCtxStub.getImageData).toHaveBeenCalled();
	});

	it('drawSquare should call all the appropriate methods', () => {
		service['drawSquare'](previewCtxStub, service.origin, service['target']);
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
		expect(baseCtxStub.getImageData).toHaveBeenCalled();
	});

	it('drawRectangle should set the deltas to 1 if they have a value of 0', () => {
		service['target'] = service.origin = Global.DEFAULT_VECTOR;
		service['drawRectangle'](previewCtxStub, service.origin, service['target']);
		expect(baseCtxStub.getImageData).toHaveBeenCalledWith(service.origin.x, service.origin.y, 1, 1);
	});

	it('drawRectangle should not set the deltas to 1 if they do not have a value of 0', () => {
		service['drawRectangle'](previewCtxStub, service.origin, service['target']);
		expect(baseCtxStub.getImageData).toHaveBeenCalledWith(service.origin.x, service.origin.y, Global.TEST_DELTA, Global.TEST_DELTA);
	});

	it('drawSquare should set deltaX to 1 if it has a value of 0', () => {
		service['target'] = service.origin = Global.DEFAULT_VECTOR;
		service['drawSquare'](previewCtxStub, service.origin, service['target']);
		expect(service.deltaX).toEqual(1);
		expect(service.deltaY).toEqual(1);
	});

	it('drawSquare should not set the deltas to 1 if they do not have a value of 0', () => {
		service['drawSquare'](previewCtxStub, service.origin, service['target']);
		expect(service.deltaX).toEqual(Global.TEST_DELTA);
		expect(service.deltaY).toEqual(Global.TEST_DELTA);
	});

	it('selectRectangle should call changeBoxSize and placeBox', () => {
		service.selectRectangle(service.origin);
		expect(service.callChangeBoxSize).toHaveBeenCalled();
		expect(service.callPlaceBox).toHaveBeenCalled();
	});

	it('limitRectangePosition should cap the target position to the size of the canvas', () => {
		service['target'] = { x: -5, y: 2000 };
		// tslint:disable:no-string-literal
		service['limitRectanglePosition'](previewCtxStub, service.origin, service['target']);
		expect(service['target'].x).toEqual(0);
		expect(service['target'].y).toEqual(previewCtxStub.canvas.height);

		service['target'] = { x: 2000, y: -5 };
		// tslint:disable:no-string-literal
		service['limitRectanglePosition'](previewCtxStub, service.origin, service['target']);
		expect(service['target'].x).toEqual(previewCtxStub.canvas.width);
		expect(service['target'].y).toEqual(0);
	});

	it('limitRectangePosition should not change anything when target is on canvas', () => {
		// tslint:disable:no-string-literal
		service['limitRectanglePosition'](previewCtxStub, service.origin, service['target']);
		expect(service['target'].x).toEqual(service['target'].x);
		expect(service['target'].y).toEqual(service['target'].y);
	});

	it('limitSquarePosition should change deltaX if square would be out of bounds', () => {
		service.origin = { x: 30, y: 25 };
		service['target'] = { x: 525, y: 525 };
		// tslint:disable:no-string-literal
		service['limitSquarePosition'](previewCtxStub, service.origin, service['target']);
		expect(service.deltaX).toEqual(previewCtxStub.canvas.width - service.origin.x);
		expect(service.deltaY).toEqual(previewCtxStub.canvas.height - service.origin.y);

		service.origin = { x: 30, y: 25 };
		service['target'] = { x: -525, y: -525 };
		// tslint:disable:no-string-literal
		service['limitSquarePosition'](previewCtxStub, service.origin, service['target']);
		expect(service.deltaX).toEqual(-service.origin.x);
		expect(service.deltaY).toEqual(-service.origin.y);
	});

	it('changeStrokeSettings should change the settings', () => {
		baseCtxStub.setLineDash([1]);
		// tslint:disable:no-string-literal
		service['changeStrokeSettings']('black', 1);
		expect(previewCtxStub.strokeStyle).toEqual('#000000');
		expect(previewCtxStub.lineWidth).toEqual(1);
		expect(previewCtxStub.getLineDash()).toEqual(baseCtxStub.getLineDash());
	});

	it('should call the appropriate functions when redrawSelection is called at status 0', () => {
		service.redrawSelection(Global.TEST_VECTOR, 0, Global.TEST_VECTOR, service.selection);
		expect(baseCtxStub.fillRect).toHaveBeenCalled();
		expect(drawServiceSpy.clearCanvas).toHaveBeenCalled();
		expect(previewCtxStub.drawImage).toHaveBeenCalled();
		expect(service.callPlaceBox).toHaveBeenCalled();
	});

	it('should call the appropriate functions when redrawSelection is called at status 1', () => {
		service.redrawSelection(Global.TEST_VECTOR, 1, Global.TEST_VECTOR, service.selection);
		expect(drawServiceSpy.clearCanvas).toHaveBeenCalled();
		expect(previewCtxStub.drawImage).toHaveBeenCalled();
		expect(service.callPlaceBox).toHaveBeenCalled();
	});

	it('should call the appropriate functions when redrawSelection is called at status 2', () => {
		service.redrawSelection(Global.TEST_VECTOR, 2, Global.TEST_VECTOR, service.selection);
		expect(drawServiceSpy.clearCanvas).toHaveBeenCalled();
		expect(baseCtxStub.drawImage).toHaveBeenCalled();
		expect(service.callPlaceBox).toHaveBeenCalled();
	});

	it('redrawSelection should change origin to position parameter', () => {
		service.origin = Global.DEFAULT_VECTOR;
		service.redrawSelection(Global.TEST_VECTOR, 0, Global.TEST_VECTOR, service.selection);
		expect(service.origin).toEqual(Global.TEST_VECTOR);
	});

	it('redrawSelection should not do anything if canvas does not exist', () => {
		service['drawingService'].previewCtx = (undefined as unknown) as CanvasRenderingContext2D;
		service.redrawSelection(Global.DEFAULT_VECTOR, 0, Global.DEFAULT_VECTOR, service.selection);
		expect(drawServiceSpy.clearCanvas).not.toHaveBeenCalled();
	});

	it('should draw image at position based on deltas sign with redrawSelection', () => {
		const deltas = { x: -25, y: -25 };
		service.deltaX = service.deltaY = Global.TEST_DELTA;
		service.redrawSelection(Global.TEST_VECTOR, 0, deltas, service.selection);
		expect(previewCtxStub.drawImage).toHaveBeenCalled();
	});
});
