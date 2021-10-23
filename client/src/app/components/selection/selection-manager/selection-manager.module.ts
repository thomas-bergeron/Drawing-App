import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionManagerComponent } from './selection-manager.component';

@NgModule({
	declarations: [SelectionManagerComponent],
	imports: [CommonModule, BrowserAnimationsModule, DragDropModule],
	exports: [SelectionManagerComponent],
})
export class SelectionManagerModule {}
