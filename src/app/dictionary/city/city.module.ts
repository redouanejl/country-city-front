import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityListComponent } from './city-list/city-list.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    CityListComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CityRoutingModule
  ],
  providers: [MessageService]
})
export class CityModule { }
