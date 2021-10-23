import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPanelModule } from '@app/components/color-panel/color-panel.module';
import { AttributesPanelComponent } from './attributes-panel.component';

@NgModule({
	declarations: [AttributesPanelComponent],
	imports: [
		CommonModule,
		MatSliderModule,
		BrowserAnimationsModule,
		MatSlideToggleModule,
		ColorPanelModule,
		MatSelectModule,
		MatButtonToggleModule,
		MatIconModule,
	],
	exports: [AttributesPanelComponent],
})
export class AttributesPanelModule {}
