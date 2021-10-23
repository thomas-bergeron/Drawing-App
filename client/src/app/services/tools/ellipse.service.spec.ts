import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, Global, MouseEnum } from '@app/shared/global';
import { EllipseService } from './ellipse.service';

describe('EllipseService', () => {
	let service: EllipseService;
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

		service = TestBed.inject(EllipseService);
		spyOn(service, 'updatePreview').and.callThrough();
		spyOn(service, 'updateBase').and.callThrough();
		spyOn(service, 'drawEllipse').and.callThrough();
		spyOn(service, 'drawCircle').and.callThrough();
		spyOn(previewCtxStub, 'stroke').and.callThrough();
		spyOn(previewCtxStub, 'fill').and.callThrough();
		spyOn(previewCtxStub, 'strokeRect').and.callThrough();
		spyOn(previewCtxStub, 'ellipse').and.callThrough();
		spyOn(previewCtxStub, 'beginPath').and.callThrough();
		spyOn(previewCtxStub, 'setLineDash').and.callThrough();

		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub; // Jasmine doesnt copy properties with underlying data
		service['drawingService'].previewCtx = previewCtxStub;
		service['drawingService'].positionX = Global.SCROLLBAR_WIDTH;
		service['target'] = { x: 25, y: 25 } as Vec2;
		service['origin'] = { x: 25, y: 25 } as Vec2;
		service['sign'] = { x: -1, y: 1 } as Vec2;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// Tests updatePreview
	it(' updatePreview should call drawCircle if shift is down', () => {
		service.shiftDown = true;
		service.updatePreview();
		expect(service.drawCircle).toHaveBeenCalled();
	});

	it(' updatePreview should call drawEllipse if shift is up', () => {
		service.shiftDown = false;
		service.updatePreview();
		expect(service.drawEllipse).toHaveBeenCalled();
	});

	// Tests updateBase
	it(' updateBase should call drawCircle if shift is down', () => {
		service.shiftDown = true;
		service.updateBase();
		expect(service.drawCircle).toHaveBeenCalled();
	});

	it(' updateBase should call drawEllipse if shift is up', () => {
		service.shiftDown = false;
		service.updateBase();
		expect(service.drawEllipse).toHaveBeenCalled();
	});

	// Tests Mouse
	it(' isDrawing should set origin to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.origin).toEqual(expectedResult);
	});

	it(' mouseDown should set isDrawing property to true on left click', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(true);
	});

	it(' mouseDown should not set isDrawing to true if right click', () => {
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.RIGHT_CLICK]);
		expect(service.isDrawing).toEqual(false);
	});

	it(' if the contour and fill properties are both set to false, onMouseDown should set contour to true', () => {
		service.options.shapeOptions.contour = false;
		service.options.shapeOptions.fill = false;
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.options.shapeOptions.contour).toEqual(true);
	});

	it(' onMouseUp should should set target to correct position', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.target).toEqual(expectedResult);
	});

	it(' onMouseUp should set isDrawing property to false', () => {
		service.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.isDrawing).toEqual(false);
	});

	it(' onMouseMove should should set target to correct position if the mouse is down', () => {
		service.isDrawing = true;
		const expectedResult: Vec2 = { x: 25, y: 25 };
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.PAGE_REF]);
		expect(service.target).toEqual(expectedResult);
	});

	it(' onMouseMove should call updatePreview() if the ellipse is being drawn', () => {
		service.isDrawing = true;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.updatePreview).toHaveBeenCalled();
	});

	it(' onMouseMove should not call updatePreview() if the mouse is not down', () => {
		service.isDrawing = false;
		service.onMouseMove(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(service.updatePreview).not.toHaveBeenCalled();
	});

	// Tests drawEllipse
	it(' drawEllipse should call beginPath()', () => {
		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.beginPath).toHaveBeenCalled();
	});

	it(' drawEllipse should call ellipse() if the isDrawing property is true', () => {
		service.isDrawing = true;

		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.ellipse).toHaveBeenCalled();
	});

	it(' drawEllipse should call strokeRect if the isDrawing property is true and the context is the previewCtx', () => {
		service.isDrawing = true;

		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
	});

	it(' drawEllipse should call stroke() if the contour property is true', () => {
		service.options.shapeOptions.contour = true;

		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.stroke).toHaveBeenCalled();
	});

	it(' drawEllipse should call fill() if the fill property is true', () => {
		service.options.shapeOptions.fill = true;

		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.fill).toHaveBeenCalled();
	});

	it(' drawEllipse should not call stroke() if the contour property is false', () => {
		service.options.shapeOptions.contour = false;

		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.stroke).not.toHaveBeenCalled();
	});

	it(' drawEllipse should not call fill() if the fill property is false', () => {
		service.options.shapeOptions.fill = false;

		service.drawEllipse(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.fill).not.toHaveBeenCalled();
	});

	// DrawCircle Tests
	it(' drawCircle should call ellipse() if the isDrawing property is true', () => {
		service.isDrawing = true;

		service.drawCircle(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.ellipse).toHaveBeenCalled();
	});

	it(' drawCircle should call strokeRect if the isDrawing property is true and the context is the previewCtx', () => {
		service.isDrawing = true;

		service.drawCircle(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.strokeRect).toHaveBeenCalled();
	});

	it(' drawCircle should not call strokeRect if the context is the base context', () => {
		service.isDrawing = true;

		service.drawCircle(baseCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.strokeRect).not.toHaveBeenCalled();
	});

	it('drawcircle should not call anything if mouse is not down', () => {
		service.isDrawing = false;
		service.drawCircle(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.ellipse).not.toHaveBeenCalled();
		expect(previewCtxStub.setLineDash).not.toHaveBeenCalled();
	});

	it(' drawCircle should call stroke() if the contour property is true', () => {
		service.options.shapeOptions.contour = true;
		service.isDrawing = true;

		service.drawCircle(previewCtxStub, {} as Vec2, service.options, true, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.stroke).toHaveBeenCalled();
	});

	it(' drawCircle should call fill() if the fill property is true', () => {
		service.options.shapeOptions.fill = true;
		service.isDrawing = true;

		service.drawCircle(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.fill).toHaveBeenCalled();
	});

	it(' drawCircle should not call stroke() if the contour property is false', () => {
		service.options.shapeOptions.contour = false;
		service.isDrawing = true;

		service.drawCircle(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.stroke).not.toHaveBeenCalled();
	});

	it(' drawCircle should not call fill() if the fill property is false', () => {
		service.options.shapeOptions.fill = false;
		service.isDrawing = true;

		service.drawCircle(previewCtxStub, {} as Vec2, service.options, service.isDrawing, {} as string, {} as string, {} as Vec2, {} as Vec2);
		expect(previewCtxStub.fill).not.toHaveBeenCalled();
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
