import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarningComponent } from './warning.component';

@NgModule({
	declarations: [WarningComponent],
	imports: [CommonModule, MatDialogModule, BrowserAnimationsModule, MatButtonModule],
	exports: [WarningComponent],
})
export class WarningModule {}
