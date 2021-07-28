import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {Country} from "../models/country";
import {CountryService} from "../services/country.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {

  countryDialog: boolean = false;

  countries: Country[] = [];

  country = {} as Country;

  countrySubscription!: Subscription;

  constructor(private messageService: MessageService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countrySubscription = this.countryService.getCountries().subscribe(data => {
      this.countries = data
    })
  }

  openNew() {
    this.country = {} as Country;
    this.countryDialog = true;
  }

  editCountry(country: Country) {
    this.country = {...country};
    this.countryDialog = true;
  }

  deleteCountry(country: Country) {
    this.countries.find((item, index) => {
      if (item?.id && item.id == country.id) {
        this.countries.splice(index, 1);
        this.countryService.deleteCountry(country.id).subscribe(data => {
          this.messageService.add({severity: 'error', summary: 'Deleted', detail: 'Product Deleted', life: 3000});
        });
      }
    })
  }

  hideDialog() {
    this.countryDialog = false;
  }

  saveCountry() {
    if (!this.country.id) {
      this.countryService.addCountry(this.country).subscribe(data => {
        this.countries.push(data as Country);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      });

    } else {
      this.countries.find(item => {
        if (item.id == this.country.id) {
          item.name = this.country.name;
          this.countryService.updateCountry(this.country).subscribe(data => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Product Updated',
              life: 3000
            });
          });
        }
      })
    }
    this.countries = [...this.countries];
    this.country = {} as Country;
    this.hideDialog();
  }


  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
  }
}
