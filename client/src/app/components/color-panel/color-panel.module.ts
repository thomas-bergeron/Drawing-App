import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ColorPickerModule } from '@app/components/color-picker/color-picker.module';
import { ColorPanelComponent } from './color-panel.component';

@NgModule({
	declarations: [ColorPanelComponent],
	imports: [CommonModule, ColorPickerModule, MatButtonModule, MatMenuModule],
	exports: [ColorPanelComponent],
})
export class ColorPanelModule {}
