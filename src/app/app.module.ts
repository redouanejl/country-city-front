import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
