import { TestBed } from '@angular/core/testing';
import { ToolOption } from '@app/classes/tool-option';
import { ControlPoint, Global } from '@app/shared/global';
import { GridService } from './grid.service';
import { MagnetService } from './magnet.service';

describe('MagnetService', () => {
	let service: MagnetService;
	let gridServiceSpy: jasmine.SpyObj<GridService>;
	beforeEach(() => {
		gridServiceSpy = jasmine.createSpyObj('DrawingService', ['options']);
		TestBed.configureTestingModule({
			providers: [{ provide: GridService, useValue: gridServiceSpy }],
		});
		service = TestBed.inject(MagnetService);
		gridServiceSpy.options = new ToolOption(undefined, undefined, undefined, 1, true);
		gridServiceSpy.options.gridOptions.size = Global.SHIFT_AMOUNT;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should set isActive to true', () => {
		service.toggleIsActive();
		expect(service.isActive).toBeTrue();
	});

	it('should change the controlPoint', () => {
		service.changeControlPoint(ControlPoint.CenterDown.toString());
		expect(service.controlPoint).toEqual(ControlPoint.CenterDown);
	});

	it('should not change the position if magnet is not active', () => {
		service.isActive = false;
		const position = Global.DUMMY_POSITION;
		const boxSize = { x: 2, y: 2 };
		const direction = { x: 0, y: 0 };
		service.calculatePosition(position, boxSize, true, direction);
		expect(position).toEqual(Global.DUMMY_POSITION);
	});

	it('should change the position to the closest grid ', () => {
		service.isActive = true;
		let position = { ...Global.DUMMY_POSITION };
		const boxSize = { x: 1, y: 1 };
		const direction = { x: 0, y: 0 };
		service.calculatePosition(position, boxSize, true, direction);
		expect(position).toEqual({ x: Global.DUMMY_POSITION.x - boxSize.x / 2, y: Global.DUMMY_POSITION.y - boxSize.y / 2 });
		position = { x: Global.DUMMY_POSITION.x - boxSize.x, y: Global.DUMMY_POSITION.y - boxSize.y }; // 2,2
		service.calculatePosition(position, boxSize, true, direction);
		expect(position).toEqual({ x: Global.DUMMY_POSITION.x - boxSize.x / 2, y: Global.DUMMY_POSITION.y - boxSize.y / 2 });
	});

	it('should change the position to the next grid while using keyboard', () => {
		service.isActive = true;
		const position = { ...Global.DUMMY_POSITION };
		const boxSize = { x: 2, y: 2 };
		const direction = { x: Global.SHIFT_AMOUNT, y: 0 };
		service.calculatePosition(position, boxSize, false, direction);
		expect(position).toEqual({ x: Global.DUMMY_POSITION.x - boxSize.x / 2 + direction.x, y: Global.DUMMY_POSITION.y - boxSize.y / 2 });
	});
});
