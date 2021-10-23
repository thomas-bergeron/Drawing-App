import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportComponent } from './export.component';

@NgModule({
	declarations: [ExportComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		MatSelectModule,
		MatFormFieldModule,
		MatAutocompleteModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSnackBarModule,
	],
	exports: [ExportComponent],
})
export class ExportModule {}
