import { TestBed } from '@angular/core/testing';
import { TextOptions } from '@app/classes/text-options';
import { Vec2 } from '@app/classes/vec2';
import { Global, MouseEnum } from '@app/shared/global';
import { DrawingService } from 'src/app/services/drawing/drawing.service';
import { TextService } from './text.service';

describe('TextService', () => {
	// On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
	// tslint:disable:no-string-literal
	// tslint:disable: no-any
	let service: TextService;
	let drawingServiceSpy: jasmine.SpyObj<DrawingService>;

	beforeEach(() => {
		drawingServiceSpy = jasmine.createSpyObj('DrawingService', ['addAction', 'clearCanvas'], ['primaryColor']);

		TestBed.configureTestingModule({
			providers: [{ provide: DrawingService, useValue: drawingServiceSpy }],
		});
		service = TestBed.inject(TextService);

		drawingServiceSpy.baseCtx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		drawingServiceSpy.previewCtx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		drawingServiceSpy.canvasSize = { x: 400, y: 400 } as Vec2;
	});
	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('should call drawPreview', () => {
		spyOn<any>(service, 'drawPreview');
		const e = jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']);
		e.pageX = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS].pageX;
		e.pageY = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS].pageY;
		service.onMouseDown(e);
		expect(service['drawPreview']).toHaveBeenCalled();
	});
	it('should call drawPreview', () => {
		service.isDrawing = true;
		service['text'] = 'test';
		spyOn<any>(service, 'shouldEndEditing').and.returnValue(true);
		spyOn<any>(service, 'drawText').and.callFake(() => {
			return;
		});
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS]);
		expect(service['drawText']).toHaveBeenCalled();
	});
	it('should not call drawPreview', () => {
		service.isDrawing = true;
		spyOn<any>(service, 'shouldEndEditing').and.returnValue(true);
		spyOn<any>(service, 'drawText').and.callFake(() => {
			return;
		});
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS]);
		expect(service['drawText']).not.toHaveBeenCalled();
	});
	it('should call fontChanged and drawPreview', () => {
		jasmine.clock().install();
		service.isDrawing = true;
		spyOn<any>(service, 'shouldEndEditing').and.returnValue(false);
		const drawPreviewSpy = spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const fontChangedSpy = spyOn<any>(service, 'fontChanged').and.callThrough();
		service.onMouseDown(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS]);
		service['fontChanged']();

		expect(fontChangedSpy).toHaveBeenCalled();
		jasmine.clock().tick(Global.TIME_DELAY);
		expect(drawPreviewSpy).toHaveBeenCalled();
		jasmine.clock().uninstall();
	});
	it('should return true', () => {
		const dummyElement = document.createElement('div');
		spyOn(document, 'getElementById').and.returnValue(dummyElement);
		const mouseEvent = Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_CANVAS];
		expect(service['shouldEndEditing'](mouseEvent)).toBeTruthy();
	});
	it('should return false', () => {
		const dummyElement = document.createElement('div');
		spyOnProperty(dummyElement, 'offsetLeft').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT].offsetX);
		spyOnProperty(dummyElement, 'offsetWidth').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20].pageX);
		spyOnProperty(dummyElement, 'offsetTop').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT].offsetX);
		spyOnProperty(dummyElement, 'offsetHeight').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20].pageX);
		spyOn(document, 'getElementById').and.returnValue(dummyElement);
		const dummyColorPicker = document.createElement('div');
		spyOnProperty(dummyColorPicker, 'offsetLeft').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT].offsetX);
		spyOnProperty(dummyColorPicker, 'offsetWidth').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20].pageX);
		spyOnProperty(dummyColorPicker, 'offsetTop').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.TOP_LEFT].offsetX);
		spyOnProperty(dummyColorPicker, 'offsetHeight').and.returnValue(Global.MOUSE_EVENTS[MouseEnum.PAGE_INNER_OFFSET20].pageX);
		const dummyElements: HTMLCollection = Object.create(HTMLCollection.prototype);
		dummyElements[0] = dummyColorPicker;
		spyOn(document, 'getElementsByClassName').and.returnValue(dummyElements);
		const mouseEvent = { x: 35, y: 25 } as MouseEvent;
		expect(service['shouldEndEditing'](mouseEvent)).not.toBeTruthy();
	});
	it('should add key to the text', () => {
		service['text'] = 'tst';
		service['currentPos'] = 1;
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'e' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['text']).toEqual('test');
	});
	it('should add new line to the text', () => {
		service['text'] = 'tst';
		service['currentPos'] = 1;
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'Enter' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['text']).toEqual('t\nst');
	});
	it('should return true', () => {
		expect<any>(service['isPreventedKey']({ key: 'ContextMenu' } as KeyboardEvent)).toBeTruthy();
	});
	it('should only call drawPreview', () => {
		service['text'] = 'tst';
		service['currentPos'] = 1;
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'CapsLock' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['drawPreview']).toHaveBeenCalled();
	});
	it('should call backspaceEvent and delete a character', () => {
		service['text'] = 'test';
		service['currentPos'] = 2;
		spyOn<any>(service, 'backspaceEvent').and.callThrough();
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'Backspace' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['backspaceEvent']).toHaveBeenCalled();
		expect(service['text']).toEqual('tst');
	});
	it('should not delete a character', () => {
		service['text'] = 'test';
		service['currentPos'] = 0;
		service['backspaceEvent']();
		expect(service['text']).toEqual('test');
	});
	it('should call deleteEvent and delete a character', () => {
		service['text'] = 'test';
		service['currentPos'] = 2;
		spyOn<any>(service, 'deleteEvent').and.callThrough();
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'Delete' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['deleteEvent']).toHaveBeenCalled();
		expect(service['text']).toEqual('tet');
	});
	it('should call arrowRightEvent and increment currentPos', () => {
		service['text'] = 'test';
		service['currentPos'] = 2;
		spyOn<any>(service, 'arrowRightEvent').and.callThrough();
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'ArrowRight' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['arrowRightEvent']).toHaveBeenCalled();
		expect(service['currentPos']).toEqual(2 + 1);
	});
	it('should not increment currentPos', () => {
		service['text'] = 'test';
		const pos = service['text'].length;
		service['currentPos'] = pos;
		service['arrowRightEvent']();
		expect(service['currentPos']).toEqual(pos);
	});
	it('should call arrowLeftEvent and increment currentPos', () => {
		service['text'] = 'test';
		service['currentPos'] = 2;
		spyOn<any>(service, 'arrowLeftEvent').and.callThrough();
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'ArrowLeft' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['arrowLeftEvent']).toHaveBeenCalled();
		expect(service['currentPos']).toEqual(2 - 1);
	});

	it('should not increment currentPos', () => {
		service['text'] = 'test';
		service['currentPos'] = 0;
		service['arrowLeftEvent']();
		expect(service['currentPos']).toEqual(0);
	});
	it('should call ArrowUpEvent and ArrowDownEvent', () => {
		spyOn<any>(service, 'arrowUpEvent').and.callFake(() => {
			return;
		});
		spyOn<any>(service, 'arrowDownEvent').and.callFake(() => {
			return;
		});
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent1 = { key: 'ArrowUp' } as KeyboardEvent;
		const keyboardEvent2 = { key: 'ArrowDown' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent1);
		service.handleKeyDown(keyboardEvent2);
		expect(service['arrowUpEvent']).toHaveBeenCalled();
		expect(service['arrowDownEvent']).toHaveBeenCalled();
	});
	it('should be the same position as the beginning', () => {
		service['text'] = 'test\nteste\ntes';
		service['currentPos'] = 2;
		service['arrowUpEvent']();
		expect(service['currentPos']).toEqual(2);
	});
	it('should be the same position as the beginning', () => {
		service['text'] = 'test\nteste\nteas';
		const pos = service['text'].indexOf('a');
		service['currentPos'] = pos;
		service['arrowDownEvent']();
		expect(service['currentPos']).toEqual(pos);
	});
	it('should be the same position as the beginning', () => {
		service['text'] = 'test\nteste\ntes';
		service.options.textOptions.alignment = 'left';
		service['currentPos'] = 2;
		service['arrowDownEvent']();
		service['arrowDownEvent']();
		service['arrowUpEvent']();
		service['arrowUpEvent']();
		expect(service['currentPos']).toEqual(2);
	});
	it('should be the same position as the beginning', () => {
		service['text'] = 'test\nteste\ntes';
		service.options.textOptions.alignment = 'center';
		service['currentPos'] = 2;
		service['arrowDownEvent']();
		service['arrowDownEvent']();
		service['arrowUpEvent']();
		service['arrowUpEvent']();
		expect(service['currentPos']).toEqual(2);
	});
	it('should be the same position as the beginning', () => {
		service['text'] = 'test\nteste\ntes';
		service.options.textOptions.alignment = 'right';
		service['currentPos'] = 2;
		service['arrowDownEvent']();
		service['arrowDownEvent']();
		service['arrowUpEvent']();
		service['arrowUpEvent']();
		expect(service['currentPos']).toEqual(2);
	});
	it('should call escapeEvent and onMouseDown with preventDrawing', () => {
		service['text'] = 'test';
		spyOn<any>(service, 'escapeEvent').and.callThrough();
		spyOn(service, 'onMouseDown').and.callFake(() => {
			return;
		});
		spyOn<any>(service, 'drawPreview').and.callFake(() => {
			return;
		});
		const keyboardEvent = { key: 'Escape' } as KeyboardEvent;
		service.handleKeyDown(keyboardEvent);
		expect(service['escapeEvent']).toHaveBeenCalled();
		expect(service.onMouseDown).toHaveBeenCalledWith(new MouseEvent('mousedown'), true);
	});
	it('should return 2, 3', () => {
		service['text'] = 'test\ntesttest\ntesat?';
		service['currentPos'] = service['text'].indexOf('a');
		expect(service['getLinePos']()).toEqual({ x: 2, y: 3 } as Vec2);
	});
	it('should call drawText', () => {
		service['textPos'] = { x: 1, y: 2 } as Vec2;
		spyOn<any>(service, 'drawText').and.callFake(() => {
			return;
		});
		service['drawPreview']();
		expect(service['drawText']).toHaveBeenCalled();
	});
	it('should call fillRect', () => {
		spyOn(drawingServiceSpy.previewCtx, 'fillRect');
		spyOn<any>(service, 'getLinePos').and.returnValue({ x: 0, y: 0 } as Vec2);

		service['text'] = 'test\ntest';
		service['textPos'] = { x: 1, y: 2 } as Vec2;
		service.options.textOptions = new TextOptions();
		service.getDrawingService().primaryColor = 'red';
		service['drawPreview']();

		expect(drawingServiceSpy.previewCtx.fillRect).toHaveBeenCalled();
	});
	it('should call fillRect', () => {
		spyOn<any>(drawingServiceSpy.previewCtx, 'fillRect');
		spyOn<any>(service, 'getLinePos').and.returnValue({ x: 0, y: 0 } as Vec2);

		service['text'] = 'test\ntest';
		service['textPos'] = { x: 1, y: 2 } as Vec2;
		service.options.textOptions = new TextOptions();
		service.options.textOptions.alignment = 'center';
		service.getDrawingService().primaryColor = 'red';
		service['drawPreview']();

		expect(drawingServiceSpy.previewCtx.fillRect).toHaveBeenCalled();
	});
	it('should call fillRect', () => {
		spyOn(drawingServiceSpy.previewCtx, 'fillRect');
		spyOn<any>(service, 'getLinePos').and.returnValue({ x: 0, y: 0 } as Vec2);

		service['text'] = 'test\ntest';
		service['textPos'] = { x: 1, y: 2 } as Vec2;
		service.options.textOptions = new TextOptions();
		service.options.textOptions.alignment = 'right';
		service.options.textOptions.isBold = true;
		service.options.textOptions.isItalic = true;
		service.getDrawingService().primaryColor = 'red';
		service['drawPreview']();

		expect(drawingServiceSpy.previewCtx.fillRect).toHaveBeenCalled();
	});
	it('should call fillRect', () => {
		const ctx: CanvasRenderingContext2D = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
		spyOn(drawingServiceSpy.baseCtx, 'fillRect');
		service['drawText'](ctx, 'test\ntest', { x: 1, y: 2 } as Vec2, new TextOptions(), 'red');
		expect(drawingServiceSpy.baseCtx.fillRect).not.toHaveBeenCalled();
	});
});
