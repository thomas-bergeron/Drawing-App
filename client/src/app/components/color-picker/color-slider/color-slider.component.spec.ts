import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSliderComponent } from './color-slider.component';

describe('ColorSliderComponent', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	let component: ColorSliderComponent;
	let fixture: ComponentFixture<ColorSliderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ColorSliderComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColorSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit color (onMouseDown)', () => {
		spyOn(component.color, 'emit');
		const canvasDimensions = component.canvas.nativeElement.getBoundingClientRect();
		component.onMouseDown({
			x: 0,
			y: canvasDimensions.top + canvasDimensions.height / 2,
		} as MouseEvent);
		expect(component.color.emit).toHaveBeenCalled();
	});

	it('should emit color (drag)', () => {
		spyOn(component.color, 'emit');
		const canvasDimensions = component.canvas.nativeElement.getBoundingClientRect();
		component.onMouseDown({
			x: 0,
			y: canvasDimensions.top - 2,
		} as MouseEvent);
		component['onMouseMove']({
			x: 0,
			y: canvasDimensions.top + canvasDimensions.height + 1,
		} as MouseEvent);
		component['onMouseUp']();
		expect(component.color.emit).toHaveBeenCalled();
	});
});
