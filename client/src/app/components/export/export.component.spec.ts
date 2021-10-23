import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { of } from 'rxjs';
import { EventManagerService } from 'src/app/services/event-manager/event-manager.service';
import { ExportComponent } from './export.component';

describe('ExportComponent', () => {
	let component: ExportComponent;
	let fixture: ComponentFixture<ExportComponent>;
	let eventManagerServiceSpy: jasmine.SpyObj<EventManagerService>;
	let ctxStub: CanvasRenderingContext2D;
	let canvasTestHelper: CanvasTestHelper = new CanvasTestHelper();

	class MockDrawingService {
		baseCtx: CanvasRenderingContext2D;
	}
	const mockDrawingService = new MockDrawingService();
	// tslint:disable:no-empty
	// tslint:disable-next-line: max-classes-per-file
	class MatSnackBarStub {
		// tslint:disable-next-line: typedef
		open() {
			return {
				onAction: () => of({}),
			};
		}
	}
	const matSnackBarStub = new MatSnackBarStub();

	beforeEach(async(() => {
		eventManagerServiceSpy = jasmine.createSpyObj('eventManagerService', ['disableShortcuts', 'enableShortcuts']);
		mockDrawingService.baseCtx = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		ctxStub = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;
		spyOn(document, 'createElement').and.callThrough();
		spyOn(ctxStub, 'drawImage').and.callThrough();
		spyOn(window, 'fetch').and.callThrough();
		spyOn(console, 'log').and.callThrough();
		spyOn(matSnackBarStub, 'open').and.callThrough();
		spyOn(String.prototype, 'replace').and.callThrough();
		window.open = () => {
			return window;
		};

		TestBed.configureTestingModule({
			declarations: [ExportComponent],
			imports: [
				CommonModule,
				MatDialogModule,
				BrowserAnimationsModule,
				MatButtonModule,
				MatIconModule,
				MatSelectModule,
				MatFormFieldModule,
				MatAutocompleteModule,
				FormsModule,
				ReactiveFormsModule,
				MatInputModule,
				MatSnackBarModule,
			],
			providers: [
				{ provide: DrawingService, useValue: mockDrawingService },
				{ provide: EventManagerService, useValue: eventManagerServiceSpy },
				{ provide: MatSnackBar, useValue: matSnackBarStub },
				{ provide: ExportComponent },
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		canvasTestHelper = TestBed.inject(CanvasTestHelper);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create an image url for png and jpeg on init', () => {
		component.ngOnInit();
		expect(component.pngImage).not.toEqual('');
		expect(component.jpegImage).not.toEqual('');
	});

	it('exportLocal() should set the image name to monDessin if there is no user input and exportLink exists', () => {
		component.exportLocal();

		expect(component.name).toEqual('monDessin');
	});

	it('exportLocal() should replace the download hrefs for the different image formats', () => {
		component.type = '.jpeg';
		component.exportLocal();
		expect(String.prototype.replace).toHaveBeenCalled();

		component.type = '.png';
		component.exportLocal();
		expect(String.prototype.replace).toHaveBeenCalled();
	});

	it('exportLocal() should not set the image name to monDessin if exportLink exists and there is user input', () => {
		component.name = 'helloGorgeous';
		component.exportLocal();
		expect(component.name).not.toEqual('monDessin');
	});

	it('createModifiableImage() should call apply filter', () => {
		spyOn(component, 'applyFilter').and.callFake(() => {});
		component.createModifiableImage();
		expect(component.applyFilter).toHaveBeenCalled();
	});

	it('applyFilter() should assign an image url for both formats', () => {
		component.pngImage = '';
		component.jpegImage = '';
		component.applyFilter(ctxStub);

		expect(component.pngImage).not.toEqual('');
		expect(component.jpegImage).not.toEqual('');
	});

	it('applyFilter() should call drawImage() if the argument ctx is not null', () => {
		component.applyFilter(ctxStub);

		expect(ctxStub.drawImage).toHaveBeenCalled();
	});

	it('applyFilter() should not call drawImage() if the argument ctx is null', () => {
		component.applyFilter(null);

		expect(ctxStub.drawImage).not.toHaveBeenCalled();
	});

	it('applyFilter() modify the filter attribute to the right filter', () => {
		component.filter = 'blur';
		component.applyFilter(ctxStub);
		expect(ctxStub.filter).toEqual('blur(4px)');

		component.filter = 'grayscale';
		component.applyFilter(ctxStub);
		expect(ctxStub.filter).toEqual('grayscale(100%)');

		component.filter = 'sepia';
		component.applyFilter(ctxStub);
		expect(ctxStub.filter).toEqual('sepia(100%)');

		component.filter = 'invert';
		component.applyFilter(ctxStub);
		expect(ctxStub.filter).toEqual('invert(100%)');

		component.filter = 'darken';
		component.applyFilter(ctxStub);
		expect(ctxStub.filter).toEqual('brightness(50%)');

		component.filter = 'none';
		component.applyFilter(ctxStub);
		expect(ctxStub.filter).toEqual('none');
	});

	it('exportImgur() should call a fetch', () => {
		component.exportImgur();

		expect(fetch).toHaveBeenCalled();
	});

	it('exportImgur() should set an imageUrl', () => {
		component.exportImgur();
		expect(component.imageUrl).not.toEqual('');
	});

	it('exportImgur() should set imageUrl depending on the type of image file required', () => {
		component.type = '.png';
		component.pngImage = Global.TEST_PNG_URL;
		component.exportImgur();
		expect(component.imageUrl).toEqual('test');

		component.type = '.jpeg';
		component.jpegImage = Global.TEST_JPEG_URL;
		component.exportImgur();
		expect(component.imageUrl).toEqual('test');
	});

	it('openSnackBar() should open a snackBar', () => {
		component.openSnackBar();
		expect(matSnackBarStub.open).toHaveBeenCalled();
	});
});
