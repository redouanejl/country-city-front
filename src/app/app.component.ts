import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars : string[] = [
    'Toyota',
    'Mazda',
    'Mercedes Benz',
    'Audi',
    'BMW'
  ]
}
