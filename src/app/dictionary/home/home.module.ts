import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
