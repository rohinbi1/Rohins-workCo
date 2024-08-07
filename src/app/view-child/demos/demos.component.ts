import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
})
export class DemosComponent {
  sayHello() {
    console.log('hello from demo comp');
  }
}
