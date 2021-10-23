import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FicheModule } from 'src/app/components/fiche/fiche.module';
import { CarrouselComponent } from './carrousel.component';
@NgModule({
	declarations: [CarrouselComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		BrowserAnimationsModule,
		MatButtonModule,
		FicheModule,
		MatChipsModule,
		MatIconModule,
		MatFormFieldModule,
		MatAutocompleteModule,
		FormsModule,
		ReactiveFormsModule,
		MatSnackBarModule,
		MatProgressBarModule,
	],
	exports: [CarrouselComponent],
})
export class CarrouselModule {}
