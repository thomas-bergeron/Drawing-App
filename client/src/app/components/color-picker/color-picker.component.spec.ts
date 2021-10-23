import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorPickerComponent } from './color-picker.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';

describe('ColorPickerComponent', () => {
	let component: ColorPickerComponent;
	let fixture: ComponentFixture<ColorPickerComponent>;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;

	beforeEach(async(() => {
		drawingServiceSpy = jasmine.createSpyObj('drawingService', ['changeColor']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawingServiceSpy }],
			declarations: [ColorPickerComponent, ColorPaletteComponent, ColorSliderComponent],
			imports: [MatInputModule, MatFormFieldModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatDialogModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		drawingServiceSpy.primaryColor = '#FFFFFFFF';
		drawingServiceSpy.secondaryColor = '#FFFFFFFF';
		fixture = TestBed.createComponent(ColorPickerComponent);
		component = fixture.componentInstance;
		component.isPrimaryColor = true;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change red value of color', () => {
		component.hexR = 'AA';
		expect(component.color).toBe('#AAFFFFFF');
	});

	it('should not change red value of color', () => {
		component.hexR = 'ZZ';
		expect(component.color).toBe('#FFFFFFFF');
	});

	it('should change green value of color', () => {
		component.hexG = 'BB';
		expect(component.color).toBe('#FFBBFFFF');
	});

	it('should not change green value of color', () => {
		component.hexG = 'QQ';
		expect(component.color).toBe('#FFFFFFFF');
	});

	it('should change blue value of color', () => {
		component.hexB = 'CC';
		expect(component.color).toBe('#FFFFCCFF');
	});

	it('should not change blue value of color', () => {
		component.hexB = 'YY';
		expect(component.color).toBe('#FFFFFFFF');
	});

	it('should update primary color and alpha of DrawingService', () => {
		component.isPrimaryColor = true;
		component.ngOnInit();

		const newColor = '#ABCDEF';
		const newAlpha = 0;

		component.changeColor(newColor);
		component.alpha = newAlpha;
		component.updateColor();

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(newColor + '00', true, true);
	});

	it('should only change primary color not alpha', () => {
		component.isPrimaryColor = true;
		component.ngOnInit();

		const oldAlpha = component.color.substring(Global.ALPHA_INDEX_HEX, component.color.length);
		const newColor = '#ABCDEF';

		component.changeColor(newColor);
		component.updateColor();

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(newColor + oldAlpha, true, true);
	});

	it('should only change primary alpha not color', () => {
		component.isPrimaryColor = true;
		component.ngOnInit();

		const oldColor = component.color.substring(0, Global.ALPHA_INDEX_HEX);
		const newAlpha = 0.2;

		component.alpha = newAlpha;
		component.updateColor();

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(oldColor + '33', true, true);
	});

	it('should update secondary color and alpha of DrawingService', () => {
		component.isPrimaryColor = false;
		component.ngOnInit();

		const newColor = '#ABCDEF';
		const newAlpha = 0;

		component.changeColor(newColor);
		component.alpha = newAlpha;
		component.updateColor();

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(newColor + '00', false, true);
	});

	it('should only change secondary color not alpha', () => {
		component.isPrimaryColor = false;
		component.ngOnInit();

		const oldAlpha = component.color.substring(Global.ALPHA_INDEX_HEX, component.color.length);
		const newColor = '#ABCDEF';

		component.changeColor(newColor);
		component.updateColor();

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(newColor + oldAlpha, false, true);
	});

	it('should only change secondary alpha not color', () => {
		component.isPrimaryColor = false;
		component.ngOnInit();

		const oldColor = component.color.substring(0, Global.ALPHA_INDEX_HEX);
		const newAlpha = 0;

		component.alpha = newAlpha;
		component.updateColor();

		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(oldColor + '00', false, true);
	});

	it('should emit on shouldHide when a mouseDown is outside', () => {
		spyOn(component.shouldHide, 'emit');

		const mouseEvent = { x: 1, y: 1 } as MouseEvent;
		component.onMouseDown(mouseEvent);

		fixture.detectChanges();

		expect(component.shouldHide.emit).toHaveBeenCalled();
	});

	it('should not emit on shouldHide when a mouseDown is inside', () => {
		spyOn(component.shouldHide, 'emit');

		const sliderPos = document.getElementsByClassName('opacity-slider')[0].getBoundingClientRect();
		const mouseEvent = { x: sliderPos.x, y: sliderPos.y } as MouseEvent;
		component.onMouseDown(mouseEvent);

		fixture.detectChanges();

		expect(component.shouldHide.emit).not.toHaveBeenCalled();
	});

	it('should prevent default keydown event', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Q', shiftKey: false });

		spyOn(event, 'preventDefault');
		component.handleKeyDown(event);

		expect(event.preventDefault).toHaveBeenCalled();
	});

	it('should not prevent default keydown event', () => {
		const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'a', shiftKey: false });

		spyOn(event, 'preventDefault');
		component.handleKeyDown(event);

		expect(event.preventDefault).not.toHaveBeenCalled();
	});
});
