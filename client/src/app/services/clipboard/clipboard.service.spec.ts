import { async, TestBed } from '@angular/core/testing';
import { DrawingService } from '@app/services/drawing/drawing.service';
import { GridService } from '@app/services/grid/grid.service';
import { MagnetService } from '@app/services/grid/magnet.service';
import { RectangleSelectionService } from '@app/services/selection/rectangle-selection.service';
import { ShiftSelectionService } from '@app/services/selection/shift-selection.service';
import { Global } from '@app/shared/global';
import { ClipboardService } from './clipboard.service';

describe('ClipboardService', () => {
	let service: ClipboardService;
	let rectangleSelectionStub: RectangleSelectionService;
	let drawServiceSpy: jasmine.SpyObj<DrawingService>;
	let selectionStub: ImageData;

	// pour tester les méthodes privées
	// tslint:disable: no-any
	// tslint:disable: no-string-literal
	beforeEach(async(() => {
		drawServiceSpy = jasmine.createSpyObj('DrawingService', ['clearCanvas', 'addAction'], ['baseCtx']);
		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawServiceSpy }],
		}).compileComponents();
		service = TestBed.inject(ClipboardService);

		rectangleSelectionStub = new RectangleSelectionService(
			drawServiceSpy,
			new ShiftSelectionService(drawServiceSpy, new MagnetService(new GridService(drawServiceSpy))),
		);
		rectangleSelectionStub.origin = Global.TEST_VECTOR;
		rectangleSelectionStub.deltaX = rectangleSelectionStub.deltaY = Global.TEST_VECTOR.x;
		selectionStub = new ImageData(2, 2);
		rectangleSelectionStub.selection = selectionStub;
	}));

	beforeEach(() => {
		service.selector = rectangleSelectionStub;
		spyOn<any>(service, 'copySelection').and.callThrough();
		spyOn<any>(service, 'cutSelection').and.callThrough();
		spyOn<any>(service, 'pasteSelection').and.callThrough();
		spyOn<any>(service, 'deleteSelection').and.callThrough();
		spyOn(service.selector, 'redrawSelection').and.callFake(() => {
			return;
		});
		spyOn(service.selector, 'deleteCurrentSelection').and.callFake(() => {
			return;
		});
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('handleCommand should call the appropriate method', () => {
		service.handleCommand('c', 0);
		expect(service['copySelection']).toHaveBeenCalled();
		service.handleCommand('v', 0);
		expect(service['pasteSelection']).toHaveBeenCalled();
		service.handleCommand('x', 0);
		expect(service['cutSelection']).toHaveBeenCalled();
		service.handleCommand('Delete', 0);
		expect(service['deleteSelection']).toHaveBeenCalled();
	});

	it('copySelection should set the clip values', () => {
		service.selector.isActiveSelection = true;
		service['copySelection']();
		expect(service['clip'].selection).toEqual(selectionStub);
		expect(service['clip'].posX).toEqual(rectangleSelectionStub.origin.x);
		expect(service['clip'].posY).toEqual(rectangleSelectionStub.origin.y);
		expect(service['clip'].width).toEqual(Math.abs(rectangleSelectionStub.deltaX));
		expect(service['clip'].height).toEqual(Math.abs(rectangleSelectionStub.deltaY));
	});

	it('cutSelection should copy then delete the selection', () => {
		service.selector.isActiveSelection = true;
		service['cutSelection'](1);
		expect(service['copySelection']).toHaveBeenCalled();
		expect(service.selector.redrawSelection).toHaveBeenCalledWith(
			{ x: service['clip'].posX, y: service['clip'].posY },
			1,
			{ x: service['clip'].width, y: service['clip'].height },
			service['clip'].selection,
		);
		expect(service.selector.deleteCurrentSelection).toHaveBeenCalled();
	});

	it('cutSelection should change the clip size to 1 each if it is 0', () => {
		service.selector.isActiveSelection = true;
		service.selector.isActiveSelection = true;
		service['clip'].width = service['clip'].height = 0;
		rectangleSelectionStub.deltaX = rectangleSelectionStub.deltaY = 0;
		service.selector = rectangleSelectionStub;
		service['cutSelection'](1);
		expect(service.selector.redrawSelection).toHaveBeenCalledWith(
			{ x: service['clip'].posX, y: service['clip'].posY },
			1,
			Global.UNITARY_VECTOR,
			service['clip'].selection,
		);
	});

	it('cutSelection should set operation to 0 if it is not 1', () => {
		service.selector.isActiveSelection = true;
		service['cutSelection'](2);
		expect(service.selector.redrawSelection).toHaveBeenCalledWith(
			{ x: service['clip'].posX, y: service['clip'].posY },
			0,
			{ x: service['clip'].width, y: service['clip'].height },
			service['clip'].selection,
		);
	});

	it('pasteSelection should paste the clip at 0,0 if it can paste', () => {
		service.clipSize.x = service.clipSize.y = 1;
		service['canPaste'] = true;
		service['pasteSelection']();
		expect(service.selector.redrawSelection).toHaveBeenCalled();
		expect(service.selector.selection).toEqual(service['clip'].selection);
		expect(service['clip'].posX).toEqual(0);
		expect(service['clip'].posY).toEqual(0);
		expect(service.selector.origin).toEqual({ x: 0, y: 0 });
		expect(service.selector.isActiveSelection).toEqual(true);
	});

	it('pasteSelection should not paste the clip if it cannot paste', () => {
		service['canPaste'] = false;
		service['pasteSelection']();
		expect(service.selector.redrawSelection).not.toHaveBeenCalled();
	});

	it('cutSelection should change the clip size to 1 each if it is 0', () => {
		service.clipSize.x = service.clipSize.y = 0;
		service['clip'].width = service['clip'].height = Global.TEST_VECTOR.x;
		rectangleSelectionStub.deltaX = rectangleSelectionStub.deltaY = Global.DEFAULT_VECTOR.x;
		service.selector = rectangleSelectionStub;
		service['canPaste'] = true;
		service['pasteSelection']();
		expect(service.selector.redrawSelection).toHaveBeenCalledWith(
			{ x: service['clip'].posX, y: service['clip'].posY },
			1,
			{ x: service['clip'].width, y: service['clip'].height },
			service['clip'].selection,
		);
	});
});
