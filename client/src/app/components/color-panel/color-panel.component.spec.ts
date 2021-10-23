import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global, MouseButton } from '@app/shared/global';
import { ColorPaletteComponent } from 'src/app/components/color-picker/color-palette/color-palette.component';
import { ColorPickerComponent } from 'src/app/components/color-picker/color-picker.component';
import { ColorSliderComponent } from 'src/app/components/color-picker/color-slider/color-slider.component';
import { ColorPanelComponent } from './color-panel.component';

describe('ColorPanelComponent', () => {
	let component: ColorPanelComponent;
	let fixture: ComponentFixture<ColorPanelComponent>;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;

	beforeEach(async(() => {
		drawingServiceSpy = jasmine.createSpyObj('drawingService', ['changeColor']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawingServiceSpy }],
			declarations: [ColorPanelComponent, ColorPickerComponent, ColorPaletteComponent, ColorSliderComponent, MatLabel],
			imports: [MatSliderModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, FormsModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should use DrawingService values', () => {
		expect(component.primaryColor).toBe(drawingServiceSpy.primaryColor);
		expect(component.secondaryColor).toBe(drawingServiceSpy.secondaryColor);
	});

	it("should use drawing service's values", () => {
		const newPrimaryColor = '#ABCDEF';
		component.primaryColor = newPrimaryColor;
		expect(component.primaryColor).toBe(newPrimaryColor);
		const newSecondaryColor = '#FEDCBA';
		component.secondaryColor = newSecondaryColor;
		expect(component.secondaryColor).toBe(newSecondaryColor);
	});

	it('should switch main colors in drawing service', () => {
		const primaryColor: string = drawingServiceSpy.primaryColor;
		const secondaryColor: string = drawingServiceSpy.secondaryColor;
		component.switchMainColors();
		expect(drawingServiceSpy.primaryColor).toBe(secondaryColor);
		expect(drawingServiceSpy.secondaryColor).toBe(primaryColor);
	});

	it('should not change drawing service colors', () => {
		const event: MouseEvent = { button: MouseButton.Middle } as MouseEvent;
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		drawingServiceSpy.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		drawingServiceSpy.colorHistory[0] = firstColor;
		drawingServiceSpy.primaryColor = firstColor;
		drawingServiceSpy.colorHistory[1] = secondColor;
		drawingServiceSpy.secondaryColor = secondColor;
		drawingServiceSpy.colorHistory[2] = thirdColor;

		component.useColorHistory(event, secondColor);
		expect(drawingServiceSpy.primaryColor).toBe(firstColor);
		expect(drawingServiceSpy.secondaryColor).toBe(secondColor);
	});

	it('should call changeColor of drawingService', () => {
		const event: MouseEvent = { button: MouseButton.Left } as MouseEvent;
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		drawingServiceSpy.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		drawingServiceSpy.colorHistory[0] = firstColor;
		drawingServiceSpy.primaryColor = firstColor;
		drawingServiceSpy.colorHistory[1] = secondColor;
		drawingServiceSpy.secondaryColor = secondColor;
		drawingServiceSpy.colorHistory[2] = thirdColor;

		component.useColorHistory(event, thirdColor);
		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(thirdColor, true, false);
	});

	it('should call changeColor of drawingService', () => {
		const event: MouseEvent = { button: MouseButton.Right } as MouseEvent;
		const firstColor = '#FF0000';
		const secondColor = '#00FF00';
		const thirdColor = '#0000FF';

		drawingServiceSpy.colorHistory = new Array(Global.COLOR_HISTORY_COUNT);
		drawingServiceSpy.colorHistory[0] = firstColor;
		drawingServiceSpy.primaryColor = firstColor;
		drawingServiceSpy.colorHistory[1] = secondColor;
		drawingServiceSpy.secondaryColor = secondColor;
		drawingServiceSpy.colorHistory[2] = thirdColor;

		component.useColorHistory(event, thirdColor);
		expect(drawingServiceSpy.changeColor).toHaveBeenCalledWith(thirdColor, false, false);
	});
});
