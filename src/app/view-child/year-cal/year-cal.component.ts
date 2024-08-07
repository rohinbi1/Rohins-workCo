import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemosComponent } from '../demos/demos.component';
@Component({
  selector: 'app-year-cal',
  templateUrl: './year-cal.component.html',
  styleUrls: ['./year-cal.component.scss'],
})
export class YearCalComponent {
  @ViewChild('dobinput') dateOfBirth!: ElementRef;
  @ViewChild('ageinput') age!: ElementRef;
  @ViewChild(DemosComponent, { static: true }) demoComp!: DemosComponent;
  calulateAge() {
    let birthYear = new Date(
      this.dateOfBirth.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    console.log(this.dateOfBirth, 'DOB');
    console.log(this.age, 'age');
  }
}
