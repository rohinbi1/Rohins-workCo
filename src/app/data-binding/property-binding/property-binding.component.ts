import { Component } from '@angular/core';
@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent {
  public source: string = '/assets/profile-selfie.png';
  public displayNotification: boolean = true;
}
