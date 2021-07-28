import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "../../city/models/city";
import {Observable} from "rxjs";

const baseURL = "http://localhost:9090/api/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private  httpClient: HttpClient) { }

  addCity(city: City) : Observable<City>{
    return this.httpClient.post<City>(baseURL,city);
  }

  updateCity(city:City) : Observable<City>{
    const url = baseURL+"/"+city.id;
    return this.httpClient.put<City>(url,city);
  }

  deleteCity(id: number){
    const url = baseURL+"/"+id;
    return this.httpClient.delete<number>(url);
  }

  getCity(id: number) : Observable<City>{
    const url = baseURL+"/"+id;
    return this.httpClient.get<City>(url);
  }

  getCities() : Observable<City[]>{
    const url = baseURL+"/all";
    return this.httpClient.get<City[]>(url);
  }
}
