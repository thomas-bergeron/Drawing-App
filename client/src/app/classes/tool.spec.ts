import { TestBed } from '@angular/core/testing';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseEnum } from '@app/shared/global';
import { CanvasTestHelper } from './canvas-test-helper';
import { Tool } from './tool';
import { ToolInfo } from './tool-info';
import { ToolOption } from './tool-option';
import { Vec2 } from './vec2';

class ToolStub extends Tool {
	info: ToolInfo = new ToolInfo('', '', '');
	options: ToolOption = new ToolOption();
	constructor(public drawingService: DrawingService) {
		super(drawingService);
	}
}

// tslint:disable:no-any
describe('Tool', () => {
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;
	let toolStub: ToolStub;
	const canvasTestHelper: CanvasTestHelper = new CanvasTestHelper();

	beforeEach(() => {
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['getPagePositionFromMouse'], ['']);
		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawingServiceSpy }],
		});

		drawingServiceSpy.baseCtx = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		toolStub = new ToolStub(drawingServiceSpy);
	});

	it('should be created', () => {
		expect(toolStub).toBeTruthy();
	});

	it('should call #onMouseDown', () => {
		const methodSpy = spyOn(toolStub, 'onMouseDown').and.callThrough();
		toolStub.onMouseDown({} as MouseEvent);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #onMouseUp', () => {
		const methodSpy = spyOn(toolStub, 'onMouseUp').and.callThrough();
		toolStub.onMouseUp({} as MouseEvent);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #onMouseMove', () => {
		const methodSpy = spyOn(toolStub, 'onMouseMove').and.callThrough();
		toolStub.onMouseMove({} as MouseEvent);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #onDoubleClick', () => {
		const methodSpy = spyOn(toolStub, 'onDoubleClick').and.callThrough();
		toolStub.onDoubleClick({} as MouseEvent);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #handleCommand', () => {
		const methodSpy = spyOn(toolStub, 'handleCommand').and.callThrough();
		toolStub.handleCommand({} as KeyboardEvent, {} as boolean);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should convert mouse event into Vec2', () => {
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
		const resultVec = toolStub.getPositionFromMouse(mouseEvent);
		const expectedVec = { x: mouseEvent.offsetX, y: mouseEvent.offsetY };
		expect(resultVec).toEqual(expectedVec);
	});

	it('should return the DrawingService', () => {
		const drawingService = new DrawingService({} as CommandManagerService);
		// tslint:disable:no-string-literal
		toolStub['drawingService'] = drawingService;
		expect(toolStub.getDrawingService()).toEqual(drawingService);
	});

	it('should return position relative to the drawing service', () => {
		const drawingService = new DrawingService({} as CommandManagerService);
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		const returnValue = toolStub.getPagePositionFromMouse(mouseEvent);

		expect(returnValue).toEqual({ x: mouseEvent.pageX - drawingService.positionX, y: mouseEvent.pageY } as Vec2);
	});
});
