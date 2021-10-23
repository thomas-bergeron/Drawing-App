import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolInfo } from '@app/classes/tool-info';
import { ToolOption } from '@app/classes/tool-option';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { EraserService } from '@app/services/tools/eraser.service';
import { PencilService } from '@app/services/tools/pencil.service';
import { stamps } from '@app/shared/global';
import { BehaviorSubject } from 'rxjs';
import { ColorPanelComponent } from 'src/app/components/color-panel/color-panel.component';
import { ToolService } from 'src/app/services/tools/tool.service';
import { AttributesPanelComponent } from './attributes-panel.component';
import SpyObj = jasmine.SpyObj;

describe('AttributesPanelComponent', () => {
	// tslint:disable:no-any
	let component: AttributesPanelComponent;
	let fixture: ComponentFixture<AttributesPanelComponent>;
	let subscribeSpy: jasmine.Spy<any>;

	const toolServiceSpy: SpyObj<ToolService> = jasmine.createSpyObj('ToolService', [
		'currentTool',
		'changeLimitSize$',
		'changeLimitSizeCallSource',
		'callChangeLimitSize',
		'hasBegunDrawing',
	]);
	let pencilServiceSpy: jasmine.SpyObj<PencilService>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AttributesPanelComponent, ColorPanelComponent],
			imports: [MatSliderModule, BrowserAnimationsModule],
			providers: [{ provide: ToolService, useValue: toolServiceSpy }],
		}).compileComponents();
		toolServiceSpy.currentTool = new EraserService(new DrawingService({} as CommandManagerService));
		toolServiceSpy.changeLimitSizeCallSource = new BehaviorSubject<number>(0);
		toolServiceSpy.changeLimitSize$ = toolServiceSpy.changeLimitSizeCallSource.asObservable();

		subscribeSpy = spyOn(toolServiceSpy.changeLimitSize$, 'subscribe').and.callThrough();
	}));

	beforeEach(() => {
		pencilServiceSpy = jasmine.createSpyObj('PencilService', [''], ['']);
		pencilServiceSpy.info = new ToolInfo('pencil', 'Crayon', 'c');
		pencilServiceSpy.options = new ToolOption();
		toolServiceSpy.currentTool = pencilServiceSpy;

		fixture = TestBed.createComponent(AttributesPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.activeTool = pencilServiceSpy;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should change the min size when subscribe is called', () => {
		toolServiceSpy.callChangeLimitSize(1);
		expect(subscribeSpy).toHaveBeenCalled();
	});

	it('should return a list of strings', () => {
		expect(component.fonts).toBeInstanceOf(Array);
	});

	it('should return a list of strings', () => {
		expect(component.stamps).toEqual(stamps);
	});
});
