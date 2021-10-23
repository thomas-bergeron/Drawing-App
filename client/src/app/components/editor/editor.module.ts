import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawingModule } from 'src/app/components/drawing/drawing.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { EditorComponent } from './editor.component';

@NgModule({
	declarations: [EditorComponent],
	imports: [CommonModule, BrowserAnimationsModule, SidebarModule, DrawingModule],
	exports: [EditorComponent],
	providers: [],
})
export class EditorModule {}
