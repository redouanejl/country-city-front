import { Country } from './models/country.model';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new Country()).toBeTruthy();
  });
});
