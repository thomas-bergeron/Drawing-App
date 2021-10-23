import { Component } from '@angular/core';
import { MouseButton } from '@app/shared/global';
import { DrawingService } from 'src/app/services/drawing/drawing.service';

@Component({
	selector: 'app-color-panel',
	templateUrl: './color-panel.component.html',
	styleUrls: ['./color-panel.component.scss'],
})
export class ColorPanelComponent {
	primaryColorPicker: boolean = false;
	secondColorPicker: boolean = false;

	constructor(private drawingService: DrawingService) {}

	switchMainColors(): void {
		const primaryColor: string = this.primaryColor;
		this.primaryColor = this.secondaryColor;
		this.secondaryColor = primaryColor;
	}

	useColorHistory(event: MouseEvent, color: string): void {
		let changePrimaryColor: boolean | null = null;
		if (event.button === MouseButton.Left) {
			changePrimaryColor = true;
		} else if (event.button === MouseButton.Right) {
			changePrimaryColor = false;
		}

		if (changePrimaryColor !== null) {
			this.drawingService.changeColor(color, changePrimaryColor, false);
		}
	}

	get colorHistory(): string[] {
		return this.drawingService.colorHistory;
	}

	get primaryColor(): string {
		return this.drawingService.primaryColor;
	}

	set primaryColor(value: string) {
		this.drawingService.primaryColor = value;
	}

	get secondaryColor(): string {
		return this.drawingService.secondaryColor;
	}

	set secondaryColor(value: string) {
		this.drawingService.secondaryColor = value;
	}
}
