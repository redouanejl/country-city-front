import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink:'/'
      },
      {
        label: 'Countries',
        icon: 'pi pi-globe',
        routerLink:'/countries'
      },
      {
        label: 'Cities',
        icon: 'pi pi-map-marker',
        routerLink:'/cities'
      }
    ];
  }

}
