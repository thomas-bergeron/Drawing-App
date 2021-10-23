import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveService } from '@app/services/index/save.service';
import { SaveComponent } from './save.component';
@NgModule({
	declarations: [SaveComponent],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatChipsModule,
		MatIconModule,
		MatInputModule,
		FormsModule,
		MatSnackBarModule,
	],
	providers: [SaveService],
	exports: [SaveComponent],
})
export class SaveModule {}
