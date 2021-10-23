import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerComponent } from 'src/app/components/color-picker/color-picker.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';

@NgModule({
	declarations: [ColorPickerComponent, ColorPaletteComponent, ColorSliderComponent],
	imports: [CommonModule, MatInputModule, MatSliderModule, MatFormFieldModule, FormsModule],
	exports: [ColorPickerComponent],
})
export class ColorPickerModule {}
