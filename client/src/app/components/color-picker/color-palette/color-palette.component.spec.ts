import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPaletteComponent } from './color-palette.component';

describe('ColorPaletteComponent', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	let component: ColorPaletteComponent;
	let fixture: ComponentFixture<ColorPaletteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ColorPaletteComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorPaletteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit color when hue is changed', () => {
		const newColor = '#ABCDEF';
		spyOn(component.color, 'emit');

		component.ngOnChanges({
			hue: new SimpleChange(null, newColor, true),
		});

		expect(component.color.emit).toHaveBeenCalled();
	});

	it('should draw itself when hue is changed', () => {
		const newColor = '#ABCDEF';
		spyOn<any>(component, 'draw');

		component.ngOnChanges({
			hue: new SimpleChange(null, newColor, true),
		});

		expect(component['draw']).toHaveBeenCalled();
	});

	it('should emit red color', () => {
		const newColor = '#FF0000';
		spyOn(component.color, 'emit');
		component.hue = newColor;

		const canvasDimensions = component.canvas.nativeElement.getBoundingClientRect();

		component.onMouseDown({ x: canvasDimensions.left - 1, y: canvasDimensions.top - 1 } as MouseEvent);
		component['onMouseMove']({ x: canvasDimensions.left + canvasDimensions.width, y: canvasDimensions.top } as MouseEvent);
		component['onMouseUp']();

		expect(component.color.emit).toHaveBeenCalledWith(newColor);
	});

	it('should emit black color', () => {
		const newColor = '#00FF00';
		const expectedColor = '#000000';
		spyOn(component.color, 'emit');
		component.hue = newColor;

		const canvasDimensions = component.canvas.nativeElement.getBoundingClientRect();

		component.onMouseDown({
			x: canvasDimensions.left + canvasDimensions.width + 1,
			y: canvasDimensions.top + canvasDimensions.height + 1,
		} as MouseEvent);
		component['onMouseMove']({
			x: canvasDimensions.left + canvasDimensions.width - 1,
			y: canvasDimensions.top + canvasDimensions.height,
		} as MouseEvent);
		component['onMouseUp']();

		expect(component.color.emit).toHaveBeenCalledWith(expectedColor);
	});

	it('should not draw (change is not a hue)', () => {
		const componentDrawSpy = spyOn<any>(component, 'draw');
		component.ngOnChanges({});
		expect(componentDrawSpy).not.toHaveBeenCalled();
	});
});
