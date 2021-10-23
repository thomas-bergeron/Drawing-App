import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionManagerModule } from '@app/components/selection/selection-manager/selection-manager.module';
import { SelectionBoxComponent } from './selection-box.component';

@NgModule({
	declarations: [SelectionBoxComponent],
	imports: [CommonModule, BrowserAnimationsModule, DragDropModule, SelectionManagerModule],
	exports: [SelectionBoxComponent],
})
export class SelectionBoxModule {}
