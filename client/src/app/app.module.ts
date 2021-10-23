import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EditorModule } from './components/editor/editor.module';
import { ExportModule } from './components/export/export.module';
import { MainPageModule } from './components/main-page/main-page.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, AppRoutingModule, MainPageModule, EditorModule, ExportModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
