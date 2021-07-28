import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import {CountryRoutingModule} from "./country-routing.module";
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    CountryRoutingModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [MessageService]
})
export class CountryModule { }
