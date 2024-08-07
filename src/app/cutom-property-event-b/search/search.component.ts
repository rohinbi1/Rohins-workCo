import { Interpolation } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  enteredSearchValue: string = '';
  @Output() seachTextChange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange() {
    this.seachTextChange.emit(this.enteredSearchValue);
  }
}
