import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { EllipseService } from 'src/app/services/tools/ellipse.service';
import { EraserService } from 'src/app/services/tools/eraser.service';

describe('DrawingService', () => {
	let service: DrawingService;
	let canvasTestHelper: CanvasTestHelper;
	let commandManagerSpy: jasmine.SpyObj<CommandManagerService>;
	beforeEach(() => {
		commandManagerSpy = jasmine.createSpyObj('CommandManagerSpy', ['undoIsReady', 'addAction', 'redoIsReady', 'undo', 'redo', 'clear']);
		TestBed.configureTestingModule({ providers: [{ provide: CommandManagerService, useValue: commandManagerSpy }] });
		service = TestBed.inject(DrawingService);
		canvasTestHelper = TestBed.inject(CanvasTestHelper);

		service.baseCtx = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		service.previewCtx = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call command Manager addAction', () => {
		service.addAction({} as CallableFunction);
		expect(commandManagerSpy.addAction).toHaveBeenCalled();
	});
	it('should call command Manager undoIsReady', () => {
		service.undoIsReady();
		expect(commandManagerSpy.undoIsReady).toHaveBeenCalled();
	});
	it('should call command Manager redoIsReady', () => {
		service.redoIsReady();
		expect(commandManagerSpy.redoIsReady).toHaveBeenCalled();
	});
	it('should call command Manager undo', () => {
		commandManagerSpy.undo.and.returnValue(Promise.resolve());
		service.undo();
		expect(commandManagerSpy.undo).toHaveBeenCalled();
	});
	it('should call command Manager redo', () => {
		commandManagerSpy.redo.and.returnValue(Promise.resolve());
		service.redo();
		expect(commandManagerSpy.redo).toHaveBeenCalled();
	});

	it('should clear the whole canvas and set it to white', () => {
		service.clearCanvas(service.baseCtx);
		expect(service.baseCtx.fillStyle).toEqual('#ffffff');
	});

	it('should set the canvas to white and resize', () => {
		service.new();
		expect(service.baseCtx.fillStyle).toEqual('#ffffff');
	});

	it('should place the button correctly and restric canvas', () => {
		service.canvasSize = { x: Global.WRONG_NEW_SIZE, y: Global.WRONG_NEW_SIZE };
		service.bottomResizePos = { x: Global.WRONG_NEW_SIZE, y: Global.WRONG_NEW_SIZE };
		service.rightResizePos = { x: Global.WRONG_NEW_SIZE, y: Global.WRONG_NEW_SIZE };
		service.cornerResizePos = { x: Global.WRONG_NEW_SIZE, y: Global.WRONG_NEW_SIZE };
		service.placeResizeButton(service.canvasSize);
		expect(service.canvasSize).toEqual({ x: Global.MIN_SIZE, y: Global.MIN_SIZE });
		expect(service.bottomResizePos).toEqual({ x: Global.MIN_SIZE / 2 - Global.HALF_CP_SIZE, y: Global.MIN_SIZE });
		expect(service.rightResizePos).toEqual({ x: Global.MIN_SIZE, y: Global.MIN_SIZE / 2 - Global.HALF_CP_SIZE });
		expect(service.cornerResizePos).toEqual({ x: Global.MIN_SIZE, y: Global.MIN_SIZE });
	});

	it('should init the canvasSize', () => {
		service.canvasImage = '';
		service.containerSize = { x: 400, y: 400 };
		service.initCanvas();
		expect(service.canvasSize).toEqual({ x: 250, y: 250 });
		service.containerSize = { x: 800, y: 800 };
		service.initCanvas();
		expect(service.canvasSize).toEqual({ x: 400, y: 400 });
	});

	it('should  load the canvas Image', (done) => {
		service.canvasImage =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAQAAAAi5ZK2AAABcUlEQVR42u3RAQ0AAAgDIN8/9K3hJlQg7fBMpEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunSkIx3pSEc60pGOdKQjHelIRzrSkY506dKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunTp0pGOdKQjHelIRzrSkY50pCMd6UhHOtKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pHPDAulX8xYd9+8SAAAAAElFTkSuQmCC';
		spyOn(service.baseCtx, 'drawImage');
		service.initCanvas();
		setTimeout(() => {
			expect(service.baseCtx.drawImage).toHaveBeenCalled();
			done();
		}, Global.SECOND_MS);
	});

	it('should call addActionToStack', () => {
		service.containerSize = { x: 400, y: 400 };
		service.canvasImage = '';
		// tslint:disable:no-empty
		spyOn(service, 'addActionToStack').and.callFake(() => {});
		service.initCanvas();
		expect(service.addActionToStack).toHaveBeenCalled();
	});

	it('should call add Action from command manager', () => {
		service.addActionToStack();
		expect(commandManagerSpy.addAction).toHaveBeenCalled();
		expect(commandManagerSpy.addAction).toHaveBeenCalledWith(jasmine.any(Function));
	});

	it('should place the box buttons correctly', () => {
		const expectedComponent = Global.TEST_VECTOR;
		const boxShift = (Global.SHIFT_FACTOR * Global.BOX_CP_SIZE) / 2;
		service.placeBoxButton(expectedComponent);
		expect(service.eastBoxPos).toEqual({
			x: expectedComponent.x - boxShift,
			y: expectedComponent.y / 2 - Global.BOX_CP_SIZE,
		});
		expect(service.northBoxPos).toEqual({ x: expectedComponent.x / 2 - Global.BOX_CP_SIZE, y: -boxShift - 2 });
		expect(service.northEastBoxPos).toEqual({ x: expectedComponent.x - boxShift, y: -boxShift - 2 });
		expect(service.northWestBoxPos).toEqual({ x: -boxShift, y: -boxShift });
		expect(service.southBoxPos).toEqual({
			x: expectedComponent.x / 2 - Global.BOX_CP_SIZE / 2 - 1,
			y: expectedComponent.y + -boxShift,
		});
		expect(service.southEastBoxPos).toEqual({
			x: expectedComponent.x + -boxShift,
			y: expectedComponent.y + -boxShift,
		});
		expect(service.southWestBoxPos).toEqual({ x: -boxShift - 2, y: expectedComponent.y - boxShift });
		expect(service.westBoxPos).toEqual({ x: -boxShift - 2, y: expectedComponent.y / 2 - Global.BOX_CP_SIZE });
	});

	it('should add color to color history', () => {
		const colorHistory: string[] = ['#FF0000', '#00FF00', '#0000FF', '#AA0000', '#00AA00', '#0000AA', '#BB0000', '#00BB00', '#0000BB', '#ABCDEF'];
		const newColor = '#123456';
		service.colorHistory = colorHistory.slice();
		service.colorHistory.pop();
		service.colorHistory.unshift(newColor);
		expect(service.colorHistory[0]).toBe(newColor);
		for (let i = 1; i < colorHistory.length; i++) {
			expect(service.colorHistory[i]).toBe(colorHistory[i - 1]);
		}
	});

	it('should not change colorHistory of drawing service', () => {
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		service.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		service.colorHistory[0] = firstColor;
		service.primaryColor = firstColor;
		service.colorHistory[1] = secondColor;
		service.secondaryColor = secondColor;
		service.colorHistory[2] = thirdColor;

		const colorHistoryClone = service.colorHistory.slice();
		service.changeColor('white', true, false);
		expect(service.colorHistory).toEqual(colorHistoryClone);
	});

	it('should swap color at index 2 with first color', () => {
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		service.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		service.colorHistory[0] = firstColor;
		service.primaryColor = firstColor;
		service.colorHistory[1] = secondColor;
		service.secondaryColor = secondColor;
		service.colorHistory[2] = thirdColor;

		service.changeColor(thirdColor, true, false);

		expect(service.primaryColor).toBe(thirdColor);
		expect(service.colorHistory[0]).toBe(thirdColor);
		expect(service.colorHistory[1]).toBe(firstColor);
		expect(service.colorHistory[2]).toBe(secondColor);
	});

	it('should swap color at index 2 with second color', () => {
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		service.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		service.colorHistory[0] = firstColor;
		service.primaryColor = firstColor;
		service.colorHistory[1] = secondColor;
		service.secondaryColor = secondColor;
		service.colorHistory[2] = thirdColor;

		const colorHistoryClone = service.colorHistory.slice();
		service.changeColor(thirdColor, false, false);

		expect(service.secondaryColor).toBe(thirdColor);
		expect(service.colorHistory[0]).toBe(thirdColor);
		expect(service.colorHistory.slice(1, 2)).toEqual(colorHistoryClone.slice(0, 1));
	});

	it('should not add new color', () => {
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		service.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		service.colorHistory[0] = firstColor;
		service.primaryColor = firstColor;
		service.colorHistory[1] = secondColor;
		service.secondaryColor = secondColor;
		service.colorHistory[2] = thirdColor;

		service.changeColor('white', false, false);
		expect(service.colorHistory).not.toContain('white');
	});

	it('should return canvasSize', () => {
		expect(service.getCanvasDimensions()).toEqual(service.canvasSize);
	});

	it('should not add new color', () => {
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		service.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		service.colorHistory[0] = firstColor;
		service.primaryColor = firstColor;
		service.colorHistory[1] = secondColor;
		service.secondaryColor = secondColor;
		service.colorHistory[2] = thirdColor;

		service.changeColor('white', false, false);
		expect(service.colorHistory).not.toContain('white');
	});

	it('should add new color', () => {
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		service.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		service.colorHistory[0] = firstColor;
		service.primaryColor = firstColor;
		service.colorHistory[1] = secondColor;
		service.secondaryColor = secondColor;
		service.colorHistory[2] = thirdColor;

		service.changeColor('white', true, true);
		expect(service.colorHistory).toContain('white');
		expect(service.primaryColor).toBe('white');
	});

	it('should return #000000FF', () => {
		const color = 0;
		const alpha = 255;

		const colorHEX = service.RGBToHex(color, color, color, alpha);

		expect(colorHEX).toEqual('#000000FF');
	});

	it('should return #00000000', () => {
		const color = 0;
		const alpha = 0;

		const colorHEX = service.RGBToHex(color, color, color, alpha);

		expect(colorHEX).toEqual('#00000000');
	});

	it('cursor should be set to null', () => {
		const tool = new EraserService(service);
		service.resetCursor(tool);
		expect(service.previewCtx.canvas.style.cursor).toEqual('none');
	});

	it('cursor should be set to crosshair', () => {
		const tool = new EllipseService(service);
		service.resetCursor(tool);
		expect(service.previewCtx.canvas.style.cursor).toEqual('crosshair');
	});
});
