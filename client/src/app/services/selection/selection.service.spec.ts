import { TestBed } from '@angular/core/testing';
import { Global } from '@app/shared/global';
import { SelectionService } from './selection.service';

describe('SelectionService', () => {
	let service: SelectionService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SelectionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call #handleCommand', () => {
		const methodSpy = spyOn(service, 'handleCommand').and.callThrough();
		service.handleCommand({} as KeyboardEvent);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #selectRectangle', () => {
		const methodSpy = spyOn(service, 'selectRectangle').and.callThrough();
		service.selectRectangle(Global.DEFAULT_VECTOR);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #deleteCurrentSelection', () => {
		const methodSpy = spyOn(service, 'deleteCurrentSelection').and.callThrough();
		service.deleteCurrentSelection();
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #callPlaceBox', () => {
		const methodSpy = spyOn(service, 'callPlaceBox').and.callThrough();
		service.callPlaceBox(Global.DEFAULT_VECTOR);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #callChangeBoxSize', () => {
		const methodSpy = spyOn(service, 'callChangeBoxSize').and.callThrough();
		service.callChangeBoxSize(Global.DEFAULT_VECTOR);
		expect(methodSpy).toHaveBeenCalled();
	});

	it('should call #redrawSelection', () => {
		const methodSpy = spyOn(service, 'redrawSelection').and.callThrough();
		service.redrawSelection(Global.DEFAULT_VECTOR, 0, Global.DEFAULT_VECTOR, service.selection);
		expect(methodSpy).toHaveBeenCalled();
	});
});
