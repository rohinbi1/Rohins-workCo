import { Component } from '@angular/core';
@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  public searchValue: string = '';
  changeInput(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
  displayNotification: boolean = false;

  onClickHide() {
    this.displayNotification = true;
  }
}
