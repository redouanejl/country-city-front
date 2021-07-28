import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../models/country";

const baseURL = "http://localhost:9090/api/country"

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private  httpClient: HttpClient) { }

  addCountry(country: Country){
    return this.httpClient.post(baseURL,country);
  }

  updateCountry(country:Country){
    const url = baseURL+"/"+country.id;
    return this.httpClient.put(url,country);
  }

  deleteCountry(id: number){
    const url = baseURL+"/"+id;
    console.log(url);
    return this.httpClient.delete(url);
  }

  getCountry(id: number){
    const url = baseURL+"/"+id;
    return this.httpClient.get<Country>(url);
  }

  getCountries(){
    const url = baseURL+"/all";
    return this.httpClient.get<Country[]>(url);
  }
}
