import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FicheComponent } from './fiche.component';

describe('FicheComponent', () => {
	let component: FicheComponent;
	let fixture: ComponentFixture<FicheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FicheComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FicheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should get the name', () => {
		const nameTest = 'test';
		component.dessin.name = nameTest;
		expect(component.name).toBe(nameTest);
	});
	it('should get the image', () => {
		const basicImage =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAQAAAAi5ZK2AAABcUlEQVR42u3RAQ0AAAgDIN8/9K3hJlQg7fBMpEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunSkIx3pSEc60pGOdKQjHelIRzrSkY506dKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunTp0pGOdKQjHelIRzrSkY50pCMd6UhHOtKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pHPDAulX8xYd9+8SAAAAAElFTkSuQmCC';
		expect(component.image()).toBe(basicImage);
		component.dessin.name = 'test';
		expect(component.image()).toBe(component.dessin.image as string);
	});
	it('should emit the delete event', () => {
		spyOn(component.deleteFicheEvent, 'emit');
		component.remove();
		expect(component.deleteFicheEvent.emit).toHaveBeenCalled();
	});
	it('should emit the open event', () => {
		spyOn(component.openFicheEvent, 'emit');
		component.open();
		expect(component.openFicheEvent.emit).toHaveBeenCalled();
	});
});
