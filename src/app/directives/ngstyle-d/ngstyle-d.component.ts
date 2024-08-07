import { Component } from '@angular/core';
@Component({
  selector: 'app-ngstyle-d',
  templateUrl: './ngstyle-d.component.html',
  styleUrls: ['./ngstyle-d.component.scss'],
})
export class NgStyleDComponent {
  products = [
    {
      id: 1,
      name: 'name-1',
      price: 2000,
      color: 'black',
      product: 'available',
    },
    {
      id: 2,
      name: 'name-2',
      price: 1000,
      color: 'white',
      product: 'unavailable',
    },
    { id: 3, name: 'name-3', price: 250, color: 'green', product: 'available' },
    { id: 4, name: 'name-4', price: 400, color: 'red', product: 'unavailable' },
    {
      id: 5,
      name: 'name-5',
      price: 500,
      color: 'yellow',
      product: 'available',
    },
    {
      id: 6,
      name: 'name-6',
      price: 345,
      color: 'blue',
      product: 'unavailable',
    },
  ];
}
