import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes :Routes = [
  { path: '', loadChildren: ()=> import('src/app/dictionary/home/home.module').then(m => m.HomeModule) },
  { path: 'countries', loadChildren:() => import('src/app/dictionary/country/country.module').then(m => m.CountryModule) },
  { path: 'cities', loadChildren:() => import('src/app/dictionary/city/city.module').then(m => m.CityModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
