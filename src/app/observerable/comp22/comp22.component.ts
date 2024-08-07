import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'comp22-root',
  templateUrl: './comp22.component.html',
  styleUrls: ['./comp22.component.scss'],
})
export class Comp22Component implements OnInit {
  inputText: string = '';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((value) => {
      this.inputText = value;
    });
  }
}
