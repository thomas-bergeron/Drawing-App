import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttributesPanelModule } from 'src/app/components/attributes-panel/attributes-panel.module';
import { CarrouselModule } from 'src/app/components/carrousel/carrousel.module';
import { SaveModule } from 'src/app/components/save/save.module';
import { WarningModule } from 'src/app/components/warning/warning.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
	declarations: [SidebarComponent],
	imports: [
		FormsModule,
		CommonModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatMenuModule,
		MatSelectModule,
		MatTooltipModule,
		CarrouselModule,
		WarningModule,
		AttributesPanelModule,
		SaveModule,
	],
	exports: [SidebarComponent],
})
export class SidebarModule {}
