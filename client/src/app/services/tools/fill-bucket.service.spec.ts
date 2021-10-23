import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseButton, MouseEnum, RGB } from '@app/shared/global';
import { FillService } from './fill-bucket.service';

describe('SceauPeintureService', () => {
	let service: FillService;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let acceptedColorSpy: jasmine.Spy;
	let getRGBASpy: jasmine.Spy;
	let resetVisitedMatrixSpy: jasmine.Spy;
	let isValidSpy: jasmine.Spy;
	let getToleranceSpy: jasmine.Spy;
	let canvasTestHelper: CanvasTestHelper;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	const fakeCopy = {} as {
		ctx: CanvasRenderingContext2D;
		startingPoint: Vec2;
		baseColor: Uint8ClampedArray;
		fillPoints: Vec2[];
		visitedMatrix: boolean[][];
		imageData: ImageData;
		replacementColor: Uint8ClampedArray;
	};

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction', 'getCanvasDimensions'], ['canvasSize', 'baseCtx']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		// tslint:disable:no-string-literal
		// tslint:disable:no-empty
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		service = TestBed.inject(FillService);

		// Configuration du spy du service
		baseCtxStub.canvas.width = Global.SIZE_OF_DATA;
		baseCtxStub.canvas.height = Global.SIZE_OF_DATA;

		// tslint:disable:no-any
		acceptedColorSpy = spyOn<any>(service, 'acceptedColor').and.callThrough();
		getRGBASpy = spyOn<any>(service, 'getRGBA').and.callThrough();
		isValidSpy = spyOn<any>(service, 'isValid').and.callThrough();
		getToleranceSpy = spyOn<any>(service, 'getTolerance').and.callThrough();
		resetVisitedMatrixSpy = spyOn<any>(service, 'resetVisitedMatrix').and.callThrough();
		service['drawingService'].baseCtx = baseCtxStub; // Jasmine doesnt copy properties with underlying data
		service['drawingService'].previewCtx = previewCtxStub;

		drawServiceSpy.getCanvasDimensions.and.returnValue({ x: Global.DEFAULT_CANVAS_SIZE, y: Global.DEFAULT_CANVAS_SIZE });
		service['replacementColor'] = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		service['replacementColor'].fill(Global.MAX_HEX_VALUE);
		service['baseColor'] = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		service['baseColor'].fill(0);
		service['startingPoint'] = { x: 0, y: 0 };
		service['imageData'] = baseCtxStub.getImageData(0, 0, baseCtxStub.canvas.width, baseCtxStub.canvas.height);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should reset matrix', () => {
		service['visitedMatrix'] = new Array(baseCtxStub.canvas.width).fill(true).map(() => new Array(baseCtxStub.canvas.height).fill(true));
		service['visitedMatrix'] = service['resetVisitedMatrix'](service['visitedMatrix']);
		expect(service['visitedMatrix'].some((row) => row.includes(true))).toBeFalsy();
		spyOn(service, 'getCanvasSize').and.returnValue({ x: baseCtxStub.canvas.width, y: baseCtxStub.canvas.height });
		const visitedMatrix = new Array(baseCtxStub.canvas.width).fill(true).map(() => new Array(baseCtxStub.canvas.height).fill(true));
		service['resetVisitedMatrix'](visitedMatrix);
		expect(visitedMatrix.some((row) => row.includes(true))).toBeFalsy();
	});
	it('should return a deep copy of the instance', () => {
		service['visitedMatrix'] = new Array(baseCtxStub.canvas.width).fill(false).map(() => new Array(baseCtxStub.canvas.height).fill(false));
		service['fillPoints'] = [];
		const copy = service['deepCopyInstance'](baseCtxStub);
		expect(copy.ctx).toEqual(baseCtxStub);
		expect(copy.startingPoint).toEqual(service['startingPoint']);
		expect(copy.baseColor).toEqual(service['baseColor']);
		expect(copy.fillPoints).toEqual(service['fillPoints']);
		expect(copy.visitedMatrix).toEqual(service['visitedMatrix']);
		expect(deepImageDataEqual(copy.imageData, service['imageData'], true)).toEqual(true);
		expect(copy.replacementColor).toEqual(service['replacementColor']);
	});

	it('should call lefclick wrapper', () => {
		const event: MouseEvent = new MouseEvent('mouseup', {
			button: MouseButton.Left,
		});
		spyOn<any>(service, 'deepCopyInstance').and.returnValue(fakeCopy);
		spyOn<any>(service, 'leftClickMode').and.callFake(() => {});
		service['handleClick'](event);
		expect(service['leftClickMode']).toHaveBeenCalled();
	});
	it('should call rightclick wrapper', () => {
		const event: MouseEvent = new MouseEvent('mouseup', {
			button: MouseButton.Right,
		});
		spyOn<any>(service, 'deepCopyInstance').and.returnValue(fakeCopy);
		spyOn<any>(service, 'rightClickMode').and.callFake(() => {});
		service['handleClick'](event);
		expect(service['rightClickMode']).toHaveBeenCalled();
	});
	it('should not call any method mode', () => {
		const event: MouseEvent = new MouseEvent('mouseup', {
			button: MouseButton.Back,
		});
		spyOn<any>(service, 'leftClickMode').and.callFake(() => {});
		spyOn<any>(service, 'rightClickMode').and.callFake(() => {});
		service['handleClick'](event);
		expect(service['rightClickMode']).not.toHaveBeenCalled();
		expect(service['leftClickMode']).not.toHaveBeenCalled();
	});
	it('should call replace all colors', () => {
		spyOn<any>(service, 'replaceAllColor').and.callFake(() => {});
		service['rightClickMode']({} as ImageData, {} as Uint8ClampedArray, new Uint8ClampedArray());
		expect(service['replaceAllColor']).toHaveBeenCalled();
	});
	it('should call get region, paintbucket, resetMatrix', () => {
		spyOn<any>(service, 'getRegionPoints').and.callFake(() => {});
		spyOn<any>(service, 'paintBucketFill').and.callFake(() => {});
		resetVisitedMatrixSpy.and.callFake(() => {});
		service['leftClickMode'](
			baseCtxStub,
			{} as Vec2,
			{} as Uint8ClampedArray,
			{} as Vec2[],
			{} as boolean[][],
			{} as ImageData,
			{} as Uint8ClampedArray,
		);
		expect(service['getRegionPoints']).toHaveBeenCalled();
		expect(service['paintBucketFill']).toHaveBeenCalled();
		expect(resetVisitedMatrixSpy).toHaveBeenCalled();
	});
	it('should call handleClick, resetMatrix and set starting point, fillpoint and baseColor', () => {
		spyOn<any>(service, 'handleClick').and.callFake(() => {});
		spyOn<any>(service, 'paintBucketFill').and.callFake(() => {});
		resetVisitedMatrixSpy.and.callFake(() => {});
		spyOn<any>(service, 'getIndex').and.returnValue(0);
		spyOn<any>(service, 'hexToRGB').and.returnValue(new Uint8ClampedArray(Global.SIZE_OF_DATA));
		spyOn<any>(service, 'getImageData').and.callFake(() => {
			return new ImageData(Global.DEFAULT_CANVAS_SIZE, Global.DEFAULT_CANVAS_SIZE);
		});
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service['handleClick']).toHaveBeenCalled();
		expect(resetVisitedMatrixSpy).toHaveBeenCalled();
		expect(service['startingPoint']).toEqual(service.getPagePositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
	});
	it('should get data index', () => {
		expect(service['getIndex'](Global.DUMMY_PATH[0])).toEqual(0);
	});

	it('should return default canvas size', () => {
		drawServiceSpy.getCanvasDimensions.and.returnValue({ x: NaN, y: NaN } as Vec2);
		expect(service.getCanvasSize()).toEqual({ x: Global.DEFAULT_CANVAS_SIZE, y: Global.DEFAULT_CANVAS_SIZE });
	});

	it('should call replace color and put imagedata', () => {
		acceptedColorSpy.and.returnValue(true);
		spyOn<any>(service, 'replaceColor').and.callFake(() => {});
		spyOn<any>(service, 'putImageData').and.callFake(() => {});
		service['replaceAllColor'](
			new ImageData(Global.DEFAULT_CANVAS_SIZE, Global.DEFAULT_CANVAS_SIZE),
			new Uint8ClampedArray(),
			new Uint8ClampedArray(),
		);
		expect(service['replaceColor']).toHaveBeenCalled();
		expect(service['putImageData']).toHaveBeenCalled();
	});
	it('should not call replace color', () => {
		acceptedColorSpy.and.returnValue(false);
		spyOn<any>(service, 'replaceColor').and.callFake(() => {});
		spyOn<any>(service, 'putImageData').and.callFake(() => {});
		service['replaceAllColor'](
			new ImageData(Global.DEFAULT_CANVAS_SIZE, Global.DEFAULT_CANVAS_SIZE),
			new Uint8ClampedArray(),
			new Uint8ClampedArray(),
		);
		expect(service['replaceColor']).not.toHaveBeenCalled();
		expect(service['putImageData']).toHaveBeenCalled();
	});

	it('should replace color', () => {
		const imageData = new ImageData(Global.DEFAULT_CANVAS_SIZE, Global.DEFAULT_CANVAS_SIZE);
		service['imageData'] = imageData;
		const color = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		color[RGB.R] = Global.RANDOM_COLOR.R;
		color[RGB.G] = Global.RANDOM_COLOR.G;
		color[RGB.B] = Global.RANDOM_COLOR.B;
		color[RGB.A] = Global.RANDOM_COLOR.A;
		service['replaceColor'](0, color);
		expect(equals(service['imageData'].data, color)).toBeTruthy();
	});

	it('should return rgb equivalence of 8 char hex code', () => {
		const hex = '#FFBBCCFF';
		const expectedData = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		expectedData[RGB.R] = Global.RANDOM_COLOR.R;
		expectedData[RGB.G] = Global.RANDOM_COLOR.G;
		expectedData[RGB.B] = Global.RANDOM_COLOR.B;
		expectedData[RGB.A] = Global.RANDOM_COLOR.A;
		expect(service['hexToRGB'](hex)).toEqual(expectedData);
	});
	it('should return if color is accepted', () => {
		getToleranceSpy.and.returnValue(Global.DUMMY_TOLERANCE);
		service.options.bucketOptions.tolerance = Global.DUMMY_TOLERANCE;
		expect(service['acceptedColor'](new Uint8ClampedArray(), new Uint8ClampedArray())).toBeTruthy();
	});

	it('should return difference percentage between two colors', () => {
		const color1 = service['hexToRGB']('#FFFFFFFF');
		const color2 = service['hexToRGB']('#00000000');
		getToleranceSpy.and.callThrough();
		expect(getToleranceSpy(color1, color2)).toEqual(Global.PERCENTAGE_CONST);
	});

	it('should call putimagedata and replace color', () => {
		spyOn<any>(service, 'replaceColor').and.callFake(() => {});
		spyOn<any>(service, 'putImageData').and.callFake(() => {});
		service['fillPoints'].push({ x: 0, y: 0 });
		service['paintBucketFill'](baseCtxStub, {} as ImageData, {} as Uint8ClampedArray, service['fillPoints']);
		expect(service['putImageData']).toHaveBeenCalled();
		expect(service['replaceColor']).toHaveBeenCalled();
	});

	it('should copy imageData', () => {
		const imageData: ImageData = new ImageData(baseCtxStub.canvas.width, baseCtxStub.canvas.height);
		imageData.data.fill(Global.MAX_HEX_VALUE);
		const copy = service['copyImageData'](baseCtxStub, imageData);
		expect(deepImageDataEqual(imageData, copy)).toEqual(true);
	});
	it('should return if point is valid', () => {
		const point = { x: 1, y: 1 };
		acceptedColorSpy.and.returnValue(true);
		getRGBASpy.and.callFake(() => {});
		expect(service['isValid'](point, {} as ImageData, new Uint8ClampedArray())).toBeTruthy();
	});

	it('should return imagedata', () => {
		expect(service['getImageData'](baseCtxStub, { x: 0, y: 0 })).toEqual(
			baseCtxStub.getImageData(0, 0, baseCtxStub.canvas.width, baseCtxStub.canvas.height),
		);
	});
	it('should put imageData', () => {
		const expectedData = new Uint8ClampedArray(Global.SIZE_OF_DATA);
		expectedData.fill(Global.MAX_HEX_VALUE);
		const imageData = new ImageData(1, 1);
		service['imageData'] = imageData;
		const newImageData = new ImageData(1, 1);
		newImageData.data[RGB.R] = expectedData[RGB.R];
		newImageData.data[RGB.G] = expectedData[RGB.G];
		newImageData.data[RGB.B] = expectedData[RGB.B];
		newImageData.data[RGB.A] = expectedData[RGB.A];
		service['putImageData'](baseCtxStub, newImageData);
		expect(baseCtxStub.getImageData(0, 0, 1, 1)).toEqual(newImageData);
	});

	it('should add points to fillpoints', () => {
		const testVec: Vec2[] = [{ x: 0, y: 0 }];
		let visitedVec: boolean[][] = [];
		visitedVec = new Array(baseCtxStub.canvas.width).fill(false).map(() => new Array(baseCtxStub.canvas.height).fill(false));
		acceptedColorSpy.and.returnValue(true);
		getRGBASpy.and.callFake(() => {});
		service['row'] = [];
		service['getRegionPoints'](
			{ x: 100000, y: 1000000 },
			new Uint8ClampedArray(),
			testVec,
			visitedVec,
			baseCtxStub,
			new ImageData(baseCtxStub.canvas.width, baseCtxStub.canvas.height),
		);
		expect(acceptedColorSpy).not.toHaveBeenCalled();
		service['getRegionPoints'](
			Global.DEFAULT_VECTOR,
			new Uint8ClampedArray(),
			testVec,
			visitedVec,
			baseCtxStub,
			new ImageData(baseCtxStub.canvas.width, baseCtxStub.canvas.height),
		);
		expect(testVec.length).toEqual(1);
		expect(isValidSpy).not.toHaveBeenCalled();
	});
	it('should markdown visited pixels', () => {
		const testVec: Vec2[] = [];
		let visitedVec: boolean[][] = [];
		visitedVec = new Array(baseCtxStub.canvas.width).fill(false).map(() => new Array(baseCtxStub.canvas.height).fill(false));
		acceptedColorSpy.and.returnValue(true);
		getRGBASpy.and.callFake(() => {});
		spyOn(service, 'getCanvasSize').and.returnValue({ x: baseCtxStub.canvas.width, y: baseCtxStub.canvas.height });
		service['getRegionPoints'](
			Global.DEFAULT_VECTOR,
			new Uint8ClampedArray(),
			testVec,
			visitedVec,
			baseCtxStub,
			new ImageData(baseCtxStub.canvas.width, baseCtxStub.canvas.height),
		);
		expect(testVec.length).toBeGreaterThan(0);
		expect(areAllTrue(visitedVec)).toEqual(true);
		expect(isValidSpy).toHaveBeenCalled();
	});

	const equals = (base: Uint8ClampedArray, target: Uint8ClampedArray) => {
		return base[RGB.R] === target[RGB.R] && base[RGB.G] === target[RGB.G] && base[RGB.B] === target[RGB.B] && base[RGB.A] === target[RGB.A];
	};
	const deepImageDataEqual = (src: ImageData, target: ImageData, check?: boolean): boolean => {
		if (src.height !== target.height || src.width !== target.width || src.data.length !== target.data.length) return false;
		for (let i = 0; i < src.data.length; i++) {
			if (src.data[i] !== target.data[i]) return false;
		}
		return true;
	};

	const areAllTrue = (array: boolean[][]) => {
		for (const a of array) {
			for (const b of a) {
				if (!b) return false;
			}
		}
		return true;
	};
});
