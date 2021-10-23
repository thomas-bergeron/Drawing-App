import { TestBed } from '@angular/core/testing';
import { Vec2 } from '@app/classes/vec2';
import { Global, MouseEnum } from '@app/shared/global';
import { DrawingService } from 'src/app/services/drawing/drawing.service';
import { EyeDropperService } from './eye-dropper.service';

describe('EyeDropperService', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	let service: EyeDropperService;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;

	beforeEach(() => {
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['changeColor', 'clearCanvas', 'RGBToHex']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawingServiceSpy }],
		});
		service = TestBed.inject(EyeDropperService);

		drawingServiceSpy.baseCtx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		drawingServiceSpy.previewCtx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		drawingServiceSpy.canvasSize = { x: 400, y: 400 } as Vec2;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should change primary color', () => {
		const imageData: ImageData = new ImageData(new Uint8ClampedArray([Global.MAX_HEX_VALUE, 0, 0, Global.MAX_HEX_VALUE]), 1, 1);
		const color = '#FF0000FF';

		spyOn(drawingServiceSpy.baseCtx, 'getImageData').and.returnValue(imageData);
		drawingServiceSpy.RGBToHex.and.returnValue(color);

		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT];
		service.onMouseDown(mouseEvent);

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(color, true, true);
	});

	it('should change secondary color', () => {
		const imageData: ImageData = new ImageData(new Uint8ClampedArray([Global.MAX_HEX_VALUE, 0, 0, Global.MAX_HEX_VALUE]), 1, 1);
		const color = '#FF0000FF';

		spyOn(drawingServiceSpy.baseCtx, 'getImageData').and.returnValue(imageData);
		drawingServiceSpy.RGBToHex.and.returnValue(color);

		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK];
		service.onMouseDown(mouseEvent);

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(color, false, true);
	});

	it('should call drawZoom and drawCursor', () => {
		spyOn<any>(service, 'drawZoom');
		spyOn<any>(service, 'drawCursor');
		spyOn(service, 'getPagePositionFromMouse').and.returnValue({ x: 10, y: 15 } as Vec2);
		spyOn(document, 'getElementById').and.returnValue(document.createElement('canvas'));

		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20];
		service.onMouseMove(mouseEvent);

		expect(service['drawZoom']).toHaveBeenCalled();
		expect(service['drawCursor']).toHaveBeenCalled();
	});

	it('should not call drawZoom and drawCursor', () => {
		spyOn<any>(service, 'drawZoom');
		spyOn<any>(service, 'drawCursor');
		spyOn(service, 'getPagePositionFromMouse').and.returnValue({ x: 450, y: 450 } as Vec2);
		spyOn(document, 'getElementById').and.returnValue(document.createElement('canvas'));

		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20];
		service.onMouseMove(mouseEvent);

		expect(service['drawZoom']).not.toHaveBeenCalled();
		expect(service['drawCursor']).not.toHaveBeenCalled();
	});

	it('should use drawImage', () => {
		const ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		ctx.canvas.width = Global.DEFAULT_CANVAS_SIZE;
		const position: Vec2 = { x: 25, y: 25 };

		spyOn(drawingServiceSpy.previewCtx, 'drawImage');
		spyOn(ctx, 'drawImage');
		spyOn(ctx, 'strokeRect');

		service['drawZoom'](ctx, position);

		expect(drawingServiceSpy.previewCtx.drawImage).toHaveBeenCalled();
		expect(ctx.drawImage).toHaveBeenCalled();
		expect(ctx.strokeRect).toHaveBeenCalled();
	});

	it('should drawImage on given canvas', () => {
		const position: Vec2 = { x: 25, y: 25 };

		spyOn(drawingServiceSpy.previewCtx, 'drawImage');

		service['drawCursor'](drawingServiceSpy.previewCtx, position);

		expect(drawingServiceSpy.previewCtx.drawImage).toHaveBeenCalled();
	});
});
