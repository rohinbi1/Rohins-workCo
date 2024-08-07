import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'comp11-root',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.scss'],
})
export class Comp11Component implements OnInit {
  enteredText: string = '';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}

  OnButtonClick() {
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }
}
