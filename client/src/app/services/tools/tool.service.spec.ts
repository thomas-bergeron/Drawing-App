import { TestBed } from '@angular/core/testing';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { GridService } from '@app/services/grid/grid.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { EllipseSelectionService } from '@app/services/selection/ellipse-selection.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { SurfaceSelectionService } from '@app/services/selection/surface-selection.service';
import { Global, Shortcut } from '@app/shared/global';
import { EllipseService } from './ellipse.service';
import { EraserService } from './eraser.service';
import { LineService } from './line.service';
import { PencilService } from './pencil.service';
import { PolygoneService } from './polygone.service';
import { RectangleService } from './rectangle.service';
import { ToolService } from './tool.service';

describe('ToolService', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	let service: ToolService;
	let eraserServiceSpy: jasmine.SpyObj<EraserService>;
	let pencilServiceSpy: jasmine.SpyObj<PencilService>;
	let lineServiceSpy: jasmine.SpyObj<LineService>;
	let drawingServiceStub: DrawingService;
	let rectangleServiceSpy: jasmine.SpyObj<RectangleService>;
	let rectangleSelectionServiceSpy: jasmine.SpyObj<RectangleSelectionService>;
	let ellipseServiceSpy: jasmine.SpyObj<EllipseService>;
	let ellipseSelectionServiceSpy: jasmine.SpyObj<EllipseSelectionService>;
	let polygoneServiceSpy: jasmine.SpyObj<PolygoneService>;
	let gridServiceSpy: jasmine.SpyObj<GridService>;
	let surfaceSelectionServiceSpy: jasmine.SpyObj<SurfaceSelectionService>;
	let shiftSelectionServiceSpy: jasmine.SpyObj<ShiftSelectionService>;
	let resizeSelectionServiceSpy: jasmine.SpyObj<ResizeSelectionService>;
	let magnetSpy: jasmine.SpyObj<MagnetService>;
	let changeToolSpy: jasmine.Spy;
	let nextSpy: jasmine.Spy;
	let canvasTestHelper: CanvasTestHelper;

	beforeEach(() => {
		eraserServiceSpy = jasmine.createSpyObj('EraserService', ['getDrawingService'], ['']);
		pencilServiceSpy = jasmine.createSpyObj('PencilService', [''], ['']);
		lineServiceSpy = jasmine.createSpyObj('LineService', ['handleCommand', 'getDrawingService'], ['']);
		polygoneServiceSpy = jasmine.createSpyObj('PolygoneService', [''], ['']);
		ellipseServiceSpy = jasmine.createSpyObj('EllipseService', [''], ['']);
		ellipseSelectionServiceSpy = jasmine.createSpyObj('EllipseSelectionService', [''], ['']);
		rectangleServiceSpy = jasmine.createSpyObj('RectangleService', [''], ['']);
		rectangleSelectionServiceSpy = jasmine.createSpyObj('RectangleSelectionService', ['getDrawingService', 'callPlaceBox'], ['placeBox$']);
		surfaceSelectionServiceSpy = jasmine.createSpyObj('SurfaceSelectionService', ['getDrawingService'], ['']);
		shiftSelectionServiceSpy = jasmine.createSpyObj('ShiftSelectionService', ['getDrawingService', 'endSelection'], ['']);
		resizeSelectionServiceSpy = jasmine.createSpyObj('ResizeSelectionService', ['getDrawingService', 'endSelection'], ['']);
		magnetSpy = jasmine.createSpyObj('MagnetService', ['toggleIsActive'], ['']);
		gridServiceSpy = jasmine.createSpyObj('GridService', ['toggleGrid', 'getDrawingService', 'updateSize'], ['']);

		TestBed.configureTestingModule({
			providers: [
				{ provide: EraserService, useValue: eraserServiceSpy },
				{ provide: PencilService, useValue: pencilServiceSpy },
				{ provide: LineService, useValue: lineServiceSpy },
				{ provide: RectangleService, useValue: rectangleServiceSpy },
				{ provide: RectangleSelectionService, useValue: rectangleSelectionServiceSpy },
				{ provide: EllipseService, useValue: ellipseServiceSpy },
				{ provide: EllipseSelectionService, useValue: ellipseSelectionServiceSpy },
				{ provide: SurfaceSelectionService, useValue: surfaceSelectionServiceSpy },
				{ provide: ShiftSelectionService, useValue: shiftSelectionServiceSpy },
				{ provide: ResizeSelectionService, useValue: resizeSelectionServiceSpy },
				{ provide: PolygoneService, useValue: polygoneServiceSpy },
				{ provide: GridService, useValue: gridServiceSpy },
				{ provide: MagnetService, useValue: magnetSpy },
			],
		}).compileComponents();

		canvasTestHelper = TestBed.inject(CanvasTestHelper);
		drawingServiceStub = TestBed.inject(DrawingService);
		drawingServiceStub.previewCtx = canvasTestHelper.drawCanvas.getContext('2d') as CanvasRenderingContext2D;

		eraserServiceSpy.info = new ToolInfo('eraser', 'Efface', 'e');
		pencilServiceSpy.info = new ToolInfo('pencil', 'Crayon', 'c');
		lineServiceSpy.info = new ToolInfo('line', 'Ligne', 'l');
		rectangleServiceSpy.info = new ToolInfo('rectangle', 'Rectangle', '1');
		rectangleSelectionServiceSpy.info = new ToolInfo('rectangle-selection', 'Sélection en rectangle', 'r');
		gridServiceSpy.info = new ToolInfo('grille', 'Grille', 'g');
		ellipseServiceSpy.info = new ToolInfo('ellipse', 'Ellipse', '2');
		ellipseSelectionServiceSpy.info = new ToolInfo('ellipse-selection', 'Sélection en ellipse', 's');
		surfaceSelectionServiceSpy.info = new ToolInfo('surface-selection', 'Sélection de la surface', 'ctrl-a');
		surfaceSelectionServiceSpy.info = new ToolInfo('shift-selection', 'Déplacement de selection', 'shiftSelection');
		shiftSelectionServiceSpy.info = new ToolInfo('shift-selection', '', 'shiftSelection');
		resizeSelectionServiceSpy.info = new ToolInfo('resize-selection', '', 'resizeSelection');
		polygoneServiceSpy.info = new ToolInfo('polygone', 'Polygone', '3');

		// tslint:disable:no-string-literal
		lineServiceSpy['drawingService'] = drawingServiceStub;
		eraserServiceSpy['drawingService'] = drawingServiceStub;
		rectangleServiceSpy.info = new ToolInfo('rectangle', 'Rectangle', '1');
		ellipseServiceSpy.info = new ToolInfo('ellipse', 'Ellipse', '2');
		pencilServiceSpy.options = new ToolOption(0);
		lineServiceSpy.options = new ToolOption(0, true);
		rectangleServiceSpy.options = new ToolOption(0);
		polygoneServiceSpy.options = new ToolOption(0);
		gridServiceSpy.options = new ToolOption(undefined, undefined, undefined, undefined, true);

		service = TestBed.inject(ToolService);
		changeToolSpy = spyOn(service, 'changeTool').and.callThrough();
		nextSpy = spyOn(service.changeLimitSizeCallSource, 'next').and.callThrough();
		spyOn<any>(service, 'callChangeCurrentSelectionMode').and.callThrough();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should change tool to pencil', () => {
		service.changeTool(Shortcut.CRAYON);
		expect(service.currentTool).toEqual(pencilServiceSpy);
	});
	it('should call isToolActive', () => {
		spyOn(service, 'isToolActive').and.returnValue(false);
		spyOn(service, 'hasBegunDrawing').and.returnValue(true);
		gridServiceSpy.getDrawingService.and.returnValue(drawingServiceStub);
		service.changeTool('g');
		expect(service.isToolActive).toHaveBeenCalled();
	});
	it('should call toggleGrid', () => {
		spyOn(service, 'isToolActive').and.returnValue(true);
		service.changeTool('g');
		expect(gridServiceSpy.toggleGrid).toHaveBeenCalled();
	});

	it('should return if grid is active', () => {
		service.currentTool = gridServiceSpy;
		gridServiceSpy.options.gridOptions.isActive = true;
		expect(service.isToolActive('g')).toBeTruthy();
	});
	it('should return if tool is active', () => {
		service.currentTool = pencilServiceSpy;
		expect(service.isToolActive(pencilServiceSpy.info.shortcut)).toBeTruthy();
	});
	it('should call updateSize', () => {
		service.updateGridSize(Global.MIN_SQUARE_SIZE);
		expect(gridServiceSpy.updateSize).toHaveBeenCalled();
	});
	it('should change tool to line', () => {
		lineServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		service.changeTool(Shortcut.LIGNE);
		expect(service.currentTool).toEqual(lineServiceSpy);
	});
	it('should change tool to eraser', () => {
		eraserServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		service.changeTool(Shortcut.EFFACE);
		expect(service.currentTool).toEqual(eraserServiceSpy);
	});

	it('should get service', () => {
		expect(service.getService(Shortcut.CRAYON).info.shortcut).toEqual(Shortcut.CRAYON);
	});

	it('should call currentTool handlecommand implementation', () => {
		const command = {} as KeyboardEvent;
		service.currentTool = lineServiceSpy;
		service.handleCommand(command, true);
		expect(service.currentTool.handleCommand).toHaveBeenCalled();
		expect(service.currentTool.handleCommand).toHaveBeenCalledWith(command, true);
	});

	it('should not change current tool if tool name is not mapped', () => {
		lineServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		service.changeTool(Shortcut.LIGNE);
		service.changeTool('imaginary-tool');
		expect(service.currentTool).toEqual(lineServiceSpy);
	});

	it('should call only when endSelection when changing tools from shiftSelection or resizeSelection', () => {
		shiftSelectionServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		resizeSelectionServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		eraserServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		service.currentTool = shiftSelectionServiceSpy;
		service.changeTool(Global.SHIFT_SELECTION_SHORTCUT);
		service.changeTool(Shortcut.EFFACE);
		expect(shiftSelectionServiceSpy.endSelection).toHaveBeenCalled();
		service.changeTool(Global.RESIZE_SELECTION_SHORTCUT);
		service.changeTool(Shortcut.EFFACE);
		expect(resizeSelectionServiceSpy.endSelection).toHaveBeenCalled();
	});

	it('should callChangeSelectionMode when tool is changed to selection tool', () => {
		rectangleSelectionServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		service.changeTool(Shortcut.RECT_SELECTION);
		expect(service['callChangeCurrentSelectionMode']).toHaveBeenCalled();
	});

	it('should callPlaceBox when tool is a selector and not changed to shifter', () => {
		rectangleSelectionServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		eraserServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		service.currentTool = rectangleSelectionServiceSpy;
		service.currentTool.isDrawing = false;
		service.changeTool(Shortcut.EFFACE);
		expect(rectangleSelectionServiceSpy.callPlaceBox).toHaveBeenCalled();
	});

	it('should call changeTool if toolKey is valid shortcut and call with appropriate name', () => {
		lineServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);
		eraserServiceSpy.getDrawingService.and.callThrough().and.returnValue(drawingServiceStub);

		service.changeTool(Shortcut.CRAYON);
		expect(changeToolSpy).toHaveBeenCalled();
		expect(changeToolSpy).toHaveBeenCalledWith(Shortcut.CRAYON);
		service.changeTool(Shortcut.LIGNE);
		expect(changeToolSpy).toHaveBeenCalled();
		expect(changeToolSpy).toHaveBeenCalledWith(Shortcut.LIGNE);
		service.changeTool(Shortcut.EFFACE);
		expect(changeToolSpy).toHaveBeenCalled();
		expect(changeToolSpy).toHaveBeenCalledWith(Shortcut.EFFACE);
	});

	it('changeTool should call toggleIsActive when the key is m', () => {
		service.changeTool('m');
		expect(magnetSpy.toggleIsActive).toHaveBeenCalled();
	});

	it('should call changeLimitSize from the Attribute Panel', () => {
		const newMinSize = 1;
		service.callChangeLimitSize(newMinSize);
		expect(nextSpy).toHaveBeenCalled();
	});

	it('should return true if key is within map', () => {
		expect(service.isValidToolKey(Shortcut.CRAYON)).toEqual(true);
	});

	it('should return false', () => {
		expect(service.hasBegunDrawing()).not.toBeTruthy();
	});

	it('magnetIsActive should return the value of magnetIsActive', () => {
		service.magnetService.isActive = true;
		expect(service.magnetIsActive()).toEqual(true);
	});
});
