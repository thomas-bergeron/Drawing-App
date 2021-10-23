import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseEnum } from '@app/shared/global';
import { PencilService } from './pencil.service';

// tslint:disable:no-any
describe('PencilService', () => {
	let service: PencilService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	let drawLineSpy: jasmine.Spy<any>;

	let isCanvasReadySpy: jasmine.Spy<any>;
	let updateViewSpy: jasmine.Spy<any>;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);
		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});

		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		service = TestBed.inject(PencilService);

		drawLineSpy = spyOn<any>(service, 'drawLine').and.callThrough();
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

	it(' mouseDown should call updateView', () => {
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		isCanvasReadySpy.and.returnValue(true);
		service.onMouseDown(mouseEvent);
		expect(updateViewSpy).toHaveBeenCalled();
	});
	it(' mouseDown should not call updateView', () => {
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		isCanvasReadySpy.and.returnValue(false);
		service.onMouseDown(mouseEvent);
		expect(updateViewSpy).not.toHaveBeenCalled();
	});
	it('should add point to path, call clearCanvas and drawline', () => {
		const expectedResult: Vec2 = { x: 25, y: 25 };
		const path: Vec2[] = [] as Vec2[];

		drawServiceSpy.primaryColor = '#000000';
		service['updateView'](expectedResult, previewCtxStub, path);
		expect(path.pop()).toEqual(expectedResult);
		expect(drawServiceSpy.clearCanvas).toHaveBeenCalled();
		expect(drawServiceSpy.clearCanvas).toHaveBeenCalledWith(previewCtxStub);
		expect(drawLineSpy).toHaveBeenCalled();
		expect(drawLineSpy).toHaveBeenCalledWith(previewCtxStub, path, service.options, '#000000');
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
	it(' onMouseMove should call updateView if canvas is ready for drawing', () => {
		service.mouseDownCoord = { x: 0, y: 0 };
		isCanvasReadySpy.and.returnValue(true);
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(updateViewSpy).toHaveBeenCalled();
	});
	it(' onMouseMove should not call updateView if canvas is not ready for drawing', () => {
		service.mouseDownCoord = { x: 0, y: 0 };
		isCanvasReadySpy.and.returnValue(false);
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(updateViewSpy).not.toHaveBeenCalled();
	});

	// Exemple de test d'intégration qui est quand même utile
	it(' should change the pixel of the canvas ', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT]);
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.ONE_OFF_X]);
		// Premier pixel seulement
		const imageData: ImageData = baseCtxStub.getImageData(0, 0, 1, 1);
		expect(imageData.data[0]).toEqual(0); // R
		expect(imageData.data[1]).toEqual(0); // G
		expect(imageData.data[2]).toEqual(0); // B
	});
});
