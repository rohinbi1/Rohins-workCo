import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'all';

  @Output() filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButoonSelectionChanged() {
    console.log(this.selectedRadioButtonValue, 'selectedRadioButton');
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }
}
