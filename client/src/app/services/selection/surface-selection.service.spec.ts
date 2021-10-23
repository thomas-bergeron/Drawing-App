import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, Shortcut } from '@app/shared/global';
import { SurfaceSelectionService } from './surface-selection.service';

describe('SurfaceSelectionService', () => {
	let service: SurfaceSelectionService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		service = TestBed.inject(SurfaceSelectionService);
		spyOn(service, 'selectRectangle').and.callThrough();
		spyOn(service, 'deleteCurrentSelection').and.callThrough();
		spyOn(service, 'callChangeBoxSize').and.callThrough();
		spyOn(service, 'callPlaceBox').and.callThrough();
		spyOn(previewCtxStub, 'stroke').and.callThrough();
		spyOn(previewCtxStub, 'strokeRect').and.callThrough();
		spyOn(previewCtxStub, 'drawImage').and.callThrough();
		spyOn(baseCtxStub, 'getImageData').and.callThrough();
		spyOn(baseCtxStub, 'clearRect').and.callThrough();
		spyOn(baseCtxStub, 'fillRect').and.callThrough();
		spyOn(baseCtxStub, 'drawImage').and.callThrough();

		// tslint:disable:no-string-literal
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].baseCtx = baseCtxStub;
		service['drawingService'].primaryColor = 'black';
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;

		service.origin = { x: 25, y: 25 };
		service.deltaX = service.deltaY = Global.TEST_DELTA;
		service.selection = new ImageData(1, 1);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('handleCommand should select rectangle when tool is chosen', () => {
		service.isDrawing = true;
		const command = { key: Shortcut.SURFACE_SELECTION } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.selectRectangle).toHaveBeenCalled();
	});

	it('handleCommand should deleteSelection if the command is escape', () => {
		service.isDrawing = true;
		const command = { key: Command.ESCAPE } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.deleteCurrentSelection).toHaveBeenCalled();
	});

	it('selectRectangle should get image data and place the box', () => {
		service.selectRectangle();
		expect(baseCtxStub.getImageData).toHaveBeenCalled();
		expect(service.callChangeBoxSize).toHaveBeenCalled();
		expect(service.callPlaceBox).toHaveBeenCalled();
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
