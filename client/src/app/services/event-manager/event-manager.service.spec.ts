import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { GridService } from '@app/services/grid/grid.service';
import { LassoSelectionService } from '@app/services/selection/lasso-selection.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { Global, MouseEnum, Shortcut } from '@app/shared/global';
import { of } from 'rxjs';
import { DrawingService } from 'src/app/services/drawing/drawing.service';
import { LineService } from 'src/app/services/tools/line.service';
import { PencilService } from 'src/app/services/tools/pencil.service';
import { ToolService } from 'src/app/services/tools/tool.service';
import { EventManagerService } from './event-manager.service';

describe('EventManagerService', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	let service: EventManagerService;
	let toolServiceSpy: jasmine.SpyObj<ToolService>;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;
	let rectangleSelectionServiceSpy: jasmine.SpyObj<RectangleSelectionService>;
	let shiftSelectionServiceSpy: jasmine.SpyObj<ShiftSelectionService>;
	let resizeSelectionServiceSpy: jasmine.SpyObj<ResizeSelectionService>;
	let gridServiceSpy: jasmine.SpyObj<GridService>;
	let matDialogSpy: jasmine.SpyObj<MatDialog>;
	const dialogRefSpyTrue = jasmine.createSpyObj({ afterClosed: of(true), close: true });
	const dialogRefSpyFalse = jasmine.createSpyObj({ afterClosed: of(false), close: true });
	beforeEach(() => {
		toolServiceSpy = jasmine.createSpyObj(
			'ToolService',
			['changeTool', 'handleCommand', 'hasBegunDrawing', 'isValidToolKey', 'getService'],
			['toolMap'],
		);
		// tslint:disable:no-empty
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['undo', 'redo', 'isEmpty', 'clearCanvas', 'addAction', 'initCanvas', 'new']);
		rectangleSelectionServiceSpy = jasmine.createSpyObj('RectangleSelectionService', ['callPlaceBox', 'handleCommand']);
		shiftSelectionServiceSpy = jasmine.createSpyObj('ShiftSelectionService', ['onMouseDown']);
		resizeSelectionServiceSpy = jasmine.createSpyObj('ResizeSelectionService', ['onMouseDown']);
		gridServiceSpy = jasmine.createSpyObj('GridService', ['toggleGrid']);
		matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
		matDialogSpy.open.and.returnValue(dialogRefSpyTrue);
		TestBed.configureTestingModule({
			imports: [MatDialogModule],
			providers: [
				{ provide: ToolService, useValue: toolServiceSpy },
				{ provide: DrawingService, useValue: drawingServiceSpy },
				{ provide: MatDialog, useValue: matDialogSpy },
				{ provide: RectangleSelectionService, useValue: rectangleSelectionServiceSpy },
				{ provide: ShiftSelectionService, useValue: shiftSelectionServiceSpy },
			],
		});
		gridServiceSpy.info = new ToolInfo('grille', 'Grille', 'g');
		gridServiceSpy.options = new ToolOption(undefined, undefined, undefined, undefined, true);
		service = TestBed.inject(EventManagerService);
		toolServiceSpy.currentTool = new PencilService(drawingServiceSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call gridservice togglegrid', () => {
		toolServiceSpy.getService.and.returnValue(gridServiceSpy);
		service.toggleView('g');
		expect(gridServiceSpy.toggleGrid).toHaveBeenCalled();
	});
	it('should return if grid is active', () => {
		gridServiceSpy.options.gridOptions.isActive = true;
		gridServiceSpy.info.name = 'grille';
		toolServiceSpy.getService.and.returnValue(gridServiceSpy);
		expect(service.isGridActive()).toEqual(true);
	});
	it('should return if grid is not active', () => {
		gridServiceSpy.options.gridOptions.isActive = true;
		gridServiceSpy.info.name = 'test';
		toolServiceSpy.getService.and.returnValue(gridServiceSpy);
		expect(service.isGridActive()).toEqual(false);
	});
	it('should add keydown listener on handleKeydown', () => {
		const methodSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		service.enableShortcuts();
		expect(methodSpy).toHaveBeenCalledWith('keydown', service['handleKeydown']);
	});
	it('should remove keydown listener on handleKeydown', () => {
		const methodSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		service.disableShortcuts();
		expect(methodSpy).toHaveBeenCalledWith('keydown', service['handleKeydown']);
	});
	it('should call open on MatDialog', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'o', ctrlKey: true, shiftKey: false });
		drawingServiceSpy.isEmpty.and.returnValue(false);
		service['handleShortcut'](event);
		expect(drawingServiceSpy.new).toHaveBeenCalled();
		matDialogSpy.open.and.returnValue(dialogRefSpyFalse);
		service['handleShortcut'](event);
		expect(drawingServiceSpy.new).toHaveBeenCalledTimes(1);
	});
	it('should call Save on MatDialog', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 's', ctrlKey: true, shiftKey: false });
		service['handleShortcut'](event);
		expect(matDialogSpy.open).toHaveBeenCalled();
	});
	it('should call Carrousel on MatDialog', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'g', ctrlKey: true, shiftKey: false });
		drawingServiceSpy.isEmpty.and.returnValue(true);
		service['handleShortcut'](event);
		expect(drawingServiceSpy.initCanvas).toHaveBeenCalled();
		drawingServiceSpy.isEmpty.and.returnValue(false);
		service['handleShortcut'](event);
		expect(drawingServiceSpy.initCanvas).toHaveBeenCalledTimes(2);
		matDialogSpy.open.and.returnValue(dialogRefSpyFalse);
		service['handleShortcut'](event);
		expect(drawingServiceSpy.initCanvas).toHaveBeenCalledTimes(2);
	});
	it('should call drawingService undo()', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Z', ctrlKey: true, shiftKey: false });
		service['handleShortcut'](event);
		expect(drawingServiceSpy.undo).toHaveBeenCalled();
	});
	it('should not call drawingService undo or redo', () => {
		toolServiceSpy.currentTool.info.name = 'selection';
		service['handleShortcut'](Global.UNDO_EVENT);
		expect(drawingServiceSpy.undo).not.toHaveBeenCalled();
		service['handleShortcut'](Global.REDO_EVENT);
		expect(drawingServiceSpy.redo).not.toHaveBeenCalled();
	});
	it('should not call disableShortcut on empty canvas', () => {
		drawingServiceSpy.isEmpty.and.returnValue(true);
		spyOn(service, 'disableShortcuts').and.callFake(() => {});
		service.exportWrapper();
		expect(service.disableShortcuts).not.toHaveBeenCalled();
		service['openWrapper']();
		expect(service.disableShortcuts).not.toHaveBeenCalled();
	});
	it('should not toggle view', () => {
		service.toggleView('t');
		expect(toolServiceSpy.getService).not.toHaveBeenCalled();
	});
	it('should call drawingService redo()', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Z', ctrlKey: true, shiftKey: true });
		service['handleKeydown'](event);
		expect(drawingServiceSpy.redo).toHaveBeenCalled();
	});
	it('should call changeTool on keydown if tool has not begun drawing', () => {
		const eventC = new KeyboardEvent('keydown', { key: Shortcut.CRAYON });
		toolServiceSpy.hasBegunDrawing.and.returnValue(false);
		service['handleKeydown'](eventC);
		expect(toolServiceSpy.changeTool).toHaveBeenCalled();
		expect(toolServiceSpy.changeTool).toHaveBeenCalledWith(Shortcut.CRAYON);
		const eventL = new KeyboardEvent('keydown', { key: Shortcut.LIGNE });
		service['handleKeydown'](eventL);
		expect(toolServiceSpy.changeTool).toHaveBeenCalled();
		expect(toolServiceSpy.changeTool).toHaveBeenCalledWith(Shortcut.LIGNE);
	});
	it('should call handleshortcut', () => {
		const eventC = new KeyboardEvent('keydown', { key: Shortcut.CRAYON, shiftKey: true });
		spyOn<any>(service, 'handleShortcut');
		service['handleKeydown'](eventC);
		expect(service['handleShortcut']).toHaveBeenCalledWith(eventC);
	});
	it('should addAction when the service is a selection and the value is not a selection service', () => {
		toolServiceSpy.isValidToolKey.and.callThrough().and.returnValue(true);
		rectangleSelectionServiceSpy.info = new ToolInfo('rectangle-selection', '', 'r');
		toolServiceSpy.currentTool = rectangleSelectionServiceSpy;
		service['handleKeydown'](new KeyboardEvent('keydown', { key: Shortcut.CRAYON, ctrlKey: false }));
		expect(drawingServiceSpy.addAction).toHaveBeenCalled();
	});
	it('should not call anything', () => {
		const eventC = new KeyboardEvent('keydown', { key: Shortcut.CRAYON, shiftKey: true });
		service['handleShortcut'](eventC);
		expect(matDialogSpy.open).not.toHaveBeenCalled();
		expect(drawingServiceSpy.undo).not.toHaveBeenCalled();
		expect(drawingServiceSpy.redo).not.toHaveBeenCalled();
	});
	it('should get target', () => {
		const event: MouseEvent = Global.mouseMoveEvent;
		const target = {} as Element;
		Object.defineProperty(event, 'target', { value: target });
		expect(service['getTarget'](event)).toEqual(event.target as Element);
	});
	it('should enable and disable right event listeners when startDrawing', () => {
		const removeSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const currentToolMouseDownSpy = spyOn(toolServiceSpy.currentTool, 'onMouseDown').and.callFake(() => {});
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service.startDrawing(mouseEvent);
		expect(removeSpy).toHaveBeenCalledWith('keydown', service['handleKeydown']);
		expect(addSpy).toHaveBeenCalledWith('mouseup', service['onMouseUp']);
		expect(addSpy).toHaveBeenCalledWith('keydown', service['onKeyDown']);
		expect(currentToolMouseDownSpy).toHaveBeenCalled();
	});
	it('should not call onMouseDown of currentTool', () => {
		toolServiceSpy.hasBegunDrawing.and.returnValue(true);
		const onMouseDownSpy = spyOn(toolServiceSpy.currentTool, 'onMouseDown').and.callFake(() => {});
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service.startDrawing(mouseEvent);
		expect(onMouseDownSpy).not.toHaveBeenCalled();
	});
	it('should call disable shortcut on export', () => {
		drawingServiceSpy.isEmpty.and.returnValue(false);
		spyOn(service, 'disableShortcuts').and.callFake(() => {});
		service.exportWrapper();
		expect(service.disableShortcuts).toHaveBeenCalled();
	});
	it('should change tool when clicking on previewLayer with current tool shiftSelection', () => {
		shiftSelectionServiceSpy.info = new ToolInfo('shift-selection', '', '');
		resizeSelectionServiceSpy.info = new ToolInfo('resize-selection', '', '');
		rectangleSelectionServiceSpy.info = new ToolInfo('', '', '');
		shiftSelectionServiceSpy.selector = rectangleSelectionServiceSpy;
		resizeSelectionServiceSpy.selector = rectangleSelectionServiceSpy;
		toolServiceSpy.currentTool = shiftSelectionServiceSpy;
		spyOn<any>(service, 'getTarget').and.returnValue({ id: 'previewLayer' } as Element);
		const mouseEvent = new MouseEvent('');
		toolServiceSpy.currentTool = shiftSelectionServiceSpy;
		service.startDrawing(mouseEvent);
		expect(toolServiceSpy.changeTool).toHaveBeenCalled();
		toolServiceSpy.currentTool = resizeSelectionServiceSpy;
		service.startDrawing(mouseEvent);
		expect(toolServiceSpy.changeTool).toHaveBeenCalled();
	});
	it('should call exportWrapper', () => {
		spyOn(service, 'exportWrapper').and.callFake(() => {});
		service['handleShortcut'](Global.EXPORT_EVENT);
		expect(service.exportWrapper).toHaveBeenCalled();
	});
	it('should call onMouseMove of currentTool', () => {
		const currentToolMouseMoveSpy = spyOn(toolServiceSpy.currentTool, 'onMouseMove').and.callFake(() => {});
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service.onMouseMove(mouseEvent);
		expect(currentToolMouseMoveSpy).toHaveBeenCalled();
	});
	it('should call onWheel of currentTool', () => {
		const currentToolWheelSpy = spyOn(toolServiceSpy.currentTool, 'onWheel').and.callFake(() => {});
		const mouseEvent = {} as WheelEvent;
		service.onWheel(mouseEvent);
		expect(currentToolWheelSpy).toHaveBeenCalled();
	});
	it('should enable and disable right event listeners when mouseUp and not lineService', () => {
		const removeSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const currentToolMouseUpSpy = spyOn(toolServiceSpy.currentTool, 'onMouseUp').and.callFake(() => {});
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service['onMouseUp'](mouseEvent);
		expect(addSpy).toHaveBeenCalledWith('keydown', service['handleKeydown']);
		expect(removeSpy).toHaveBeenCalledWith('mouseup', service['onMouseUp']);
		expect(removeSpy).toHaveBeenCalledWith('keydown', service['onKeyDown']);
		expect(addSpy).not.toHaveBeenCalledWith('dblclick', service['onDoubleClick']);
		expect(currentToolMouseUpSpy).toHaveBeenCalled();
	});
	it('should enable and disable right event listeners when mouseUp and lineService', () => {
		toolServiceSpy.currentTool = new LineService(drawingServiceSpy);
		const removeSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const currentToolMouseUpSpy = spyOn(toolServiceSpy.currentTool, 'onMouseUp').and.callFake(() => {});
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service['onMouseUp'](mouseEvent);
		expect(addSpy).not.toHaveBeenCalledWith('keydown', service['handleKeydown']);
		expect(removeSpy).toHaveBeenCalledWith('mouseup', service['onMouseUp']);
		expect(removeSpy).not.toHaveBeenCalledWith('keydown', service['onKeyDown']);
		expect(addSpy).toHaveBeenCalledWith('dblclick', service['onDoubleClick']);
		expect(currentToolMouseUpSpy).toHaveBeenCalled();
	});
	it('should enable and disable right event listeners when dblClick and lineService', () => {
		toolServiceSpy.currentTool = new LineService(drawingServiceSpy);
		const removeSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const currentToolDoubleClickSpy = spyOn(toolServiceSpy.currentTool, 'onDoubleClick').and.callFake(() => {});
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service['onDoubleClick'](mouseEvent);
		expect(addSpy).toHaveBeenCalledWith('keydown', service['handleKeydown']);
		expect(removeSpy).toHaveBeenCalledWith('keydown', service['onKeyDown']);
		expect(removeSpy).toHaveBeenCalledWith('dblclick', service['onDoubleClick']);
		expect(currentToolDoubleClickSpy).toHaveBeenCalled();
	});
	it('should not add event listener on doubleclick if tool is lasso', () => {
		const tool = new LassoSelectionService(drawingServiceSpy);
		tool.info.name = 'lasso';
		toolServiceSpy.currentTool = tool;
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		service['onMouseUp'](mouseEvent);
		expect(addSpy).not.toHaveBeenCalled();
	});
	it('should send keyUp to toolService', () => {
		service['isKeyDown'] = true;
		const removeSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		const event: KeyboardEvent = new KeyboardEvent('keydown', { key: 'z', shiftKey: true, ctrlKey: true });
		service['onKeyUp'](event);
		expect(removeSpy).toHaveBeenCalledWith('keyup', service['onKeyUp']);
		expect(toolServiceSpy.handleCommand).toHaveBeenCalledWith(event, false);
		expect(service['isKeyDown']).toBeFalsy();
	});
	it('should not send keyUp to toolService', () => {
		service['isKeyDown'] = false;
		const removeSpy = spyOn(document.body, 'removeEventListener').and.callThrough();
		const event: KeyboardEvent = new KeyboardEvent('keydown', { key: 'z', shiftKey: true, ctrlKey: true });
		service['onKeyUp'](event);
		expect(removeSpy).toHaveBeenCalledWith('keyup', service['onKeyUp']);
		expect(toolServiceSpy.handleCommand).not.toHaveBeenCalled();
		expect(service['isKeyDown']).toBeFalsy();
	});
	it('should send keyDown to toolService', () => {
		service['isKeyDown'] = false;
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const event: KeyboardEvent = new KeyboardEvent('keydown', { key: 'z', shiftKey: true, ctrlKey: true });
		service['onKeyDown'](event);
		expect(addSpy).toHaveBeenCalledWith('keyup', service['onKeyUp']);
		expect(toolServiceSpy.handleCommand).toHaveBeenCalledWith(event, true);
		expect(service['isKeyDown']).toBeTruthy();
	});
	it('should not send keyDown to toolService', () => {
		service['isKeyDown'] = true;
		const addSpy = spyOn(document.body, 'addEventListener').and.callThrough();
		const event: KeyboardEvent = new KeyboardEvent('keydown', { key: 'z', shiftKey: true, ctrlKey: true });
		service['onKeyDown'](event);
		expect(addSpy).toHaveBeenCalledWith('keyup', service['onKeyUp']);
		expect(toolServiceSpy.handleCommand).not.toHaveBeenCalled();
		expect(service['isKeyDown']).toBeTruthy();
	});
	it('should not prevent default F12 event', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'F12', shiftKey: false });
		spyOn(event, 'preventDefault');
		service['handleKeydown'](event);
		expect(event.preventDefault).not.toHaveBeenCalled();
	});
	it('should not call change tool with ctrl-', () => {
		const event: KeyboardEvent = new KeyboardEvent('keydown', { key: 'a', shiftKey: false, ctrlKey: true });
		service['handleKeydown'](event);
		expect(toolServiceSpy.changeTool).toHaveBeenCalledWith('ctrl-a');
	});
});
