import { HttpResponse } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasTestHelper } from '@app/classes/canvas-test-helper';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { SaveService } from '@app/services/index/save.service';
import { Global } from '@app/shared/global';
import { Dessin } from '@common/communication/dessin';
import { StatusCodes } from 'http-status-codes';
import { of, throwError } from 'rxjs';
import { CarrouselComponent } from './carrousel.component';
import SpyObj = jasmine.SpyObj;
describe('CarrouselComponent', () => {
	// tslint:disable:no-any
	// tslint:disable:no-string-literal
	let component: CarrouselComponent;
	let fixture: ComponentFixture<CarrouselComponent>;
	let etiquetteInputElement: HTMLElement;
	let saveServiceSpy: SpyObj<SaveService>;
	let matSnackSpy: SpyObj<MatSnackBar>;
	const canvasTestHelper: CanvasTestHelper = new CanvasTestHelper();
	class MockDrawingService {
		baseCtx: CanvasRenderingContext2D;
	}
	const mockDrawingService = new MockDrawingService();
	let matDialogRefSpy: SpyObj<MatDialogRef<CarrouselComponent>>;

	const fakeDrawingArray: Dessin[] = [];
	fakeDrawingArray.push(Global.DRAWING_TESTING[0]);
	const fakeBlob = new Blob([]);

	beforeEach(async(() => {
		saveServiceSpy = jasmine.createSpyObj('SaveService', ['basicGet', 'getDrawing', 'deletePost']);
		saveServiceSpy.basicGet.and.returnValue(of(fakeDrawingArray).toPromise());
		saveServiceSpy.getDrawing.and.returnValue(of(fakeBlob));
		matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
		matSnackSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
		mockDrawingService.baseCtx = canvasTestHelper.canvas.getContext('2d') as CanvasRenderingContext2D;

		TestBed.configureTestingModule({
			imports: [
				MatDialogModule,
				MatButtonModule,
				MatChipsModule,
				MatIconModule,
				MatFormFieldModule,
				FormsModule,
				MatAutocompleteModule,
				ReactiveFormsModule,
				NoopAnimationsModule,
			],
			providers: [
				{ provide: SaveService, useValue: saveServiceSpy },
				{ provide: MatSnackBar, useValue: matSnackSpy },
				{ provide: DrawingService, useValue: mockDrawingService },
				{ provide: MatDialogRef, useValue: matDialogRefSpy },
			],
			declarations: [CarrouselComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarrouselComponent);
		component = fixture.componentInstance;
		etiquetteInputElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should  increase Index with arrow left', () => {
		spyOn(component, 'increaseIndex');
		component.handleKeyboardEventDown(Global.ARROW_LEFT_EVENT);
		expect(component.increaseIndex).toHaveBeenCalled();
	});

	it('should  decrease Index with arrow right', () => {
		spyOn(component, 'decreaseIndex');
		component.handleKeyboardEventDown(Global.ARROW_RIGHT_EVENT);
		expect(component.decreaseIndex).toHaveBeenCalled();
	});

	it('should not put two etiquettes', () => {
		component.etiquettes.push(Global.DRAWING_TESTING[0].etiquette[0]);
		component.ngOnInit();
		expect(component.etiquettes.length).toBe(1);
	});

	it('should add an etiquette', () => {
		const value = Global.DRAWING_TESTING[0].etiquette[0];
		component.etiquettes.push(value);
		const input = etiquetteInputElement.querySelector<HTMLInputElement>('#etiquetteInput') as HTMLInputElement;
		component.add({ input, value });
		expect(component.selectedEtiquettes.indexOf(value)).not.toBe(-Global.ONE);
	});
	it('should not add an unknown etiquette', () => {
		const input = etiquetteInputElement.querySelector<HTMLInputElement>('#etiquetteInput') as HTMLInputElement;
		input.value = Global.DRAWING_TESTING[0].etiquette[0];
		component.add({ input, value: input.value });
		expect(component.selectedEtiquettes.indexOf(Global.DRAWING_TESTING[0].etiquette[0])).toBe(-Global.ONE);
	});

	it('should remove a selected etiquette and refiltered the drawing', () => {
		component.selectedEtiquettes.push(Global.DRAWING_TESTING[0].etiquette[0]);
		component.remove(Global.DRAWING_TESTING[0].etiquette[0]);
		expect(component.selectedEtiquettes.indexOf(Global.DRAWING_TESTING[0].etiquette[0])).toBe(-Global.ONE);
		component.selectedEtiquettes.push(Global.DRAWING_TESTING[1].etiquette[0]);
		component.selectedEtiquettes.push(Global.DRAWING_TESTING[2].etiquette[0]);
		component.remove(Global.DRAWING_TESTING[1].etiquette[0]);
		expect(component.selectedEtiquettes.indexOf(Global.DRAWING_TESTING[1].etiquette[0])).toBe(-Global.ONE);
		expect(component.selectedEtiquettes.indexOf(Global.DRAWING_TESTING[2].etiquette[0])).not.toBe(-Global.ONE);
	});

	it('should add the selected etiquette', () => {
		const testValue = Global.DRAWING_TESTING[0].etiquette[0];
		const input = fixture.debugElement.query(By.css('#autoComplete'));
		input.triggerEventHandler('optionSelected', { option: { value: testValue } });
		fixture.detectChanges();
		expect(component.selectedEtiquettes.length).toBe(1);
	});

	it('should filter the autocomplete etiquette', () => {
		// test methode _filter
		component.etiquettes.push('test');
		expect(component['_filter']('te')[0]).toBe('test');
	});

	it('should filter the autocomplete etiquette', () => {
		// test methode _filter
		component.etiquettes.push('test');
		expect(component['_filter']('te')[0]).toBe('test');
	});

	it('should set the fileredDrawing array when there is etiquette', () => {
		// test methode _filter
		component.allDrawing.push(Global.DRAWING_TESTING[0]);
		component.allDrawing.push(Global.DRAWING_TESTING[1]);
		component.selectedEtiquettes.push(Global.DRAWING_TESTING[0].etiquette[0]);
		component['setDrawingFilter']();
		expect(component.filteredDrawing.length).toEqual(1);
	});

	it('should set the fileredDrawing array with no selected etiquette', () => {
		// test methode _filter
		component.allDrawing.push(Global.DRAWING_TESTING[0]);
		component.allDrawing.push(Global.DRAWING_TESTING[1]);
		component['noDrawingFilter']();
		expect(component.filteredDrawing.length).toEqual(2);
	});

	it('should set the appropriate drawing when less then three are present', () => {
		// test empty
		component.allDrawing.push(Global.DRAWING_TESTING[0]);
		component.filteredDrawing.push(0);
		expect(component.lesThanThreeDrawing(1, 2)).toEqual(component.emptyDrawing);
		// test indexoneTwo
		expect(component.lesThanThreeDrawing(0, 2)).toEqual(component.allDrawing[component.filteredDrawing[0]]);
		// test indexTwo
		component.allDrawing.push(Global.DRAWING_TESTING[1]);
		component.filteredDrawing.push(1);
		expect(component.lesThanThreeDrawing(1, 0)).toEqual(component.allDrawing[component.filteredDrawing[1]]);
	});

	it('should return the appropriate centerFiche', () => {
		// no filteredDrawing
		expect(component.centerFiche).toEqual(component.emptyDrawing);
		// moins de trois
		component.allDrawing.push(Global.DRAWING_TESTING[0]);
		component.filteredDrawing.push(0);

		expect(component.centerFiche).toEqual(component.allDrawing[0]);

		// plus que 3
		component.allDrawing.pop();
		component.allDrawing = Global.DRAWING_TESTING;
		component.filteredDrawing = Global.FICHE_INDEX_TESTING;

		const drawing = component.centerFiche;
		expect(drawing).toEqual(component.allDrawing[0]);
	});

	it('should return the appropriate previousFiche', () => {
		// no filteredDrawing
		expect(component.previousFiche).toEqual(component.emptyDrawing);
		// moins de trois
		component.allDrawing.push(Global.DRAWING_TESTING[0]);
		component.filteredDrawing.push(0);
		expect(component.previousFiche).toEqual(component.emptyDrawing);
		// plus que 3
		component.allDrawing.pop();
		component.allDrawing = Global.DRAWING_TESTING;
		component.filteredDrawing = Global.FICHE_INDEX_TESTING;
		// faire pt comme center
		expect(component.previousFiche).toEqual(component.allDrawing[Global.LESS_THEN_THREE_DRAWING]);
	});

	it('should return the appropriate nextFiche', () => {
		// no filteredDrawing
		expect(component.nextFiche).toEqual(component.emptyDrawing);
		// moins de trois
		component.allDrawing.push(Global.DRAWING_TESTING[0]);
		component.filteredDrawing.push(0);
		expect(component.nextFiche).toEqual(component.emptyDrawing);
		// plus que 3
		component.indexFiche = Global.LESS_THEN_THREE_DRAWING;
		component.allDrawing.pop();
		component.allDrawing = Global.DRAWING_TESTING;
		component.filteredDrawing = Global.FICHE_INDEX_TESTING;
		expect(component.nextFiche).toEqual(component.allDrawing[0]);
	});

	it('should decreaseIndex', () => {
		component.decreaseIndex();
		expect(component.indexFiche).toEqual(2);
		component.indexFiche = 0;
		component.filteredDrawing = Global.FICHE_INDEX_TESTING;
		component.decreaseIndex();
		expect(component.indexFiche).toEqual(Global.LESS_THEN_THREE_DRAWING);
	});
	it('should increaseIndex', () => {
		component.indexFiche = Global.LESS_THEN_THREE_DRAWING;
		component.increaseIndex();
		expect(component.indexFiche).toEqual(0);
		component.indexFiche = Global.LESS_THEN_THREE_DRAWING + 1;
		component.filteredDrawing = Global.FICHE_INDEX_TESTING;
		component.increaseIndex();
		expect(component.indexFiche).toEqual(0);
	});

	it('should show a message if error in getAllDrawing', (done) => {
		saveServiceSpy.basicGet.and.returnValue(throwError(true).toPromise());
		component.getAllDrawing();
		setTimeout(() => {
			expect(matSnackSpy.open).toHaveBeenCalled();
			done();
		}, Global.SECOND_MS);
	});

	it('should delete and send StatusCode Created', () => {
		const drawingToDelete: Dessin = Global.DRAWING_TESTING[0];
		component.allDrawing.push(drawingToDelete);
		const fakeResponse = new HttpResponse<void>({ status: StatusCodes.CREATED });
		saveServiceSpy.deletePost.and.returnValue(of(fakeResponse));
		component.deleteDrawing(drawingToDelete);
		expect(matSnackSpy.open).toHaveBeenCalled();
	});
	it('should delete and send StatusCode Badrequest', () => {
		const drawingToDelete: Dessin = Global.DRAWING_TESTING[0];
		const otherDrawing: Dessin = Global.DRAWING_TESTING[1];
		component.allDrawing.push(drawingToDelete);
		component.selectedEtiquettes.push(otherDrawing.etiquette[0]);
		const badRequest = new HttpResponse<void>({ status: StatusCodes.BAD_REQUEST });
		saveServiceSpy.deletePost.and.returnValue(of(badRequest));
		component.deleteDrawing(drawingToDelete);
		expect(matSnackSpy.open).toHaveBeenCalled();
	});
	it('should delete and send StatusCode InternalServerError', () => {
		const drawingToDelete: Dessin = Global.DRAWING_TESTING[0];
		component.allDrawing.push(drawingToDelete);
		const internalError = new HttpResponse<void>({ status: StatusCodes.INTERNAL_SERVER_ERROR });
		saveServiceSpy.deletePost.and.returnValue(of(internalError));
		component.deleteDrawing(drawingToDelete);
		expect(matSnackSpy.open).toHaveBeenCalled();
	});

	it('should open the drawing', () => {
		component.open(component.emptyDrawing);
		expect(matDialogRefSpy.close).toHaveBeenCalled();

		spyOn(component, 'addImageToDrawing').and.returnValue(of(true).toPromise());
		const drawinToOpen: Dessin = Global.DRAWING_TESTING[0];
		component.open(drawinToOpen);
		expect(matDialogRefSpy.close).toHaveBeenCalled();
	});

	it('should show error if drawing cant be open', (done) => {
		spyOn(component, 'addImageToDrawing').and.returnValue(of(false).toPromise());
		const drawinToOpen: Dessin = Global.DRAWING_TESTING[0];
		component.open(drawinToOpen);
		setTimeout(() => {
			expect(matSnackSpy.open).toHaveBeenCalled();
			done();
		}, Global.SECOND_MS);
	});

	it('should add an image to the drawing', () => {
		spyOn<any>(component, 'noDrawingFilter');
		spyOn<any>(component, 'setDrawingFilter');
		component.addImageToDrawing(component.emptyDrawing);
		expect(component['noDrawingFilter']).not.toHaveBeenCalled();
		expect(component['setDrawingFilter']).not.toHaveBeenCalled();
	});

	it('should remove the drawing of image not found and reset the filtered drawing (with no etiquettes)', (done) => {
		spyOn<any>(component, 'noDrawingFilter');
		saveServiceSpy.getDrawing.and.returnValue(throwError(true));
		component.addImageToDrawing(component.emptyDrawing);
		setTimeout(() => {
			expect(component['noDrawingFilter']).toHaveBeenCalled();
			done();
		}, Global.SECOND_MS);
	});

	it('should remove the drawing of image not found and reset the filtered drawing (with other etiquettes)', (done) => {
		spyOn<any>(component, 'setDrawingFilter');
		component.selectedEtiquettes.push(Global.DRAWING_TESTING[0].etiquette[0]);
		saveServiceSpy.getDrawing.and.returnValue(throwError(true));
		component.addImageToDrawing(component.emptyDrawing);
		setTimeout(() => {
			expect(component['setDrawingFilter']).toHaveBeenCalled();
			done();
		}, Global.SECOND_MS);
	});
});
