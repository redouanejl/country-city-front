import {Country} from "../../country/models/country";

export interface City {
  id?: number;
  name: string;
  country: Country;
}
