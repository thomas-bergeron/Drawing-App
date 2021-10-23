import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseEnum } from '@app/shared/global';
import { SprayService } from './spray.service';
// tslint:disable:no-any
describe('SprayService', () => {
	let service: SprayService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	let isCanvasReadySpy: jasmine.Spy;
	let updateViewSpy: jasmine.Spy;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction', 'undo']);
		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
		service = TestBed.inject(SprayService);
		isCanvasReadySpy = spyOn<any>(service, 'isCanvasReady').and.callThrough();
		updateViewSpy = spyOn<any>(service, 'updateView').and.callThrough();
		// Configuration du spy du service
		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub; // Jasmine doesnt copy properties with underlying data
		service['drawingService'].previewCtx = previewCtxStub;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('should set mouseDownCoord to correct position', () => {
		const expectedResult: Vec2 = service.getPagePositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS]);
		isCanvasReadySpy.and.returnValue(true);
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS]);
		expect(service.mouseDownCoord).toEqual(expectedResult);
	});

	it(' mouseDown should set isDrawing property to true on left click', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toBeTruthy();
	});

	it(' mouseDown should set isDrawing property to false on right click', () => {
		const mouseEventRClick = Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK];
		service.onMouseDown(mouseEventRClick);
		expect(service.isDrawing).toBeFalsy();
	});
	it(' mouseDown should set spray interval', () => {
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		isCanvasReadySpy.and.returnValue(true);
		const initialSpray: ReturnType<typeof setInterval> = service['spray'];
		service.onMouseDown(mouseEvent);
		const finalSpray: ReturnType<typeof setInterval> = service['spray'];
		expect(initialSpray).not.toEqual(finalSpray);
	});
	it(' mouseDown should not call updateView', () => {
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		isCanvasReadySpy.and.returnValue(false);
		service.onMouseDown(mouseEvent);
		expect(updateViewSpy).not.toHaveBeenCalled();
	});
	it('onMouseUp should call update view if drawing had started', () => {
		service.mouseDownCoord = { x: 0, y: 0 };
		service.isDrawing = true;
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(updateViewSpy).toHaveBeenCalled();
	});

	it(' onMouseUp should not call update view if drawing has not started', () => {
		service.isDrawing = false;
		service.mouseDownCoord = { x: 0, y: 0 };
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(updateViewSpy).not.toHaveBeenCalled();
	});
	it(' onMouseMove should update mouseDownCoord', () => {
		service.mouseDownCoord = { x: 0, y: 0 };
		isCanvasReadySpy.and.returnValue(true);
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20]);
		expect(service.mouseDownCoord).toEqual(service.getPagePositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20]));
	});
});
