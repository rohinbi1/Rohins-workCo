import { Component } from '@angular/core';
@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.componnet.html',
  styleUrls: ['./string-interpolation.componnet.scss'],
})
export class StringInterpolationComponent {
  public name: any = 'Rohin';
  speak() {
    return this.name;
  }
}
