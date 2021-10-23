import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolInfo } from '@app/classes/tool-info';
import { ClipboardService } from '@app/services/clipboard/clipboard.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { GridService } from '@app/services/grid/grid.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ResizeSelectionService } from '@app/services/selection/resize-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { PencilService } from '@app/services/tools/pencil.service';
import { ToolService } from '@app/services/tools/tool.service';
import { Shortcut } from '@app/shared/global';
import { BehaviorSubject, of } from 'rxjs';
import { AttributesPanelModule } from 'src/app/components/attributes-panel/attributes-panel.module';
import { CarrouselModule } from 'src/app/components/carrousel/carrousel.module';
import { SidebarComponent } from './sidebar.component';
describe('SidebarComponent', () => {
	let component: SidebarComponent;
	let fixture: ComponentFixture<SidebarComponent>;
	let toolServiceSpy: jasmine.SpyObj<ToolService>;
	let matDialogSpy: jasmine.SpyObj<MatDialog>;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;
	let rectangleSelectionServiceSpy: jasmine.SpyObj<RectangleSelectionService>;
	let eventManagerSpy: jasmine.SpyObj<EventManagerService>;
	let clipboardSpy: jasmine.SpyObj<ClipboardService>;
	let shiftSelectionStub: ShiftSelectionService;
	let resizeSelectionStub: ResizeSelectionService;

	beforeEach(async(() => {
		toolServiceSpy = jasmine.createSpyObj(
			'ToolService',
			[
				'currentTool',
				'changeTool',
				'handleTool',
				'changeLimitSizeCallSource',
				'hasBegunDrawing',
				'handleCommand',
				'toolMap',
				'isToolActive',
				'magnetIsActive',
			],
			['lineService', clipboardSpy],
		);
		clipboardSpy = jasmine.createSpyObj('ClipboardService', ['handleCommand'], ['canPaste']);
		matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', [
			'isEmpty',
			'new',
			'undoIsReady',
			'redoIsReady',
			'undo',
			'redo',
			'clearCanvas',
			'addAction',
			'initCanvas',
		]);
		rectangleSelectionServiceSpy = jasmine.createSpyObj(
			'RectangleSelectionService',
			['callPlaceBox', 'handleCommand'],
			['placeBox$', 'isShifting'],
		);
		eventManagerSpy = jasmine.createSpyObj('EventManagerService', [
			'handleKeydown',
			'disableShortcuts',
			'enableShortcuts',
			'toggleView',
			'exportWrapper',
		]);

		TestBed.configureTestingModule({
			imports: [
				MatButtonToggleModule,
				AttributesPanelModule,
				MatTooltipModule,
				MatSelectModule,
				MatMenuModule,
				FormsModule,
				HttpClientTestingModule,
				MatButtonModule,
				NoopAnimationsModule,
				MatDialogModule,
				CarrouselModule,
			],
			declarations: [SidebarComponent],
			providers: [
				{ provide: MatDialog, useValue: matDialogSpy },
				{ provide: ToolService, useValue: toolServiceSpy },
				{ provide: DrawingService, useValue: drawingServiceSpy },
				{ provide: RectangleSelectionService, useValue: rectangleSelectionServiceSpy },
				{ provide: EventManagerService, useValue: eventManagerSpy },
				{ provide: ClipboardService, useValue: clipboardSpy },
			],
		}).compileComponents();
		toolServiceSpy.currentTool = new PencilService(drawingServiceSpy);
		toolServiceSpy.changeLimitSizeCallSource = new BehaviorSubject<number>(0);
		toolServiceSpy.changeLimitSize$ = toolServiceSpy.changeLimitSizeCallSource.asObservable();
		// tslint:disable: no-string-literal
		toolServiceSpy['toolMap'] = new Map();
		toolServiceSpy['toolMap'].set(Shortcut.RECT_SELECTION, rectangleSelectionServiceSpy);
		toolServiceSpy.clipboardService = new ClipboardService(drawingServiceSpy);

		shiftSelectionStub = new ShiftSelectionService(drawingServiceSpy, new MagnetService(new GridService(drawingServiceSpy)));
		resizeSelectionStub = new ResizeSelectionService(drawingServiceSpy);
		shiftSelectionStub.selector = rectangleSelectionServiceSpy;
		resizeSelectionStub.selector = rectangleSelectionServiceSpy;
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should call toggle view if shortcut is g', () => {
		component.toggleDrawingOptions('g');
		expect(eventManagerSpy.toggleView).toHaveBeenCalledWith('g');
	});
	it('should not call toggle view if shortcut is not g', () => {
		component.toggleDrawingOptions('z');
		expect(eventManagerSpy.toggleView).not.toHaveBeenCalled();
	});

	it('should call dialog.open if there is drawing for openModal', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(false);
		component.openModal();
		expect(drawingServiceSpy.initCanvas).toHaveBeenCalled();
	});
	it('should call dialog.open and init canvas', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(true);
		component.openModal();
		expect(drawingServiceSpy.initCanvas).toHaveBeenCalled();
	});
	it('should call dialog.open and not init canvas', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(false), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(false);
		component.openModal();
		expect(drawingServiceSpy.initCanvas).not.toHaveBeenCalled();
	});

	it('should call dialog.open on openExport', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		eventManagerSpy.exportWrapper.and.returnValue();
		component.openExport();
		expect(eventManagerSpy.exportWrapper).toHaveBeenCalled();
	});

	it('should call drawing service undo', () => {
		component.undo();
		expect(drawingServiceSpy.undo).toHaveBeenCalled();
	});
	it('should call drawing service redo', () => {
		component.redo();
		expect(drawingServiceSpy.redo).toHaveBeenCalled();
	});

	it('should call initcanvas if there is no drawing for openModal', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(true);
		component.openModal();
		expect(matDialogSpy.open).toHaveBeenCalled();
	});
	it('should open the modal on new drawing with canvas non null', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(false);
		component.newDrawing();
		expect(drawingServiceSpy.new).toHaveBeenCalled();
	});
	it('should open the modal on new drawing with canvas non null and not do new drawing', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(false), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(false);
		component.newDrawing();
		expect(drawingServiceSpy.new).not.toHaveBeenCalled();
	});
	it('should do nothing if the canvas is null', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		drawingServiceSpy.isEmpty.and.returnValue(true);
		component.newDrawing();
		expect(drawingServiceSpy.new).not.toHaveBeenCalled();
	});

	it('should call dialog.open for openSaving', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(), close: true });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		component.openSaving();
		expect(matDialogSpy.open).toHaveBeenCalled();
	});

	it('should call change tool', () => {
		component.valueChange('c');
		expect(toolServiceSpy.currentTool.info.shortcut).toBe('c');
	});

	it('should verify if is active tool', () => {
		expect(component.verifyValue('c')).toBeTruthy();
		expect(component.verifyValue('alllo')).toBeFalsy();
	});

	it('runShortcut should changeTool', () => {
		component.runShortcut('');
		expect(toolServiceSpy.changeTool).toHaveBeenCalled();
	});

	it('runShortcut should addAction when the service is a selection and the value is not a selection service', () => {
		rectangleSelectionServiceSpy.info = new ToolInfo('rectangle-selection', '', 'r');
		component.toolService.currentTool = rectangleSelectionServiceSpy;
		component.runShortcut(Shortcut.CRAYON);
		expect(drawingServiceSpy.addAction).toHaveBeenCalled();
	});

	it('handleClipboard should call handlecommand of clipboard with command 0 when tool is not selection', () => {
		component.toolService.clipboardService = clipboardSpy;
		component.toolService.currentTool = new PencilService(drawingServiceSpy);
		component.handleClipboard('');
		expect(clipboardSpy.handleCommand).toHaveBeenCalledWith('', 0);
	});

	it('handleClipboard should call handlecommand of clipboard with command 1 when tool is selection', () => {
		component.toolService.clipboardService = clipboardSpy;
		component.toolService.currentTool = rectangleSelectionServiceSpy;
		component.handleClipboard('');
		expect(clipboardSpy.handleCommand).toHaveBeenCalledWith('', 1);
	});

	it('selectionIsActive should return true if currentTool is a selectionService and has an active selection', () => {
		rectangleSelectionServiceSpy.isActiveSelection = true;
		component.toolService.currentTool = rectangleSelectionServiceSpy;
		component.toolService.currentTool.isDrawing = true;
		expect(component.selectionIsActive()).toEqual(true);
	});

	it('selectionIsActive should return true if currentTool is a shiftSelection and has an active selection', () => {
		rectangleSelectionServiceSpy.isActiveSelection = true;
		component.toolService.currentTool = shiftSelectionStub;
		component.toolService.currentTool.isDrawing = true;
		expect(component.selectionIsActive()).toEqual(true);
	});

	it('selectionIsActive should return true if currentTool is a resizeSelection and has an active selection', () => {
		rectangleSelectionServiceSpy.isActiveSelection = true;
		component.toolService.currentTool = resizeSelectionStub;
		component.toolService.currentTool.isDrawing = true;
		expect(component.selectionIsActive()).toEqual(true);
	});

	it('selectionIsActive should return false if currentTool is not a selectionService and is not drawing', () => {
		component.toolService.currentTool = new PencilService(drawingServiceSpy);
		component.toolService.currentTool.isDrawing = true;
		expect(component.selectionIsActive()).toEqual(false);
	});
});
