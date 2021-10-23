import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarrouselModule } from 'src/app/components/carrousel/carrousel.module';
import { MainPageComponent } from './main-page.component';
@NgModule({
	declarations: [MainPageComponent],
	imports: [HttpClientModule, CommonModule, BrowserAnimationsModule, CarrouselModule, RouterModule, MatButtonModule, MatDialogModule],
	exports: [MainPageComponent],
})
export class MainPageModule {}
