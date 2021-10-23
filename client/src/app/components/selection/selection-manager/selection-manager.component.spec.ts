import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { GridService } from '@app/services/grid/grid.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { Arrows, Command, Global, MouseEnum } from '@app/shared/global';
import { SelectionManagerComponent } from './selection-manager.component';

// disable les string literal pour tester les méthodes privées
// tslint:disable: no-string-literal
// tslint:disable: no-any
describe('SelectionManagerComponent', () => {
	let component: SelectionManagerComponent;
	let canvasTestHelper: CanvasTestHelper;
	let fixture: ComponentFixture<SelectionManagerComponent>;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let keyMapStub: Map<string, boolean>;
	let rectangleSelectionStub: RectangleSelectionService;
	let shiftSelectionStub: ShiftSelectionService;
	let resizeSelectionStub: ResizeSelectionService;
	let baseCtxStub: CanvasRenderingContext2D;
	let previewCtxStub: CanvasRenderingContext2D;
	let documentStub: Document;
	let dummyElement: HTMLElement;

	beforeEach(async(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction']);
		TestBed.configureTestingModule({
			declarations: [SelectionManagerComponent],
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		}).compileComponents();
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		baseCtxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		previewCtxStub = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;
		drawServiceSpy.baseCtx = baseCtxStub;
		drawServiceSpy.previewCtx = previewCtxStub;

		shiftSelectionStub = new ShiftSelectionService(drawServiceSpy, new MagnetService(new GridService(drawServiceSpy)));
		resizeSelectionStub = new ResizeSelectionService(drawServiceSpy);
		rectangleSelectionStub = new RectangleSelectionService(drawServiceSpy, shiftSelectionStub);
		rectangleSelectionStub.selection = new ImageData(1, 1);
		rectangleSelectionStub.origin = Global.TEST_VECTOR;
		shiftSelectionStub.selector = rectangleSelectionStub;
		resizeSelectionStub.selector = rectangleSelectionStub;

		documentStub = document;
		dummyElement = documentStub.createElement('div');
		documentStub.body.appendChild(dummyElement);
		dummyElement.style.width = dummyElement.style.height = '1px';
		spyOn(documentStub, 'getElementById').and.callThrough().and.returnValue(dummyElement);
		spyOn(rectangleSelectionStub, 'deleteCurrentSelection').and.callThrough();
		spyOn(shiftSelectionStub, 'handleCommandMap').and.callFake(() => {
			return;
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectionManagerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		keyMapStub = new Map<string, boolean>();

		spyOn(keyMapStub, 'set').and.callThrough();
		spyOn(component['clipboard'], 'handleCommand').and.callFake(() => {
			return;
		});
		spyOn(component.toolService, 'changeTool').and.callFake(() => {
			return;
		});
		spyOn(component.toolService, 'handleCommand').and.callFake(() => {
			return;
		});
		spyOn(component['shiftSelection'], 'handleMouseDown').and.callFake(() => {
			return;
		});
		spyOn(component['shiftSelection'], 'handleCommandMap').and.callFake(() => {
			return;
		});
		spyOn(component['shiftSelection'], 'onMouseUp').and.callFake(() => {
			return;
		});
		spyOn<any>(component, 'handleCtrlDown').and.callThrough();
		spyOn<any>(component, 'handleArrowsDown').and.callThrough();
		spyOn<any>(component, 'handleEscapeDown').and.callThrough();

		component['shiftSelection'].selector = rectangleSelectionStub;
		component['clipboard'].selector = rectangleSelectionStub;
		jasmine.clock().install();
	});

	afterEach(() => {
		jasmine.clock().uninstall();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should changeTool on mouse down and start shift selection', () => {
		component.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(component.toolService.changeTool).toHaveBeenCalled();
		expect(component['shiftSelection'].handleMouseDown).toHaveBeenCalled();
	});

	it('should set shiftSelection operation to 0 when called from selector', () => {
		component.toolService.currentTool = rectangleSelectionStub;
		component['shiftSelection'].operation = 1;
		component.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(component.toolService.changeTool).toHaveBeenCalled();
		expect(component['shiftSelection'].operation).toEqual(0);
	});

	it('should propagate on mouse up', () => {
		component.ngOnInit();
		component.onMouseUp(Global.MOUSE_EVENTS[MouseEnum.DEFAULT]);
		expect(component['shiftSelection'].onMouseUp).toHaveBeenCalled();
	});

	it('keyIsArrow should return true if an arrow key is down', () => {
		expect(component['keyIsArrow'](Arrows.ARROWDOWN)).toEqual(true);
	});

	it('handlekeyDown should call the right function', () => {
		component.keyMap = keyMapStub;
		let event = new KeyboardEvent('keydown', { key: Arrows.ARROWDOWN });
		component.handleKeyDown(event);
		expect(component['handleArrowsDown']).toHaveBeenCalled();
		event = new KeyboardEvent('keydown', { key: 'n', ctrlKey: true });
		component.handleKeyDown(event);
		expect(component['handleCtrlDown']).toHaveBeenCalled();
		event = new KeyboardEvent('keydown', { key: Command.ESCAPE });
		component.handleKeyDown(event);
		expect(component['handleEscapeDown']).toHaveBeenCalled();
	});

	it('should set corresponding keyMap value to true when arrow is pressed', () => {
		const key = Arrows.ARROWDOWN;
		component.keyMap = keyMapStub;
		component['handleArrowsDown'](key);
		expect(keyMapStub.set).toHaveBeenCalledWith(key, true);
	});

	it('should change tool to shiftSelection if the current tool is a selector', () => {
		component.toolService.currentTool = rectangleSelectionStub;
		component['shiftSelection'].operation = 1;
		component['handleArrowsDown'](Arrows.ARROWDOWN);
		expect(component.toolService.changeTool).toHaveBeenCalled();
		expect(component['shiftSelection'].operation).toEqual(0);
	});

	it('should set the timeout to 500 if the tool is the shifter with timerMode at true', () => {
		component.toolService.currentTool = shiftSelectionStub;
		component.timerMode = true;
		component['handleArrowsDown'](Arrows.ARROWDOWN);
		jasmine.clock().tick(Global.INIT_TIMER + 1);
		expect(shiftSelectionStub.handleCommandMap).toHaveBeenCalled();
		expect(component.timerMode).toEqual(false);
	});

	it('should set the timeout to 100 if the tool is the shifter with timerMode at false', () => {
		component.toolService.currentTool = shiftSelectionStub;
		component.timerMode = false;
		component['handleArrowsDown'](Arrows.ARROWDOWN);
		jasmine.clock().tick(Global.OTHER_TIMER + 1);
		expect(shiftSelectionStub.handleCommandMap).toHaveBeenCalled();
		expect(component.timerMode).toEqual(false);
	});

	it('should change tool and handle ctrl command when ctrl-a is pressed', () => {
		component['handleCtrlDown']('a');
		expect(component.toolService.changeTool).toHaveBeenCalled();
		expect(component.toolService.handleCommand).toHaveBeenCalled();
	});

	it('handleEscapeDown should delete the current selection', () => {
		component.toolService.currentTool = rectangleSelectionStub;
		component['handleEscapeDown']();
		expect(rectangleSelectionStub.deleteCurrentSelection).toHaveBeenCalled();
		component.toolService.currentTool = shiftSelectionStub;
		component['handleEscapeDown']();
		expect(rectangleSelectionStub.deleteCurrentSelection).toHaveBeenCalled();
		component.toolService.currentTool = resizeSelectionStub;
		component['handleEscapeDown']();
		expect(rectangleSelectionStub.deleteCurrentSelection).toHaveBeenCalled();
	});

	it('handle key down should do nothing if key pressed is not ctrl-a/arrow', () => {
		const event = new KeyboardEvent('keydown', { key: 'n', ctrlKey: true });
		component.handleKeyDown(event);
		expect(component.toolService.changeTool).not.toHaveBeenCalled();
		expect(component.toolService.handleCommand).not.toHaveBeenCalled();
	});

	it('handle key down should change isPressed to true if shift is pressed', () => {
		component['resizeSelection'].shiftIsPressed = false;
		const event = new KeyboardEvent('keydown', { key: 'Shift', ctrlKey: false });
		component.handleKeyDown(event);
		expect(component['resizeSelection'].shiftIsPressed).toEqual(true);
	});

	it('handle key down should handleCommand of clipboard when delete is pressed and there is an active selection', () => {
		const event = new KeyboardEvent('keydown', { key: 'Delete', ctrlKey: false });
		rectangleSelectionStub.isActiveSelection = true;
		component['clipboard'].selector = rectangleSelectionStub;
		component.handleKeyDown(event);
		expect(component['clipboard'].handleCommand).toHaveBeenCalled();
	});

	it('handle key down should not handleCommand of clipboard when delete is pressed and there is not an active selection', () => {
		const event = new KeyboardEvent('keydown', { key: 'Delete', ctrlKey: false });
		rectangleSelectionStub.isActiveSelection = false;
		component['clipboard'].selector = rectangleSelectionStub;
		component.handleKeyDown(event);
		expect(component['clipboard'].handleCommand).not.toHaveBeenCalled();
	});

	it('handle key down should handleCommand of clipboard when active selection with ctrl keys', () => {
		rectangleSelectionStub.isActiveSelection = true;
		component['clipboard'].selector = rectangleSelectionStub;
		component['handleCtrlDown']('c');
		expect(component['clipboard'].handleCommand).toHaveBeenCalled();
	});

	it('handle key down should handleCommand of clipboard when ctrl key is v', () => {
		rectangleSelectionStub.isActiveSelection = false;
		component['clipboard'].selector = rectangleSelectionStub;
		component['handleCtrlDown']('v');
		expect(component['clipboard'].handleCommand).toHaveBeenCalled();
	});

	it('handle key down should not handleCommand of clipboard key is not v or selection is not active', () => {
		rectangleSelectionStub.isActiveSelection = false;
		component['clipboard'].selector = rectangleSelectionStub;
		component['handleCtrlDown']('c');
		expect(component['clipboard'].handleCommand).not.toHaveBeenCalled();
	});

	it('handle key up should do nothing if key pressed is not an arrow', () => {
		const event = new KeyboardEvent('keyup', { key: 'n', ctrlKey: true });
		component.handleKeyUp(event);
		expect(component.toolService.changeTool).not.toHaveBeenCalled();
		expect(component.toolService.handleCommand).not.toHaveBeenCalled();
	});

	it('handle key up should do nothing if currentTool is shiftSelection', () => {
		const event = new KeyboardEvent('keyup', { key: Arrows.ARROWDOWN });
		component.toolService.currentTool = rectangleSelectionStub;
		component.handleKeyUp(event);
		expect(component.toolService.changeTool).not.toHaveBeenCalled();
		expect(component.toolService.handleCommand).not.toHaveBeenCalled();
	});

	it('handle key up should change isPressed to false if shift is released', () => {
		component['resizeSelection'].shiftIsPressed = true;
		const event = new KeyboardEvent('keyup', { key: 'Shift', ctrlKey: false });
		component.handleKeyUp(event);
		expect(component['resizeSelection'].shiftIsPressed).toEqual(false);
	});

	it('should set the timeout to 500 if all the arrows are released', () => {
		const event = new KeyboardEvent('keyup', { key: Arrows.ARROWDOWN });
		component.toolService.currentTool = shiftSelectionStub;
		component.keyMap.set(Arrows.ARROWDOWN, true);
		component.keyMap.set(Arrows.ARROWLEFT, false);
		component.keyMap.set(Arrows.ARROWRIGHT, false);
		component.keyMap.set(Arrows.ARROWUP, false);
		component.timerMode = true;
		component.handleKeyUp(event);
		jasmine.clock().tick(Global.INIT_TIMER + 1);
		expect(component.keyMap.get(Arrows.ARROWDOWN)).toEqual(false);
		expect(shiftSelectionStub.handleCommandMap).toHaveBeenCalled();
		expect(component.timerMode).toEqual(true);
	});

	it('should set the timerMode to false if at least one other arrow is released', () => {
		const event = new KeyboardEvent('keyup', { key: Arrows.ARROWDOWN });
		component.toolService.currentTool = shiftSelectionStub;
		component.keyMap.set(Arrows.ARROWDOWN, true);
		component.keyMap.set(Arrows.ARROWLEFT, true);
		component.keyMap.set(Arrows.ARROWRIGHT, false);
		component.keyMap.set(Arrows.ARROWUP, false);
		component.timerMode = false;
		component.handleKeyUp(event);
		jasmine.clock().tick(Global.OTHER_TIMER + 1);
		expect(component.keyMap.get(Arrows.ARROWDOWN)).toEqual(false);
		expect(shiftSelectionStub.handleCommandMap).toHaveBeenCalled();
		expect(component.timerMode).toEqual(false);
	});

	it('changeClipSize should change the clipSize to the size of element', () => {
		component['clipboard'].clipSize = Global.DEFAULT_VECTOR;
		component['changeClipSize']();
		expect(component['clipboard'].clipSize.x).toEqual(parseFloat(dummyElement.style.width));
		expect(component['clipboard'].clipSize.y).toEqual(parseFloat(dummyElement.style.height));
	});
});
