import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionBoxModule } from '@app/components/selection/selection-box/selection-box.module';
import { DrawingComponent } from './drawing.component';

@NgModule({
	declarations: [DrawingComponent],
	imports: [CommonModule, BrowserAnimationsModule, DragDropModule, SelectionBoxModule],
	exports: [DrawingComponent],
})
export class DrawingModule {}
