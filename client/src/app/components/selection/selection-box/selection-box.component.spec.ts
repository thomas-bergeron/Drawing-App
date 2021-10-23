import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { GridService } from '@app/services/grid/grid.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { Global } from '@app/shared/global';
import { SelectionBoxComponent } from './selection-box.component';

describe('SelectionBoxComponent', () => {
	let component: SelectionBoxComponent;
	let fixture: ComponentFixture<SelectionBoxComponent>;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let rectangleSelectionStub: RectangleSelectionService;
	let shiftSelectionStub: ShiftSelectionService;
	let element: HTMLElement;
	let condition: boolean;

	// tslint:disable: no-string-literal
	beforeEach(async(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['placeBoxButton']);
		element = document.createElement('div');
		spyOn(document, 'getElementById').and.callFake(() => {
			if (condition) {
				element.style.display = 'block';
				return element;
			} else {
				return (null as unknown) as HTMLElement;
			}
		});
		condition = true;

		TestBed.configureTestingModule({
			imports: [DragDropModule],
			declarations: [SelectionBoxComponent],
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		}).compileComponents();

		shiftSelectionStub = new ShiftSelectionService(
			new DrawingService(new CommandManagerService()),
			new MagnetService(new GridService(new DrawingService(new CommandManagerService()))),
		);
		rectangleSelectionStub = new RectangleSelectionService(new DrawingService(new CommandManagerService()), shiftSelectionStub);
		rectangleSelectionStub.origin = Global.TEST_VECTOR;

		spyOn(shiftSelectionStub, 'handleCommandMap').and.callFake(() => {
			return;
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectionBoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		spyOn(component.toolService, 'changeTool').and.callFake(() => {
			return;
		});
		spyOn(component.toolService, 'handleCommand').and.callFake(() => {
			return;
		});
		spyOn(component['shiftSelection'], 'handleMouseDown').and.callFake(() => {
			return;
		});
		spyOn(component['shiftSelection'], 'onMouseUp').and.callFake(() => {
			return;
		});
		spyOn(component['resizeSelectionService'], 'resize').and.callFake(() => {
			return { x: 0, y: 0 };
		});
		spyOn(component, 'changeBoxSize').and.callThrough();

		component['size'] = component['sign'] = component['newSize'] = component['oldSize'] = { x: 100, y: 100 };
		component['resizeSelectionService'].selector = rectangleSelectionStub;
		jasmine.clock().install();
	});

	afterEach(() => {
		jasmine.clock().uninstall();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change box size when called', () => {
		const delta = Global.TEST_VECTOR;
		component.changeBoxSize(delta);
		expect(component['size']).toEqual(Global.TEST_VECTOR);
	});

	it('should not change to negative size', () => {
		const delta = Global.NEGATIVE_TEST_VECTOR;
		component.changeBoxSize(delta);
		expect(component['size']).toEqual({ x: 100, y: 100 });
	});

	it('place box should call placeBoxButton', () => {
		const origin = Global.TEST_VECTOR;
		component.placeBox(origin);
		expect(drawServiceSpy.placeBoxButton).toHaveBeenCalled();
	});

	it('place box should set the box display to block', () => {
		const origin = Global.TEST_VECTOR;
		component.placeBox(origin);
		expect(document.getElementById).toHaveBeenCalled();
		expect(element.style.display).toEqual('block');
	});

	it('place box should not change display if element does not exist', () => {
		const origin = Global.TEST_VECTOR;
		condition = false;
		element.style.display = '';
		component.placeBox(origin);
		expect(document.getElementById).toHaveBeenCalled();
		expect(element.style.display).not.toEqual('block');
	});

	it('should change the visibility to visible with a usual vector', () => {
		const origin = Global.TEST_VECTOR;
		component.placeBox(origin);
		const cpArray = document.getElementsByClassName('box-button');
		// tslint:disable-next-line: prefer-for-of
		for (let i = 0; i < cpArray.length; i++) {
			expect((cpArray[i] as HTMLElement).style.visibility).toEqual('visible');
		}
	});

	it('should change the visibility to hidden with reset vector', () => {
		const reset = Global.RESET_VECTOR;
		component.placeBox(reset);
		const cpArray = document.getElementsByClassName('box-button');
		// tslint:disable-next-line: prefer-for-of
		for (let i = 0; i < cpArray.length; i++) {
			expect((cpArray[i] as HTMLElement).style.visibility).toEqual('hidden');
		}
	});

	it('should add delta on boxLeft only when negative', () => {
		component['delta'] = { x: 1, y: 0 };
		component['position'] = Global.DEFAULT_VECTOR;
		expect(component.boxLeft).toEqual(Global.DEFAULT_VECTOR.x);

		component['delta'] = Global.RESET_VECTOR;
		component['position'] = Global.DEFAULT_VECTOR;
		expect(component.boxLeft).toEqual(Global.RESET_VECTOR.x + Global.DEFAULT_VECTOR.x);
	});

	it('should add delta on boxLeft only when negative', () => {
		component['delta'] = { x: 1, y: 0 };
		component['position'] = Global.DEFAULT_VECTOR;
		expect(component.boxTop).toEqual(Global.DEFAULT_VECTOR.y);

		component['delta'] = Global.RESET_VECTOR;
		component['position'] = Global.DEFAULT_VECTOR;
		expect(component.boxTop).toEqual(Global.RESET_VECTOR.y + Global.DEFAULT_VECTOR.y);
	});

	it('startPreview should change tool to resize and resize', () => {
		component.startPreview();
		expect(component.toolService.changeTool).toHaveBeenCalled();
		expect(component['resizeSelectionService'].resize).toHaveBeenCalled();
	});

	it('preview should resize and changeBoxSize', () => {
		component.preview(0, 0, '');
		expect(component['resizeSelectionService'].resize).toHaveBeenCalled();
		expect(component.changeBoxSize).toHaveBeenCalled();
	});

	it('should change the sign to the right value with preview', () => {
		component.shiftIsPressed = false;
		component['oldSize'] = { x: 100, y: 100 };
		component.preview(Global.TEST_DISTANCE, Global.TEST_DISTANCE, 'nw');
		expect(component['sign']).toEqual({ x: -1, y: -1 });
		component['oldSize'] = { x: 25, y: 25 };
		component.preview(Global.TEST_DISTANCE, Global.TEST_DISTANCE, '');
		expect(component['sign']).toEqual({ x: 1, y: 1 });
		component['resizeSelectionService'].shiftIsPressed = true;
		component['oldSize'] = { x: 200, y: 200 };
		component.preview(Global.TEST_DISTANCE, Global.TEST_DISTANCE, 'nw');
		expect(component['sign']).toEqual({ x: -2, y: -2 });
		component['oldSize'] = { x: 25, y: 25 };
		component.preview(Global.TEST_DISTANCE, Global.TEST_DISTANCE, '');
		expect(component['sign']).toEqual({ x: 2, y: 2 });
	});

	it('endPreview should resize and changeBoxSize', () => {
		component.endPreview();
		expect(component['resizeSelectionService'].resize).toHaveBeenCalled();
		expect(component.changeBoxSize).toHaveBeenCalled();
	});

	it('determineCondition should return based on tage and size comparison', () => {
		component['oldSize'] = { x: 100, y: 100 };
		expect(component['determineCondition']({ x: 150, y: 150 }, 'n', false).y).toEqual(1);
		expect(component['determineCondition']({ x: 50, y: 50 }, 'n', false).y).toEqual(0);
		expect(component['determineCondition']({ x: 150, y: 150 }, 'w', false).x).toEqual(1);
		expect(component['determineCondition']({ x: 50, y: 50 }, 'w', false).x).toEqual(0);
		expect(component['determineCondition']({ x: -150, y: -150 }, 's', false).y).toEqual(0);
		expect(component['determineCondition']({ x: -50, y: -50 }, 's', false).y).toEqual(1);
		expect(component['determineCondition']({ x: -150, y: -150 }, 'e', false).x).toEqual(0);
		expect(component['determineCondition']({ x: -50, y: -50 }, 'e', false).x).toEqual(1);
		expect(component['determineCondition']({ x: -50, y: -50 }, 's', true).y).toEqual(0);
		expect(component['determineCondition']({ x: -150, y: -150 }, 'e', true).x).toEqual(0);
	});
});
