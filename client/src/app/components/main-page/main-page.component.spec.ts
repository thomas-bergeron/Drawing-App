import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CarrouselModule } from 'src/app/components/carrousel/carrousel.module';
import { EditorComponent } from 'src/app/components/editor/editor.component';
import { MainPageComponent } from './main-page.component';
import SpyObj = jasmine.SpyObj;
// tslint:disable:no-string-literal
describe('MainPageComponent', () => {
	let component: MainPageComponent;
	let fixture: ComponentFixture<MainPageComponent>;
	let matDialogSpy: SpyObj<MatDialog>;

	beforeEach(async(() => {
		matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([{ path: 'editor', component: EditorComponent }]),
				HttpClientTestingModule,
				MatDialogModule,
				CarrouselModule,
				NoopAnimationsModule,
				MatButtonModule,
			],
			declarations: [MainPageComponent],
			providers: [{ provide: MatDialog, useValue: matDialogSpy }],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainPageComponent);

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it("should have as title 'PolyDessin 2'", () => {
		expect(component.title).toEqual('PolyDessin 2');
	});

	it('new drawing should redirect to editor directly if no drawing', () => {
		component.thereIsDrawing = false;
		spyOn(component['router'], 'navigate').and.stub();
		component.newDrawing();
		expect(component['router'].navigate).toHaveBeenCalled();
	});

	it('new drawing redirect with the warning', () => {
		component.thereIsDrawing = true;
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: null });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		spyOn(component['router'], 'navigate').and.stub();
		component.newDrawing();
		expect(matDialogSpy.open).toHaveBeenCalled();
		expect(component['router'].navigate).toHaveBeenCalled();
	});

	it('new drawing do not redirect with the warning', () => {
		component.thereIsDrawing = true;
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(false), close: null });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		spyOn(component['router'], 'navigate').and.stub();
		component.newDrawing();
		expect(matDialogSpy.open).toHaveBeenCalled();
		expect(component['router'].navigate).not.toHaveBeenCalled();
	});

	it('continue drawing should redirect to editor directly', () => {
		spyOn(component['router'], 'navigate').and.stub();
		component.continueDrawing();
		expect(component['router'].navigate).toHaveBeenCalled();
	});

	it('should redirect to editor directly if no drawing', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(true), close: null });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		spyOn(component['router'], 'navigate').and.stub();
		component.openModal();
		expect(matDialogSpy.open).toHaveBeenCalled();
		expect(component['router'].navigate).toHaveBeenCalled();
	});

	it('should not redirect to editor', () => {
		const dialogRefSpy = jasmine.createSpyObj({ afterClosed: of(false), close: null });
		matDialogSpy.open.and.returnValue(dialogRefSpy);
		spyOn(component['router'], 'navigate').and.stub();
		component.openModal();
		expect(matDialogSpy.open).toHaveBeenCalled();
		expect(component['router'].navigate).not.toHaveBeenCalled();
	});
});
