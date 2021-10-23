import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { LineService } from '@app/services/tools/line.service';
import { Global, MouseEnum } from '@app/shared/global';
import { LassoSelectionService } from './lasso-selection.service';

// tslint:disable:no-any
describe('LassoSelectionService', () => {
	let service: LassoSelectionService;
	let mouseEvent: MouseEvent;
	let canvasTestHelper: CanvasTestHelper;
	// tslint:disable:prefer-const
	let lineServiceSpy: jasmine.SpyObj<LineService>;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	let updatePreviewSpy: jasmine.Spy<any>;
	let checkSegmentSpy: jasmine.Spy<any>;
	let drawRectangleSpy: jasmine.Spy<any>;
	let updateTipSpy: jasmine.Spy<any>;
	let deleteLastSegmentSpy: jasmine.Spy<any>;
	let shouldClosePathSpy: jasmine.Spy<any>;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);

		TestBed.configureTestingModule({
			providers: [
				{ provide: DrawingService, useValue: drawServiceSpy },
				{ provide: LineService, useValue: lineServiceSpy },
			],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub.canvas.width = Global.DEFAULT_CANVAS_SIZE;
		previewCtxStub.canvas.height = Global.DEFAULT_CANVAS_SIZE;
		baseCtxStub.canvas.width = Global.DEFAULT_CANVAS_SIZE;
		baseCtxStub.canvas.height = Global.DEFAULT_CANVAS_SIZE;
		service = TestBed.inject(LassoSelectionService);
		spyOn(service, 'selectRectangle').and.callThrough();
		spyOn(service, 'changeStrokeSettings').and.callThrough();
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
		updatePreviewSpy = spyOn<any>(service, 'updatePreview').and.callThrough();
		updateTipSpy = spyOn<any>(service, 'updateTip').and.callThrough();
		deleteLastSegmentSpy = spyOn<any>(service, 'deleteLastSegment').and.callThrough();
		service.target = { x: 125, y: 125 };
		service.origin = { x: 100, y: 100 };
		service.deltaX = Global.TEST_VECTOR.x;
		service.deltaY = Global.TEST_VECTOR.y;
		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub;
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;
		service['minX'] = Global.TEST_VECTOR.x;
		service['minY'] = Global.TEST_VECTOR.y;
		service['pathData'] = [];
		for (let a = 0; a < Global.DUMMY_SIZE; a++) {
			service['pathData'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
		}
		service['pathDataCopy'] = [];
		for (let a = 0; a < Global.DUMMY_SIZE; a++) {
			service['pathDataCopy'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
		}
		service['mousePos'] = service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		service['isDrawing'] = false;
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		service.selection = new ImageData(1, 1);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('selectRectangle should call changeBoxSize and placeBox', () => {
		service.selectRectangle(service.origin);
		expect(service.callChangeBoxSize).toHaveBeenCalled();
		expect(service.callPlaceBox).toHaveBeenCalled();
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
	it('should update the tip position, clear the path and place the selection rectangle when stop drawing', () => {
		service['stopDrawing'](Global.MOUSE_EVENTS[0]);
		expect(service.isDrawing).toEqual(false);
	});
	it('deleteSelection should clear the preview canvas, create a blank selection and reset the placebox', () => {
		const testSelection = new ImageData(1, 1);

		service.deleteCurrentSelection();
		expect(service['drawingService'].clearCanvas).toHaveBeenCalled();
		expect(service.selection).toEqual(testSelection);
		expect(service.callPlaceBox).toHaveBeenCalled();
	});
	it('click should update preview canvas and check the last added segment', () => {
		drawRectangleSpy = spyOn<any>(service, 'drawRectangle').and.callFake(() => true);
		checkSegmentSpy = spyOn<any>(service, 'checkLastSegment').and.callThrough();
		service['click'](mouseEvent);

		expect(updatePreviewSpy).toHaveBeenCalled();
		expect(checkSegmentSpy).toHaveBeenCalled();
		expect(drawRectangleSpy).toHaveBeenCalled();
	});
	it('click should set is drawing to false and return immediately if the selection is closed', () => {
		service['closed'] = true;

		service['click'](mouseEvent);

		expect(service['isDrawing']).toEqual(false);
	});
	it('click should draw the selection rectangle if the path has to close', () => {
		drawRectangleSpy = spyOn<any>(service, 'drawRectangle').and.callFake(() => true);
		checkSegmentSpy = spyOn<any>(service, 'checkLastSegment').and.callThrough();
		service['click'](mouseEvent);

		expect(drawRectangleSpy).toHaveBeenCalled();
		expect(updatePreviewSpy).toHaveBeenCalled();
		expect(checkSegmentSpy).toHaveBeenCalled();
	});
	it('click should not draw the selection rectangle if the path should not close', () => {
		drawRectangleSpy = spyOn<any>(service, 'drawRectangle').and.callThrough();
		shouldClosePathSpy = spyOn<any>(service, 'shouldClosePath').and.callFake(() => false);
		checkSegmentSpy = spyOn<any>(service, 'checkLastSegment').and.callThrough();
		service['click'](mouseEvent);
		expect(drawRectangleSpy).not.toHaveBeenCalled();
		expect(updatePreviewSpy).toHaveBeenCalled();
		expect(checkSegmentSpy).toHaveBeenCalled();
	});
	it('click should set close to true if the path should close and the last segment is valid', () => {
		service['closed'] = false;

		drawRectangleSpy = spyOn<any>(service, 'drawRectangle').and.callFake(() => true);
		shouldClosePathSpy = spyOn<any>(service, 'shouldClosePath').and.callFake(() => true);
		checkSegmentSpy = spyOn<any>(service, 'checkLastSegment').and.callFake(() => false);
		service['click'](mouseEvent);

		expect(service['closed']).toEqual(true);
	});

	it('drawRectangle should update the deltas and minimums', () => {
		service['pathData'] = [
			{
				x: 0,
				y: 2,
			},
			{
				x: 5,
				y: 5,
			},
			{
				x: 10,
				y: 5,
			},
			{
				x: 5,
				y: 10,
			},
		];

		service['drawRectangle']();
		// tslint:disable:no-magic-numbers
		expect(service['minX']).toEqual(0);
		expect(service['minY']).toEqual(2);
		expect(service['deltaY']).toEqual(8);
		expect(service['deltaX']).toEqual(10);
	});

	it('checkLastSegment should be true if there are crossing segments', () => {
		service['pathData'] = [
			{
				x: 0,
				y: 0,
			},
			{
				x: 5,
				y: 5,
			},
			{
				x: 0,
				y: 5,
			},
			{
				x: 5,
				y: 0,
			},
			{
				x: 0,
				y: 5,
			},
		];

		expect(service['checkLastSegment']()).toEqual(true);
	});

	it('checkLastSegment should be false if there are no crossing segments', () => {
		service['pathData'] = [
			{
				x: 0,
				y: 0,
			},
			{
				x: 5,
				y: 5,
			},
			{
				x: 0,
				y: 5,
			},
			{
				x: 0,
				y: 10,
			},
			{
				x: 0,
				y: 20,
			},
		];

		expect(service['checkLastSegment']()).toEqual(false);
	});

	it('checkLastSegment should be false the path data length is lesser than 2', () => {
		service['pathData'] = [{ x: 0, y: 0 }];

		expect(service['checkLastSegment']()).toEqual(false);
	});

	it('calculateDeterminants should be false if there are no crossing segments', () => {
		const segment1 = [
			{ x: 0, y: 0 },
			{
				x: 5,
				y: 5,
			},
		];

		const segment2 = [
			{
				x: 0,
				y: 5,
			},
			{
				x: 0,
				y: 10,
			},
		];

		expect(service['calculateDeterminant'](segment1, segment2)).toEqual(false);
	});

	it('checkLastSegment should check shouldClosePath if the pathData length is 3 and delete the last segment if it returns true', () => {
		shouldClosePathSpy = spyOn<any>(service, 'shouldClosePath').and.callFake(() => true);

		service['pathData'] = [
			{ x: 0, y: 0 },
			{ x: 5, y: 5 },
			{ x: 0, y: 5 },
		];
		service['checkLastSegment']();
		expect(shouldClosePathSpy).toHaveBeenCalled();
		expect(deleteLastSegmentSpy).toHaveBeenCalled();
	});
	it('checkLastSegment should check shouldClosePath if the pathData length is 3 and return false if it returns false', () => {
		shouldClosePathSpy = spyOn<any>(service, 'shouldClosePath').and.callFake(() => false);
		service['pathData'] = [
			{ x: 0, y: 0 },
			{ x: 5, y: 5 },
			{ x: 0, y: 5 },
		];
		expect(service['checkLastSegment']()).toEqual(false);
	});
	it('drawLine should update the tip position', () => {
		service['drawLine'](baseCtxStub, service['pathData'], Global.TEST_VECTOR);

		expect(updateTipSpy).toHaveBeenCalled();
	});
	it('drawLine should not update the tip position if pathData is empty', () => {
		service['pathData'] = [];

		service['drawLine'](baseCtxStub, service['pathData'], Global.TEST_VECTOR);

		expect(updateTipSpy).not.toHaveBeenCalled();
	});
});
