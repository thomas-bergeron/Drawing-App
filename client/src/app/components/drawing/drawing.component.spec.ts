import { DragDropModule } from '@angular/cdk/drag-drop';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { PencilService } from '@app/services/tools/pencil.service';
import { Global, MouseEnum } from '@app/shared/global';
import { DrawingComponent } from './drawing.component';

describe('DrawingComponent', () => {
	let component: DrawingComponent;
	let fixture: ComponentFixture<DrawingComponent>;
	let eventManagerServiceSpy: jasmine.SpyObj<EventManagerService>;
	let pencilToolSpy: jasmine.SpyObj<PencilService>;
	let drawingStub: DrawingService;

	beforeEach(async(() => {
		eventManagerServiceSpy = jasmine.createSpyObj('EventManagerService', ['startDrawing']);
		pencilToolSpy = jasmine.createSpyObj('PencilService', ['onMouseMove', 'onMouseDown', 'onMouseUp', 'onDoubleClick']);
		drawingStub = new DrawingService(new CommandManagerService());
		// tslint:disable:no-string-literal
		// tslint:disable:no-empty
		TestBed.configureTestingModule({
			declarations: [DrawingComponent],
			imports: [DragDropModule],
			providers: [
				{ provide: EventManagerService, useValue: eventManagerServiceSpy },
				{ provide: PencilService, useValue: pencilToolSpy },
				{ provide: DrawingService, useValue: drawingStub },
				CommandManagerService,
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DrawingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(' should return canvasPreview', () => {
		component.canvasResizePreview = { x: Global.DUMMY_SIZE, y: Global.DUMMY_SIZE };
		expect(component.canvasPreview).toEqual(component.canvasResizePreview);
	});

	it(' should set resizing to true', () => {
		component.isResizing = false;
		component.startPreview();
		expect(component.isResizing).toEqual(true);
	});

	it(' should resize the canvasPreview', () => {
		component.preview(Global.DUMMY_SIZE, Global.DUMMY_SIZE);
		expect(component.canvasResizePreview.x).toBe(component.canvasSize.x + Global.DUMMY_SIZE);
		expect(component.canvasResizePreview.y).toBe(component.canvasSize.y + Global.DUMMY_SIZE);
	});

	it(' should end the Preview and set the canvas correct values', () => {
		component.preview(Global.DUMMY_SIZE, Global.DUMMY_SIZE);
		component.endPreview();
		expect(component.baseCanvas.nativeElement.width).toEqual(component.canvasResizePreview.x);
		expect(component.baseCanvas.nativeElement.height).toEqual(component.canvasResizePreview.y);
		expect(component.previewCanvas.nativeElement.width).toEqual(component.canvasResizePreview.x);
		expect(component.previewCanvas.nativeElement.height).toEqual(component.canvasResizePreview.y);
	});

	it('should call add action', () => {
		spyOn(drawingStub, 'addAction').and.callFake(() => {
			return;
		});
		component.endPreview();
		expect(drawingStub.addAction).toHaveBeenCalled();
	});

	it("should call eventManager's startDrawing()", () => {
		component.isResizing = false;
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		component.onMouseDown(mouseEvent);
		expect(eventManagerServiceSpy.startDrawing).toHaveBeenCalled();
	});

	it("should not call eventManager's startDrawing()", () => {
		component.isResizing = true;
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		component.onMouseDown(mouseEvent);
		expect(eventManagerServiceSpy.startDrawing).not.toHaveBeenCalled();
	});

	it('should call place resize', () => {
		spyOn(component['drawingService'], 'placeResizeButton').and.callFake(() => {});
		const img = new Image();
		component.actionWrapper(img, '', { x: 1, y: 1 });
		expect(component['drawingService'].placeResizeButton).toHaveBeenCalled();
	});
});
