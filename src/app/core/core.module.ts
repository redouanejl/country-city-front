import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [NavbarMenuComponent]
})
export class CoreModule { }
