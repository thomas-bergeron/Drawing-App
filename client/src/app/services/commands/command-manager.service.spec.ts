import { TestBed } from '@angular/core/testing';
import { CommandManagerService } from './command-manager.service';

describe('CommandManagerService', () => {
	let service: CommandManagerService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CommandManagerService);
		// tslint:disable:no-string-literal
		// tslint:disable:no-empty
		// tslint:disable:no-any
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call update when undo is called', () => {
		service['normalStack'] = [{} as CallableFunction, {} as CallableFunction];
		spyOn<any>(service, 'update').and.callFake(() => {});
		service.undo();
		expect(service['update']).toHaveBeenCalled();
	});

	it('should increase history stack by one when undo is called', () => {
		service['normalStack'] = [{} as CallableFunction, {} as CallableFunction, {} as CallableFunction];
		spyOn<any>(service, 'update').and.callFake(() => {});
		const oldLength = service['historyStack'].length;
		service.undo();
		expect(service['historyStack'].length).toEqual(oldLength + 1);
	});

	it('should not call update when undo is called', () => {
		service['normalStack'] = [{} as CallableFunction];
		spyOn<any>(service, 'update').and.callFake(() => {});
		service.undo();
		expect(service['update']).not.toHaveBeenCalled();
	});

	it('should call update when redo is called', () => {
		service['historyStack'] = [{} as CallableFunction];
		spyOn<any>(service, 'update').and.callFake(() => {});
		service.redo();
		expect(service['update']).toHaveBeenCalled();
	});

	it('should increase normal stack by one when redo is called', () => {
		service['historyStack'] = [{} as CallableFunction, {} as CallableFunction];
		spyOn<any>(service, 'update').and.callFake(() => {});
		const oldLength = service['normalStack'].length;
		service.redo();
		expect(service['normalStack'].length).toEqual(oldLength + 1);
	});

	it('should not call update when redo is called', () => {
		service['historyStack'] = [];
		spyOn<any>(service, 'update').and.callFake(() => {});
		service.redo();
		expect(service['update']).not.toHaveBeenCalled();
	});

	it('should return true if redo is ready', () => {
		service['historyStack'] = [{} as CallableFunction];
		expect(service.redoIsReady()).toBeTruthy();
	});

	it('should return false if redo is not ready', () => {
		service['historyStack'] = [];
		expect(service.redoIsReady()).toBeFalsy();
	});

	it('should return true if undo is ready', () => {
		service['normalStack'] = [{} as CallableFunction, {} as CallableFunction];
		expect(service.undoIsReady()).toBeTruthy();
	});

	it('should return false if undo is not ready', () => {
		service['normalStack'] = [];
		expect(service.undoIsReady()).toBeFalsy();
	});

	it('should call all functions in normalstack', async () => {
		const function1: CallableFunction = jasmine.createSpy();
		const function2: CallableFunction = jasmine.createSpy();
		const function3: CallableFunction = jasmine.createSpy();
		service['normalStack'] = [function1, function2, function3];
		await service['update']();

		expect(function1).toHaveBeenCalled();
		expect(function2).toHaveBeenCalled();
		expect(function3).toHaveBeenCalled();
	});

	it('should pop and push normalStack with replaceAction', () => {
		service['normalStack'] = [{} as CallableFunction, {} as CallableFunction];
		spyOn<any>(service['normalStack'], 'pop').and.callFake(() => {});
		spyOn<any>(service['normalStack'], 'push').and.callFake(() => {});
		service.replaceAction(() => {});
		expect(service['normalStack'].pop).toHaveBeenCalled();
		expect(service['normalStack'].push).toHaveBeenCalled();
	});

	it('should clear both stack', () => {
		service.clear();
		expect(service['normalStack'].length).toEqual(0);
		expect(service['historyStack'].length).toEqual(0);
	});
});
