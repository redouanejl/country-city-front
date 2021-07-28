import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from "../models/city";
import {Subscription} from "rxjs";
import {MessageService} from "primeng/api";
import {CityService} from "../../city/services/city.service";
import {Country} from "../../country/models/country";
import {CountryService} from "../../country/services/country.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit, OnDestroy {

  cityDialog: boolean = false;

  cities: City[] = [];

  countries: Country[] = [];

  city = {} as City;

  index?: number;

  citySubscription!: Subscription;

  countrySubscription!: Subscription;


  constructor(private messageService: MessageService, private cityService: CityService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.citySubscription = this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
    this.countrySubscription = this.countryService.getCountries().subscribe(data => {
      this.countries = data
    })
  }

  openNew() {
    this.city = {name:"",country:{id:1,name:"Morocco"}};
    this.cityDialog = true;
  }

  editCity(city: City, ri: any) {
    this.index = ri;
    this.city = {...city};
    this.cityDialog = true;
  }

  deleteCity(city: City) {
    this.cities.find((item, index) => {
      if (item?.id && item.id == city.id) {
        this.cities.splice(index, 1);
        this.cityService.deleteCity(city.id).subscribe(data => {
        },error => {
          this.messageService.add({severity: 'error', summary: 'Deleted', detail: 'City Deleted', life: 3000});
        });
      }
    })
  }

  hideDialog() {
    this.cityDialog = false;
  }

  saveCity() {
    if (!this.city.id) {
      this.cityService.addCity({ name: this.city.name, country: this.city.country.id } as any).subscribe(data => {
        data.country = this.city.country;
        this.cities.push(data);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'City Created', life: 3000});
        this.city = {} as City;
        this.hideDialog();
      });
    } else {
      this.cities.find(item => {
        if (item.id == this.city.id) {
          item.name = this.city.name;
          item.country = this.city.country;
          this.cityService.updateCity({ id: this.city.id, name: this.city.name, country: this.city.country.id } as any).subscribe(data => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'City Updated',
              life: 3000
            });
            if (this.index) {
              this.cities[this.index!] = this.city;
              this.index = undefined;
            }
            this.city = {} as City;
            this.hideDialog();
          });
        }
      })
    }
  }


  ngOnDestroy(): void {
    this.citySubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }
}
