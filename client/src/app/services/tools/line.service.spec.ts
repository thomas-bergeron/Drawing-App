import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { Vec2 } from '@app/classes/vec2';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Command, EnumAngleLigne, Global, MouseEnum } from '@app/shared/global';
import { LineService } from './line.service';

// tslint:disable:no-any
describe('LineService', () => {
	let service: LineService;
	let mouseEvent: MouseEvent;
	let canvasTestHelper: CanvasTestHelper;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;

	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	let drawLineSpy: jasmine.Spy<any>;
	let updateTipSpy: jasmine.Spy<any>;
	let updatePreviewSpy: jasmine.Spy<any>;
	let clickSpy: jasmine.Spy<any>;
	let getPositionFromMouseSpy: jasmine.Spy<any>;
	let distanceBetweenPointsSpy: jasmine.Spy<any>;
	let clearPathSpy: jasmine.Spy<any>;
	let getClosestLineSpy: jasmine.Spy<any>;
	let toggleGuidingModeSpy: jasmine.Spy<any>;
	let drawConnectDotsSpy: jasmine.Spy<any>;
	let stopDrawingSpy: jasmine.Spy<any>;
	let lockSpy: jasmine.Spy<any>;
	let unlockSpy: jasmine.Spy<any>;
	let deleteSegmentSpy: jasmine.Spy<any>;
	let deleteLineSpy: jasmine.Spy<any>;

	beforeEach(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		});

		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		service = TestBed.inject(LineService);
		drawLineSpy = spyOn<any>(service, 'drawLine').and.callThrough();
		updateTipSpy = spyOn<any>(service, 'updateTip').and.callThrough();
		updatePreviewSpy = spyOn<any>(service, 'updatePreview').and.callThrough();
		clickSpy = spyOn<any>(service, 'click').and.callThrough();
		// drawServiceSpy['addAction'].and.callFake(() => {});
		getPositionFromMouseSpy = spyOn<any>(service, 'getPositionFromMouse').and.callThrough();
		distanceBetweenPointsSpy = spyOn<any>(service, 'distanceBetweenPoints').and.callThrough();
		clearPathSpy = spyOn<any>(service, 'clearPath').and.callThrough();
		getClosestLineSpy = spyOn<any>(service, 'getClosestLine').and.callThrough();
		toggleGuidingModeSpy = spyOn<any>(service, 'toggleGuidingMode').and.callThrough();
		drawConnectDotsSpy = spyOn<any>(service, 'drawConnectDots').and.callThrough();
		stopDrawingSpy = spyOn<any>(service, 'stopDrawing').and.callThrough();
		lockSpy = spyOn<any>(service, 'lock').and.callThrough();
		unlockSpy = spyOn<any>(service, 'unlock').and.callThrough();
		deleteSegmentSpy = spyOn<any>(service, 'deleteLastSegment').and.callThrough();
		deleteLineSpy = spyOn<any>(service, 'deleteLine').and.callThrough();
		// expect(addActionSpy).not.toHaveBeenCalled();
		// Configuration du spy du service
		// tslint:disable:no-string-literal
		service['drawingService'].baseCtx = baseCtxStub; // Jasmine doesnt copy properties with underlying data
		service['drawingService'].previewCtx = previewCtxStub;
		service['pathData'] = [];
		for (let a = 0; a < Global.DUMMY_SIZE; a++) {
			service['pathData'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
		}
		service['mousePos'] = service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		service['isDrawing'] = false;
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.DEFAULT];
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it(' mouseDown should set isDrawing to true', () => {
		service.onMouseDown(mouseEvent);
		expect(service['isDrawing']).toBeTruthy();
	});
	it(' mouseDown should call click on canvas ready', () => {
		service.onMouseDown(mouseEvent);
		expect(clickSpy).toHaveBeenCalled();
	});
	it(' stopDrawing should call getPosition, distanceBetweenPoints, drawline and clearpath', () => {
		service['stopDrawing'](mouseEvent);
		expect(getPositionFromMouseSpy).toHaveBeenCalled();
		expect(getPositionFromMouseSpy).toHaveBeenCalledWith(mouseEvent);
		expect(distanceBetweenPointsSpy).toHaveBeenCalled();
		expect(drawLineSpy).toHaveBeenCalled();
		expect(clearPathSpy).toHaveBeenCalled();
	});
	it('should clear canvas', () => {
		const initialLength = service['pathData'].length;
		service['stopDrawing'](Global.MOUSE_EVENTS[MouseEnum.OFFSET_20] as MouseEvent);
		const finalLength = service['pathData'].length;
		expect(initialLength).not.toEqual(0);
		expect(finalLength).toEqual(0);
	});
	it('lock should call getClosestLine, toggleGuidingMode, updateTip and updatePreview if path is not empty', () => {
		service['lock']();
		expect(getClosestLineSpy).toHaveBeenCalled();
		expect(toggleGuidingModeSpy).toHaveBeenCalled();
		expect(toggleGuidingModeSpy).toHaveBeenCalledWith(true);
		expect(updateTipSpy).toHaveBeenCalled();
		expect(updatePreviewSpy).toHaveBeenCalled();
	});
	it('lock should not call getClosestLine, toggleGuidingMode, updateTip and updatePreview if path is not empty', () => {
		service['pathData'] = [] as Vec2[];
		service['lock']();
		expect(getClosestLineSpy).not.toHaveBeenCalled();
		expect(toggleGuidingModeSpy).not.toHaveBeenCalled();
		expect(updateTipSpy).not.toHaveBeenCalled();
		expect(updatePreviewSpy).not.toHaveBeenCalled();
	});

	it('should call toggleGuiding mode and update preview if path is not empty', () => {
		service.tipPos = Global.DUMMY_PATH[0];
		service['unlock']();
		expect(toggleGuidingModeSpy).toHaveBeenCalled();
		expect(toggleGuidingModeSpy).toHaveBeenCalledWith(false);
		expect(updatePreviewSpy).toHaveBeenCalled();
	});
	it('should not call update preview if path is empty. should still call toggleGuidingMode', () => {
		service['pathData'] = [] as Vec2[];
		service['unlock']();
		expect(toggleGuidingModeSpy).toHaveBeenCalled();
		expect(updatePreviewSpy).not.toHaveBeenCalled();
	});

	it('Le deuxième point d’un segment fixé à un angle de 0 ou 180 degrés doit avoir une position en x égale à la position en x du pointeur de la souris et une position en y égale à la position en y du premier point (origine).', () => {
		const lastPoint = { x: 141, y: 315 } as Vec2;
		const line: number[] = Global.LINE_LIST[EnumAngleLigne.HORIZONTAL];
		line.pop();
		line.push(-lastPoint.y);
		const mousePos: Vec2 = { x: 252, y: 378 };
		const expected: Vec2 = { x: mousePos.x, y: lastPoint.y };
		const oldPoint = lastPoint;
		const guidedPos: Vec2 = service['calculateGuidedPosition'](oldPoint, line, mousePos);
		expect(guidedPos.y).toEqual(expected.y);
		expect(guidedPos.x).toEqual(expected.x);
	});
	it('Le deuxième point d’un segment fixé à un angle de 45, 135, 225 ou 315 degrés doit avoir une position en x égale à la position en x du pointeur de la souris et une position en y calculée en fonction de la position en x et de l’angle à respecter.', () => {
		const lastPoint = { x: 141, y: 315 } as Vec2;
		let line: number[] = Global.LINE_LIST[EnumAngleLigne.QUARANTECINQ];
		line[line.length - 1] = -(lastPoint.x - lastPoint.y);
		const mousePos: Vec2 = { x: 252, y: 378 };
		let expected: Vec2 = { x: mousePos.x, y: 426 };
		const oldPoint = lastPoint;
		let guidedPos: Vec2 = service['calculateGuidedPosition'](oldPoint, line, mousePos);
		expect(guidedPos.y).toEqual(expected.y);
		expect(guidedPos.x).toEqual(expected.x);
		line = Global.LINE_LIST[EnumAngleLigne.CENTTRENTECINQ];

		line[line.length - 1] = -(lastPoint.x + lastPoint.y);
		expected = { x: mousePos.x, y: 204 };
		guidedPos = service['calculateGuidedPosition'](oldPoint, line, mousePos);
		expect(guidedPos.y).toEqual(expected.y);
		expect(guidedPos.x).toEqual(expected.x);
	});
	it('Le deuxième point d’un segment fixé à un angle de 90 ou 270 degrés doit avoir une position en y égale à la position en y du pointeur de la souris et une position en x égale à la position en x du premier point (origine).', () => {
		const lastPoint = { x: 141, y: 315 } as Vec2;
		const line: number[] = Global.LINE_LIST[EnumAngleLigne.VERTICAL];
		line.pop();
		line.push(-lastPoint.x);
		const mousePos: Vec2 = { x: 252, y: 378 };
		const expected: Vec2 = { x: lastPoint.x, y: mousePos.y };
		const oldPoint = lastPoint;
		const guidedPos: Vec2 = service['calculateGuidedPosition'](oldPoint, line, mousePos);
		expect(guidedPos.y).toEqual(expected.y);
		expect(guidedPos.x).toEqual(expected.x);
	});
	it('should delete line', () => {
		service.tipPos = Global.DUMMY_PATH[0];
		service['deleteLine']();
		expect(service['pathData'].length).toEqual(0);
		expect(updatePreviewSpy).toHaveBeenCalled();
		expect(clearPathSpy).toHaveBeenCalled();
	});

	it('should return mouse position', () => {
		const event = Global.MOUSE_EVENTS[MouseEnum.ONE_OFF_X];
		const position = service.getPositionFromMouse(event);
		service['click'](event);
		expect(service['mousePos']).toEqual(position);
	});
	it('should close line on initial point', () => {
		service['pathData'] = [] as Vec2[];
		service['isGuided'] = false;
		service['pathData'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
		service['pathData'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.ONE_OFF_X]));
		service['pathData'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.ONE_OFF_X]));
		service['pathData'].push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.OFFSET_20]));
		service['tipPos'] = {} as Vec2;
		drawServiceSpy['primaryColor'] = '#000000';

		service['stopDrawing'](Global.MOUSE_EVENTS[MouseEnum.OFFSET_20]);

		const expectedPath: Vec2[] = [];
		expectedPath.push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
		expectedPath.push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.ONE_OFF_X]));
		expectedPath.push(service.getPositionFromMouse(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]));
		expect(drawLineSpy).toHaveBeenCalledWith(previewCtxStub, expectedPath, jasmine.any(Object), '#000000', jasmine.any(Object));
	});

	it('should call drawConnectDots', () => {
		service.options.lineOptions.hasConnectionDots = true;
		service.onMouseDown(mouseEvent);
		expect(drawConnectDotsSpy).toHaveBeenCalled();
	});
	it('should not call drawConnectDots', () => {
		service.options.lineOptions.hasConnectionDots = false;
		service.onMouseDown(mouseEvent);
		expect(drawConnectDotsSpy).not.toHaveBeenCalled();
	});

	it('should not call preview methods on mouse move if line hasnt started', () => {
		service.onMouseMove(mouseEvent);
		expect(updatePreviewSpy).not.toHaveBeenCalled();
		expect(updateTipSpy).not.toHaveBeenCalled();
	});

	it('should call preview methods onMouseMove if line has started', () => {
		service['isDrawing'] = true;
		service.onMouseMove(mouseEvent);
		expect(updatePreviewSpy).toHaveBeenCalled();
		expect(updateTipSpy).toHaveBeenCalled();
	});

	it(' should not delete last segment and handle call on empty path', () => {
		const initialLength = service['pathData'].length;
		service['deleteLastSegment']();
		let finalLength = service['pathData'].length;
		expect(initialLength).not.toEqual(finalLength);
		expect(initialLength - 1).toEqual(finalLength);
		for (let i = 0; i < initialLength * 2; i++) {
			service['deleteLastSegment']();
		}
		finalLength = service['pathData'].length;
		expect(finalLength).toEqual(1);
	});
	it('single click should call drawline', () => {
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT];
		service.onMouseDown(mouseEvent);

		expect(drawLineSpy).toHaveBeenCalled();
	});
	it('double click should call stopDrawing', () => {
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT];
		service.onDoubleClick(mouseEvent);
		expect(stopDrawingSpy).toHaveBeenCalled();
		expect(stopDrawingSpy).toHaveBeenCalledWith(mouseEvent);
	});

	// Exemple de test d'intégration qui est quand même utile
	it(' should change the pixel of the canvas preview ', () => {
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT];

		service.onMouseDown(mouseEvent);
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.ONE_OFF_X] as MouseEvent;

		// Premier pixel seulement
		const imageData: ImageData = previewCtxStub.getImageData(0, 0, 1, 1);
		expect(imageData.data[0]).toEqual(0); // R
		expect(imageData.data[1]).toEqual(0); // G
		expect(imageData.data[2]).toEqual(0); // B
		// tslint:disable-next-line:no-magic-numbers
		expect(imageData.data[3]).not.toEqual(0); // A
	});
	it(' should change the pixel of the canvas ', () => {
		mouseEvent = Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT];
		service.onMouseDown(mouseEvent);
		service.onMouseDown(mouseEvent);
		expect(drawLineSpy).toHaveBeenCalled();

		// Premier pixel seulement
		const imageData: ImageData = baseCtxStub.getImageData(0, 0, 1, 1);
		expect(imageData.data[0]).toEqual(0); // R
		expect(imageData.data[1]).toEqual(0); // G
		expect(imageData.data[2]).toEqual(0); // B
		// tslint:disable-next-line:no-magic-numbers
	});
	it('should call delete last segment on "Backspace" command and keydown', () => {
		service.isDrawing = true;
		const command = { key: Command.BACKSPACE } as KeyboardEvent;
		service.handleCommand(command, true);
		expect(deleteSegmentSpy).toHaveBeenCalled();
	});
	it('should not call delete last segment on "Backspace" command and keyup', () => {
		service.isDrawing = true;
		const command = { key: Command.BACKSPACE } as KeyboardEvent;
		service.handleCommand(command, false);
		expect(deleteSegmentSpy).not.toHaveBeenCalled();
	});
	it('should call lock on "Shift" command and key down and guiding mode not initiated', () => {
		service.isDrawing = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service['isGuided'] = false;
		service.handleCommand(command, true);
		expect(lockSpy).toHaveBeenCalled();
		expect(unlockSpy).not.toHaveBeenCalled();
	});
	it('should not call lock on "Shift" command with key up or guiding mode not initiated', () => {
		service.isDrawing = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service['isGuided'] = false;
		service.handleCommand(command, false);
		expect(lockSpy).not.toHaveBeenCalled();
		expect(unlockSpy).toHaveBeenCalled();
		service['isGuided'] = true;
		service.handleCommand(command, true);
		expect(lockSpy).not.toHaveBeenCalled();
		expect(unlockSpy).toHaveBeenCalled();
	});
	it('should call unlock on "Shift" command ', () => {
		service.isDrawing = true;
		const command = { key: Command.SHIFT } as KeyboardEvent;
		service['isGuided'] = true;
		service.handleCommand(command, true);
		expect(lockSpy).not.toHaveBeenCalled();
		expect(unlockSpy).toHaveBeenCalled();
	});
	it('should properly handle "Escape" command ', () => {
		service.isDrawing = true;
		const command = { key: Command.ESCAPE } as KeyboardEvent;
		service.handleCommand(command, true);
		expect(deleteLineSpy).toHaveBeenCalled();
	});
	it('should not handle "Escape" command if command is not thrown on keydown', () => {
		service.isDrawing = true;
		const command = { key: Command.ESCAPE } as KeyboardEvent;
		service.handleCommand(command, false);
		expect(deleteLineSpy).not.toHaveBeenCalled();
	});

	it('should not call any methods in handle ', () => {
		service.isDrawing = false;
		const command = {} as KeyboardEvent;
		service.handleCommand(command, false);
		expect(deleteSegmentSpy).not.toHaveBeenCalled();
		expect(lockSpy).not.toHaveBeenCalled();
		expect(unlockSpy).not.toHaveBeenCalled();
		expect(deleteLineSpy).not.toHaveBeenCalled();
	});
});
