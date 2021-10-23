import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Global } from '@app/shared/global';
import { EllipseSelectionService } from './ellipse-selection.service';
import { RectangleSelectionService } from './rectangle-selection.service';
import { ResizeSelectionService } from './resize-selection.service';

// tslint:disable:no-string-literal
describe('ResizeSelectionService', () => {
	let service: ResizeSelectionService;
	let canvasTestHelper: CanvasTestHelper;
	let rectangleSelectionServiceSpy: jasmine.SpyObj<RectangleSelectionService>;
	let ellipseSelectionServiceSpy: jasmine.SpyObj<EllipseSelectionService>;
	let baseCtxStub: CanvasRenderingContext2D;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ResizeSelectionService);
		rectangleSelectionServiceSpy = jasmine.createSpyObj(
			'RectangleSelectionService',
			['redrawSelection', 'selectRectangle', 'callPlaceBox'],
			[''],
		);
		ellipseSelectionServiceSpy = jasmine.createSpyObj('EllipseSelectionService', ['drawCircle'], ['']);
		canvasTestHelper = TestBed.inject(CanvasTestHelper);

		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		baseCtxStub.canvas.width = Global.DEFAULT_CANVAS_SIZE;
		baseCtxStub.canvas.height = Global.DEFAULT_CANVAS_SIZE;

		spyOn(baseCtxStub, 'ellipse').and.callThrough();

		service['drawingService'].baseCtx = baseCtxStub;

		// tslint:disable-next-line: no-any
		spyOn<any>(service, 'updateCanvas').and.callThrough();

		rectangleSelectionServiceSpy.selection = new ImageData(1, 1);
		rectangleSelectionServiceSpy.origin = Global.TEST_VECTOR;
		service.selector = rectangleSelectionServiceSpy;
		service.isFirstResize = false;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('endSelection should call update canvas and place box', () => {
		service.endSelection();
		expect(service['updateCanvas']).toHaveBeenCalled();
		expect(rectangleSelectionServiceSpy.callPlaceBox).toHaveBeenCalled();
	});

	it('resize should call update canvas ', () => {
		service.resize({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, '');
		expect(service['updateCanvas']).toHaveBeenCalled();
	});

	it('resize should set mode to 0 and save position at first resize ', () => {
		service.isFirstResize = true;
		const sign = { x: 1, y: 1 };
		const newSize = { x: 0, y: 0 };
		service.resize(newSize, { x: 0, y: 0 }, sign, '');
		expect(service['updateCanvas']).toHaveBeenCalledWith(0, { x: 0, y: 0 }, newSize);
		expect(service['initBoxPosition']).toEqual(service.selector.origin);
		expect(service.isFirstResize).toEqual(false);
	});

	it('resize should only invert the signs with w/n tag', () => {
		const sign = { x: 1, y: 1 };
		const newSize = { x: 0, y: 0 };
		service.resize(newSize, { x: 0, y: 0 }, sign, 'se');
		expect(service['updateCanvas']).toHaveBeenCalledWith(
			1,
			{ x: 0, y: 0 },
			{ x: Math.sign(sign.x) * newSize.x, y: Math.sign(sign.y) * newSize.y },
		);
		service.resize(newSize, { x: 0, y: 0 }, sign, 'nw');
		expect(service['updateCanvas']).toHaveBeenCalledWith(
			1,
			{ x: 0, y: 0 },
			{ x: Math.sign(-sign.x) * newSize.x, y: Math.sign(-sign.y) * newSize.y },
		);
	});

	it('updateCanvas should call redrawSelection', () => {
		service['updateCanvas'](0, { x: 0, y: 0 }, { x: 1, y: 1 });
		expect(rectangleSelectionServiceSpy.redrawSelection).toHaveBeenCalled();
	});

	it('updateCanvas should change siz to 1 if newSize is 0', () => {
		service['updateCanvas'](0, { x: 0, y: 0 }, { x: 0, y: 0 });
		expect(service['size'].x).toEqual(1);
		expect(service['size'].y).toEqual(1);
	});

	it(' clearMethod should clear with ellipse if tool is ellipseSelection', () => {
		service.selector = ellipseSelectionServiceSpy;
		service['clearMethod'](service, Global.DEFAULT_VECTOR, Global.DEFAULT_VECTOR);
		expect(baseCtxStub.ellipse).toHaveBeenCalled();
	});

	it(' clearMethod should not clear with ellipse if tool is not ellipseSelection', () => {
		service['clearMethod'](service, Global.DEFAULT_VECTOR, Global.DEFAULT_VECTOR);
		expect(baseCtxStub.ellipse).not.toHaveBeenCalled();
	});

	it(' minLimitResize should set position to 0 if negative and cancel resize', () => {
		service['size'] = { x: 50, y: 50 };
		const oldSize = { x: 10, y: 10 };
		const position = service['minLimitResize']({ x: -5, y: -5 }, oldSize);
		expect(position).toEqual({ x: 0, y: 0 });
		expect(service['size']).toEqual(oldSize);
	});

	it(' minLimitResize not should set position to 0 if not negative', () => {
		service['size'] = { x: 50, y: 50 };
		const oldSize = { x: 10, y: 10 };
		const position = service['minLimitResize'](oldSize, oldSize);
		expect(position).toEqual(oldSize);
		expect(service['size']).not.toEqual(oldSize);
	});
});
