import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { DrawingService } from 'src/app/services/drawing/drawing.service';
import { Global } from 'src/app/shared/global';

@Component({
	selector: 'app-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit, OnDestroy {
	@Input() isPrimaryColor: boolean = true;
	@Output() shouldHide: EventEmitter<void> = new EventEmitter();

	HEX_COLOR_PATTERN: RegExp = new RegExp('^([0-9A-Fa-f]{2})$');

	hue: string = '#FF0000FF';
	color: string;

	constructor(private drawingService: DrawingService, private eventManager: EventManagerService, private elementRef: ElementRef) {}

	ngOnInit(): void {
		this.color = this.isPrimaryColor ? this.drawingService.primaryColor : this.drawingService.secondaryColor;
		this.eventManager.disableShortcuts();
	}

	ngOnDestroy(): void {
		this.eventManager.enableShortcuts();
	}

	@HostListener('document:mousedown', ['$event'])
	onMouseDown(evt: MouseEvent): void {
		const dimensions = this.elementRef.nativeElement.getBoundingClientRect();
		const x = evt.x - dimensions.left;
		const y = evt.y - dimensions.top;

		if (x < 0 || x >= dimensions.width || y < 0 || y > dimensions.height) {
			this.shouldHide.emit();
		}
	}

	changeColor(color: string): void {
		this.color = this.replaceStringAt(this.color, 0, color);
	}

	updateColor(): void {
		this.drawingService.changeColor(this.color, this.isPrimaryColor, true);
	}

	@HostListener('document:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent): void {
		const charCodeAt = event.key.charCodeAt(0);

		if (
			(charCodeAt >= '0'.charCodeAt(0) && charCodeAt <= '9'.charCodeAt(0)) ||
			(charCodeAt >= 'a'.charCodeAt(0) && charCodeAt <= 'f'.charCodeAt(0)) ||
			(charCodeAt >= 'A'.charCodeAt(0) && charCodeAt <= 'F'.charCodeAt(0)) ||
			event.key === 'Backspace' ||
			event.key === 'Delete'
		) {
			return;
		}

		event.preventDefault();
	}

	get hexR(): string {
		return this.color.substring(Global.RED_INDEX_HEX, Global.RED_INDEX_HEX + Global.HEX_COLOR_LENGTH);
	}

	set hexR(value: string) {
		if (value.length === 2 && value.match(this.HEX_COLOR_PATTERN)) {
			this.color = this.replaceStringAt(this.color, Global.RED_INDEX_HEX, value);
		}
	}

	get hexG(): string {
		return this.color.substring(Global.GREEN_INDEX_HEX, Global.GREEN_INDEX_HEX + Global.HEX_COLOR_LENGTH);
	}

	set hexG(value: string) {
		if (value.length === 2 && value.match(this.HEX_COLOR_PATTERN)) {
			this.color = this.replaceStringAt(this.color, Global.GREEN_INDEX_HEX, value);
		}
	}

	get hexB(): string {
		return this.color.substring(Global.BLUE_INDEX_HEX, Global.BLUE_INDEX_HEX + Global.HEX_COLOR_LENGTH);
	}

	set hexB(value: string) {
		if (value.length === 2 && value.match(this.HEX_COLOR_PATTERN)) {
			this.color = this.replaceStringAt(this.color, Global.BLUE_INDEX_HEX, value);
		}
	}

	get alpha(): number {
		const alphaString: string = this.color.substring(Global.ALPHA_INDEX_HEX, Global.ALPHA_INDEX_HEX + Global.HEX_COLOR_LENGTH);
		return +(parseInt(alphaString, 16) / Global.MAX_HEX_VALUE).toFixed(2);
	}

	set alpha(value: number) {
		let newAlpha = Math.floor(value * Global.MAX_HEX_VALUE)
			.toString(16)
			.toUpperCase();

		if (newAlpha.length === 1) newAlpha = '0' + newAlpha;

		this.color = this.replaceStringAt(this.color, Global.ALPHA_INDEX_HEX, newAlpha);
	}

	private replaceStringAt(stringToModify: string, index: number, stringToInsert: string): string {
		return stringToModify.substring(0, index) + stringToInsert + stringToModify.substring(index + stringToInsert.length);
	}
}
