import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {HttpClientModule} from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { Global } from '@app/shared/global';
import { StatusCodes } from 'http-status-codes';
import { of } from 'rxjs';
import { SaveService } from 'src/app/services/index/save.service';
import { SaveComponent } from './save.component';
import SpyObj = jasmine.SpyObj;
describe('SaveComponent', () => {
	let component: SaveComponent;
	let fixture: ComponentFixture<SaveComponent>;
	let saveServiceSpy: SpyObj<SaveService>;

	// let drawingServiceSpy: SpyObj<DrawingService>;
	const canvasTestHelper: CanvasTestHelper = new CanvasTestHelper();
	class MockDrawingService {
		baseCtx: CanvasRenderingContext2D;
	}
	const mockDrawingService = new MockDrawingService();

	let matDialogRefSpy: SpyObj<MatDialogRef<SaveComponent>>;
	let matSnackSpy: SpyObj<MatSnackBar>;

	beforeEach(async(() => {
		saveServiceSpy = jasmine.createSpyObj('SaveService', ['basicPost']);
		matSnackSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
		matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
		mockDrawingService.baseCtx = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;

		TestBed.configureTestingModule({
			declarations: [SaveComponent],
			imports: [
				HttpClientTestingModule,
				MatButtonModule,
				MatFormFieldModule,
				MatChipsModule,
				MatIconModule,
				MatInputModule,
				FormsModule,
				NoopAnimationsModule,
				MatSnackBarModule,
				MatDialogModule,
			],
			providers: [
				{ provide: SaveService, useValue: saveServiceSpy },
				{ provide: DrawingService, useValue: mockDrawingService },
				{ provide: MatSnackBar, useValue: matSnackSpy },
				{ provide: MatDialogRef, useValue: matDialogRefSpy },
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SaveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should add an etiquette', () => {
		const testValue = 'allo';
		const input = fixture.debugElement.query(By.css('#etiquetteInput'));
		input.triggerEventHandler('matChipInputTokenEnd', { input, value: testValue });
		fixture.detectChanges();
		expect(component.etiquettes[0]).toBe(testValue);
	});
	it('should not add an etiquette if length is greater then 15', () => {
		const testValue = 'anticonstitutionnellement';
		const input = fixture.debugElement.query(By.css('#etiquetteInput'));
		input.triggerEventHandler('matChipInputTokenEnd', { input, value: testValue });
		fixture.detectChanges();
		expect(component.etiquettes.length).toBe(0);
	});
	it('should reset a null input ', () => {
		const testValue = 'anticonstitutionnellement';
		const input = fixture.debugElement.query(By.css('#etiquetteInput'));
		input.triggerEventHandler('matChipInputTokenEnd', { input: null, value: testValue });
		fixture.detectChanges();
		expect(component.etiquettes.length).toBe(0);
	});
	it('should not add the etiquette if already exist', () => {
		const testValue = 'allo';
		component.etiquettes.push(testValue);
		const input = fixture.debugElement.query(By.css('#etiquetteInput'));
		input.triggerEventHandler('matChipInputTokenEnd', { input, value: testValue });
		fixture.detectChanges();
		expect(component.etiquettes.length).toBe(1);
	});
	it('should remove the etiquette ', () => {
		const testValue = 'allo';
		component.etiquettes.push(testValue);
		component.removeEtiquette(testValue);
		expect(component.etiquettes.length).toBe(0);
	});
	it('should not remove a non-existing etiquette ', () => {
		const testValue = 'allo';
		component.removeEtiquette(testValue);
		expect(component.etiquettes.length).toBe(0);
	});

	it('should send to server if condition are met', (done) => {
		component.name = '';
		const fakeResponse = new HttpResponse<void>({ status: StatusCodes.CREATED });
		saveServiceSpy.basicPost.and.returnValue(of(fakeResponse));
		component.sendServer();
		expect(matDialogRefSpy.close).not.toHaveBeenCalled();
		component.name = 'test';
		component.sendServer();
		setTimeout(() => {
			expect(matDialogRefSpy.close).toHaveBeenCalled();
			done();
		}, Global.SECOND_MS);
	});

	it('should set the appropriate answer to status created', (done) => {
		component.name = 'test';
		const fakeResponse = new HttpResponse<void>({ status: StatusCodes.CREATED });
		saveServiceSpy.basicPost.and.returnValue(of(fakeResponse));
		component.sendServer();
		setTimeout(() => {
			expect(matSnackSpy.open).toHaveBeenCalledTimes(2);
			done();
		}, Global.SECOND_MS);
	});

	it('should set the appropriate answer to status created', (done) => {
		component.name = 'test';
		const responseBadRequest = new HttpResponse<void>({ status: StatusCodes.BAD_REQUEST });
		saveServiceSpy.basicPost.and.returnValue(of(responseBadRequest));
		component.sendServer();
		setTimeout(() => {
			expect(matSnackSpy.open).toHaveBeenCalledTimes(2);
			done();
		}, Global.SECOND_MS);
	});
	it('should set the appropriate answer to status created', (done) => {
		component.name = 'test';
		const responseInternal = new HttpResponse<void>({ status: StatusCodes.INTERNAL_SERVER_ERROR });
		saveServiceSpy.basicPost.and.returnValue(of(responseInternal));
		component.sendServer();
		setTimeout(() => {
			expect(matSnackSpy.open).toHaveBeenCalledTimes(2);
			done();
		}, Global.SECOND_MS);
	});

	it('should reset the name and etiquette on close', () => {
		// expect quand pas de nom
		component.name = 'test';
		component.close();
		// creer event de matChip avec input et value
		expect(component.name).toBe('');
	});
});
