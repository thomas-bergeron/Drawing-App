import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { WarningComponent } from './warning.component';
import SpyObj = jasmine.SpyObj;

describe('WarningComponent', () => {
	let component: WarningComponent;
	let fixture: ComponentFixture<WarningComponent>;
	let drawingServiceSpy: SpyObj<DrawingService>;
	beforeEach(async(() => {
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['new']);
		TestBed.configureTestingModule({
			declarations: [WarningComponent],
			imports: [MatDialogModule],
			providers: [{ provide: DrawingService, useValue: drawingServiceSpy }],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WarningComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
