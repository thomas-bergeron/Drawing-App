import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { ShapeOptions } from '@app/classes/shape-options';
import { ToolOption } from '@app/classes/tool-option';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, MouseEnum } from '@app/shared/global';
import { RectangleService } from './rectangle.service';

// tslint:disable:no-any
// tslint:disable:no-magic-numbers
describe('RectangleService', () => {
	let service: RectangleService;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);
		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
		service = TestBed.inject(RectangleService);
		spyOn(service, 'updatePreview').and.callThrough();
		spyOn(service, 'updateBase').and.callThrough();
		spyOn(service, 'drawRectangle').and.callThrough();
		spyOn(service, 'drawSquare').and.callThrough();
		spyOn(previewCtxStub, 'stroke').and.callThrough();
		spyOn(previewCtxStub, 'fill').and.callThrough();
		spyOn(previewCtxStub, 'strokeRect').and.callThrough();
		spyOn(previewCtxStub, 'fillRect').and.callThrough();
		spyOn(service, 'getFillPoints').and.callThrough();
		// Configuration du spy du service
		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub; // Jasmine doesnt copy properties with underlying data
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].primaryColor = 'black';
		service['drawingService'].primaryColor = 'red';
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;
		service['target'] = { x: 25, y: 25 } as Vec2;
		service['origin'] = { x: 25, y: 25 } as Vec2;
	});
	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it(' updatePreview should call drawSquare if shift is down', () => {
		service.shiftDown = true;
		service.updatePreview();
		expect(service.drawSquare).toHaveBeenCalled();
	});
	it(' updatePreview should not call drawRectangle if shift is down', () => {
		service.shiftDown = true;
		service.updatePreview();
		expect(service.drawRectangle).not.toHaveBeenCalled();
	});
	it(' updatePreview should call drawRectangle if shift is up', () => {
		service.shiftDown = false;
		service.updatePreview();
		expect(service.drawRectangle).toHaveBeenCalled();
	});
	it(' updatePreview should not call drawSquare if shift is up', () => {
		service.shiftDown = false;
		service.updatePreview();
		expect(service.drawSquare).not.toHaveBeenCalled();
	});
	it('should return center coord', () => {
		let origin: Vec2 = { x: 0, y: 0 };
		let target: Vec2 = { x: 10, y: 10 };
		const expected: Vec2 = { x: 5, y: 5 };
		expect(service.getRectangleCenterCoord(origin, target)).toEqual(expected);
		origin = { x: 10, y: 10 };
		target = { x: 0, y: 0 };
		expect(service.getRectangleCenterCoord(origin, target)).toEqual(expected);
	});
	it('should return updated fill points', () => {
		let origin: Vec2 = { x: 0, y: 0 };
		let target: Vec2 = { x: 10, y: 10 };
		const options: ToolOption = new ToolOption(undefined, undefined, undefined, 1);
		const expectedOrigin: Vec2 = { x: 0.5, y: 0.5 };
		const expectedTarget: Vec2 = { x: 9.5, y: 9.5 };
		expect(service.getFillPoints(origin, target, options)).toEqual([expectedOrigin, expectedTarget]);
		const tmp: Vec2 = origin;
		origin = target;
		target = tmp;
		expect(service.getFillPoints(origin, target, options)).toEqual([expectedTarget, expectedOrigin]);
	});
	it('should not call getfill', () => {
		const origin: Vec2 = { x: 0, y: 0 };
		const target: Vec2 = { x: 10, y: 10 };
		const options: ToolOption = new ToolOption(undefined, undefined, undefined, 1);
		const shapeOptions = new ShapeOptions(4);
		shapeOptions.fill = false;
		options.shapeOptions = shapeOptions;
		service.drawRectangle(previewCtxStub, origin, target, options, '#000000', '#000000');
		expect(service.getFillPoints).not.toHaveBeenCalled();
	});
	it('should call getfill', () => {
		const origin: Vec2 = { x: 0, y: 0 };
		const target: Vec2 = { x: 10, y: 10 };
		const options: ToolOption = new ToolOption(undefined, undefined, undefined, 1);
		const shapeOptions = new ShapeOptions(4);
		shapeOptions.fill = true;
		options.shapeOptions = shapeOptions;
		service.drawRectangle(previewCtxStub, origin, target, options, '#000000', '#000000');
		expect(service.getFillPoints).toHaveBeenCalled();
		expect(previewCtxStub.fillRect).toHaveBeenCalled();
	});

	it('should add action to stack', () => {
		service.shiftDown = true;
		service.updateBase();
		expect(drawServiceSpy.addAction).toHaveBeenCalled();
	});
	it('should add action to stack', () => {
		service.shiftDown = false;
		service.updateBase();
		expect(drawServiceSpy.addAction).toHaveBeenCalled();
	});
	it(' updateBase should call drawSquare if shift is down', () => {
		service.shiftDown = true;
		service.updateBase();
		expect(service.drawSquare).toHaveBeenCalled();
	});
	it(' updateBase should not call drawRectangle if shift is down', () => {
		service.shiftDown = true;
		service.updateBase();
		expect(service.drawRectangle).not.toHaveBeenCalled();
	});
	it(' updateBase should call drawRectangle if shift is up', () => {
		service.shiftDown = false;
		service.updateBase();
		expect(service.drawRectangle).toHaveBeenCalled();
	});
	it(' updateBase should not call drawSquare if shift is up', () => {
		service.shiftDown = false;
		service.updateBase();
		expect(service.drawSquare).not.toHaveBeenCalled();
	});
	it(' onMouseDown should set origin to correct position if isDrawing is true', () => {
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.isDrawing = true;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.origin).toEqual(expectedResult);
	});
	it(' onMouseDown should set target to correct position if isDrawing is true', () => {
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.isDrawing = true;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.target).toEqual(expectedResult);
	});
	it(' onMouseDown should set isDrawing property to true on left click', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(true);
	});
	it(' onMouseDown should not set origin to correct position if isDrawing is false', () => {
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseDown(Global.MOUSE_EVENTS[2]);
		service.isDrawing = false;
		expect(service.origin).not.toEqual(expectedResult);
	});
	it(' onMouseDown should not set target to correct position if isDrawing is false', () => {
		service.target = { x: 0, y: 0 } as Vec2;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK]);
		expect(service.target).not.toEqual(expectedResult);
	});
	it(' if the contour and fill properties are both set to false, onMouseDown should set contour to true', () => {
		service.options.shapeOptions.contour = false;
		service.options.shapeOptions.fill = false;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.options.shapeOptions.contour).toEqual(true);
	});
	it(' onMouseUp should set target to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };

		const event = Global.MOUSE_EVENTS[MouseEnum.PAGE_REF];
		event.preventDefault = () => {
			return;
		};
		service.onMouseUp(event);
		expect(service.target).toEqual(expectedResult);
	});
	it(' onMouseUp should set isDrawing property to false', () => {
		const event = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		event.preventDefault = () => {
			return;
		};
		service.onMouseUp(event);
		expect(service.isDrawing).toEqual(false);
	});
	it(' onMouseUp should set isDrawing property to false', () => {
		const event = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		event.preventDefault = () => {
			return;
		};
		service.onMouseUp(event);
		expect(service.isDrawing).toEqual(false);
	});
	it(' onMouseUp should call updateBase if isDrawing property is true', () => {
		service.isDrawing = true;
		const event = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		event.preventDefault = () => {
			return;
		};
		service.onMouseUp(event);

		expect(service.updateBase).toHaveBeenCalled();
	});
	it(' onMouseUp should set target to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		const event = Global.MOUSE_EVENTS[MouseEnum.PAGE_REF];
		event.preventDefault = () => {
			return;
		};
		service.onMouseUp(event);

		expect(service.target).toEqual(expectedResult);
	});
	it(' onMouseMove should call updatePreview() if the rectangle is being drawn', () => {
		service.isDrawing = true;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.updatePreview).toHaveBeenCalled();
	});
	it(' onMouseMove should  not call updatePreview() if the rectangle is not being drawn', () => {
		service.isDrawing = false;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.updatePreview).not.toHaveBeenCalled();
	});
	it(' drawRectangle should call strokeRect() if the contour property is true', () => {
		service.options.shapeOptions.contour = true;
		service.drawRectangle(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
	});

	it(' drawRectangle should call fillRect() if the fill property is true', () => {
		service.options.shapeOptions.fill = true;
		service.drawRectangle(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.fillRect).toHaveBeenCalled();
	});
	it(' drawRectangle should not call strokeRect() if the contour property is false', () => {
		service.options.shapeOptions.contour = false;
		service.drawRectangle(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.strokeRect).not.toHaveBeenCalled();
	});

	it(' drawRectangle should not call fillRect() if the fill property is false', () => {
		service.options.shapeOptions.fill = false;
		service.drawRectangle(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.fillRect).not.toHaveBeenCalled();
	});

	// Test drawSquare
	it(' drawSquare should call strokeRect() if the contour property is true', () => {
		service.options.shapeOptions.contour = true;
		service.drawSquare(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
	});

	it(' drawSquare should call fillRect() if the fill property is true', () => {
		service.options.shapeOptions.fill = true;
		service.drawSquare(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.fillRect).toHaveBeenCalled();
	});

	it(' drawSquare should not call strokeRect() if the contour property is false', () => {
		service.options.shapeOptions.contour = false;
		service.drawSquare(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.strokeRect).not.toHaveBeenCalled();
	});

	it(' drawSquare should not call fillRect() if the fill property is false', () => {
		service.options.shapeOptions.fill = false;
		service.drawSquare(previewCtxStub, service.origin, service.target, service.options, '#000000', '#EEEEEE');
		expect(previewCtxStub.fillRect).not.toHaveBeenCalled();
	});

	// Test handleCommand
	it('handleCommand should set shiftDown to false is the drawing has not begun', () => {
		service.isDrawing = false;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.shiftDown).toEqual(false);
	});

	it('handleCommand should set shiftDown to true if shift is down and path has begun', () => {
		service.isDrawing = true;
		service.shiftDown = false;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.shiftDown).toEqual(true);
	});

	it('handleCommand should set shiftDown to false if shift is down and path has begun', () => {
		service.isDrawing = true;
		service.shiftDown = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.shiftDown).toEqual(false);
	});

	it('handleCommand should call updatePreview if the path has begun', () => {
		service.isDrawing = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.updatePreview).toHaveBeenCalled();
	});

	it('handleCommand should not call updatePreview if the command is not shift', () => {
		service.isDrawing = true;
		const command = { key: Command.ESCAPE } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.updatePreview).not.toHaveBeenCalled();
		expect(service.isDrawing).not.toBeTruthy();
		expect(service.getDrawingService().clearCanvas).toHaveBeenCalledWith(service.getDrawingService().previewCtx);
	});

	it('should not modify isDrawing', () => {
		service.isDrawing = true;
		const command = { key: Command.BACKSPACE } as KeyboardEvent;
		service.handleCommand(command);
		expect(service.isDrawing).toBeTruthy();
	});
});
