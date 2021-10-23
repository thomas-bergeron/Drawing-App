import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FicheComponent } from './fiche.component';
@NgModule({
	declarations: [FicheComponent],
	imports: [CommonModule, MatProgressBarModule, MatButtonModule],
	exports: [FicheComponent],
})
export class FicheModule {}
