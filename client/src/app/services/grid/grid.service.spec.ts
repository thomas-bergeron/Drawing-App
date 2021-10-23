import { TestBed } from '@angular/core/testing';
import { Global } from '@app/shared/global';
import { GridService } from './grid.service';

describe('GridService', () => {
	let service: GridService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GridService);
		spyOn(service, 'incrementGridSize').and.callThrough();
		spyOn(service, 'decrementGridSize').and.callThrough();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should toggle is active property', () => {
		const initialBool: boolean = service.options.gridOptions.isActive;
		service.toggleGrid();
		expect(service.options.gridOptions.isActive).toEqual(!initialBool);
	});

	it('should update size', () => {
		const vPath = 'M 1 0 V1';
		const hPath = 'M 0 1 H1';
		service.updateSize(1);
		expect(service.vPath).toEqual(vPath);
		expect(service.hPath).toEqual(hPath);
		expect(service.options.gridOptions.size).toEqual(1);
	});

	it('should increment by 5', () => {
		service.options.gridOptions.size = getRandomInt(Global.MAX_SQUARE_SIZE);
		service.incrementGridSize();
		expect(service.options.gridOptions.size % Global.INCREMENT_VALUE).toEqual(0);
		service.options.gridOptions.size = Global.MAX_SQUARE_SIZE;
		service.incrementGridSize();
		expect(service.options.gridOptions.size).toEqual(Global.MAX_SQUARE_SIZE);
	});
	it('should decrement by 5', () => {
		service.options.gridOptions.size = getRandomInt(Global.MAX_SQUARE_SIZE);
		service.decrementGridSize();
		expect(service.options.gridOptions.size % Global.INCREMENT_VALUE).toEqual(0);
		service.options.gridOptions.size = Global.MIN_SQUARE_SIZE;
		service.decrementGridSize();
		expect(service.options.gridOptions.size).toEqual(Global.MIN_SQUARE_SIZE);
	});
	it('should set to min square size', () => {
		service.options.gridOptions.size = Global.MINUS_ONE;
		service.decrementGridSize();
		expect(service.options.gridOptions.size).toEqual(Global.MIN_SQUARE_SIZE);
	});

	it('should handle command', () => {
		service.handleCommand(Global.KEYB_PLUS_EVENT, false);
		expect(service.incrementGridSize).toHaveBeenCalled();
		service.handleCommand(Global.KEYB_EQUAL_EVENT, false);
		expect(service.incrementGridSize).toHaveBeenCalled();
		service.handleCommand(Global.KEYB_MINUS_EVENT, false);
		expect(service.decrementGridSize).toHaveBeenCalled();
	});
	it('should not handle command', () => {
		service.handleCommand(Global.ARROW_LEFT_EVENT, false);
		expect(service.incrementGridSize).not.toHaveBeenCalled();
		expect(service.decrementGridSize).not.toHaveBeenCalled();
	});
});
const getRandomInt = (max: number): number => {
	return Math.floor(Math.random() * max);
};
