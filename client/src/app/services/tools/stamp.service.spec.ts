import { TestBed } from '@angular/core/testing';
import { Vec2 } from '@app/classes/vec2';
import { MouseButton } from '@app/shared/global';
import { DrawingService } from 'src/app/services/drawing/drawing.service';
import { StampService } from './stamp.service';

describe('StampService', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	let service: StampService;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;

	beforeEach(() => {
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);
		TestBed.configureTestingModule({ providers: [{ provide: DrawingService, useValue: drawingServiceSpy }] });
		service = TestBed.inject(StampService);

		drawingServiceSpy.positionX = 0;
		drawingServiceSpy.baseCtx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		drawingServiceSpy.previewCtx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		drawingServiceSpy.canvasSize = { x: 400, y: 400 } as Vec2;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should not call drawImage or getImageInfo', () => {
		spyOn<any>(service, 'getImageInfo').and.callFake(() => {
			return;
		});
		spyOn<any>(service, 'drawImage').and.callFake(() => {
			return;
		});
		const event = { pageX: 500, pageY: 500 } as MouseEvent;
		service.onMouseMove(event);
		expect(service['getImageInfo']).not.toHaveBeenCalled();
		expect(service['drawImage']).not.toHaveBeenCalled();
	});

	it('should call drawImage and getImageInfo', () => {
		const stampCopy = new Image();
		stampCopy.src = service.options.stampOptions.stampSrc;
		spyOn<any>(service, 'getImageInfo').and.returnValue([stampCopy, { x: 0, y: 0 } as Vec2]);
		spyOn<any>(service, 'drawImage').and.callFake(() => {
			return;
		});
		const event = { pageX: 300, pageY: 300 } as MouseEvent;
		service.onMouseMove(event);
		expect(service['getImageInfo']).toHaveBeenCalled();
		expect(service['drawImage']).toHaveBeenCalled();
	});

	it('should not call clearCanvas, getImageInfo and drawImage', () => {
		spyOn<any>(service, 'getImageInfo').and.callFake(() => {
			return;
		});
		spyOn<any>(service, 'drawImage').and.callFake(() => {
			return;
		});
		const mouseEvent: MouseEvent = { button: MouseButton.Right } as MouseEvent;
		service.onMouseDown(mouseEvent);
		expect(drawingServiceSpy.clearCanvas).not.toHaveBeenCalled();
		expect(service['getImageInfo']).not.toHaveBeenCalled();
		expect(service['drawImage']).not.toHaveBeenCalled();
	});

	it('should call clearCanvas, getImageInfo, drawImage and addAction', () => {
		const stampCopy = new Image();
		stampCopy.src = service.options.stampOptions.stampSrc;
		spyOn<any>(service, 'getImageInfo').and.returnValue([stampCopy, { x: 0, y: 0 } as Vec2]);
		spyOn<any>(service, 'drawImage').and.callFake(() => {
			return;
		});
		const mouseEvent: MouseEvent = { pageX: 200, pageY: 200, button: MouseButton.Left } as MouseEvent;
		service.onMouseDown(mouseEvent);
		expect(drawingServiceSpy.clearCanvas).toHaveBeenCalled();
		expect(service['getImageInfo']).toHaveBeenCalled();
		expect(service['drawImage']).toHaveBeenCalled();
		expect(drawingServiceSpy.addAction).toHaveBeenCalled();
	});

	it('should add 15 to the orientation', () => {
		spyOn<any>(service, 'onMouseMove').and.callFake(() => {
			return;
		});
		const event = { deltaY: -70 } as WheelEvent;
		const previousOrientation = service.options.stampOptions.orientation;
		service.onWheel(event);
		expect(service.options.stampOptions.orientation).toEqual(previousOrientation + service['DEFAULT_ORIENTATION_INCREMENT']);
		expect(service['onMouseMove']).toHaveBeenCalled();
	});

	it('should set orientation to 0', () => {
		spyOn<any>(service, 'onMouseMove').and.callFake(() => {
			return;
		});
		const event = { deltaY: 70 } as WheelEvent;
		service.options.stampOptions.orientation = 2;
		service.onWheel(event);
		expect(service.options.stampOptions.orientation).toEqual(0);
		expect(service['onMouseMove']).toHaveBeenCalled();
	});

	it('should set orientation to 360', () => {
		spyOn<any>(service, 'onMouseMove').and.callFake(() => {
			return;
		});
		const event = { deltaY: -70, altKey: true } as WheelEvent;
		service.options.stampOptions.orientation = service['MAX_ORIENTATION'];
		service.onWheel(event);
		expect(service.options.stampOptions.orientation).toEqual(service['MAX_ORIENTATION']);
		expect(service['onMouseMove']).not.toHaveBeenCalled();
	});

	it('should return image twice the size', () => {
		service.options.stampOptions.scalingFactor = 2;
		const stampCopy = new Image();
		stampCopy.src = service.options.stampOptions.stampSrc;
		const [image, size] = service['getImageInfo']();
		expect(image).toEqual(stampCopy);
		expect(size).toEqual({
			x: stampCopy.width * service.options.stampOptions.scalingFactor,
			y: stampCopy.height * service.options.stampOptions.scalingFactor,
		});
	});

	it('should call translate, rotate and drawImage on canvas', () => {
		spyOn(drawingServiceSpy.previewCtx, 'translate');
		spyOn(drawingServiceSpy.previewCtx, 'rotate');
		spyOn(drawingServiceSpy.previewCtx, 'drawImage');
		const stampCopy = new Image();
		stampCopy.src = service.options.stampOptions.stampSrc;
		service['drawImage'](
			drawingServiceSpy.previewCtx,
			stampCopy,
			{ x: 100, y: 100 },
			{ x: 100, y: 100 },
			service.options.stampOptions.orientation,
		);
		expect(drawingServiceSpy.previewCtx.translate).toHaveBeenCalled();
		expect(drawingServiceSpy.previewCtx.rotate).toHaveBeenCalled();
		expect(drawingServiceSpy.previewCtx.drawImage).toHaveBeenCalled();
	});
});
