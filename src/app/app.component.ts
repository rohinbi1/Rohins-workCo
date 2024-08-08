import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: { name: string; status: string }[] = [];
  public title = 'AngularCli';

  constructor() {}

  counterObs = interval(1000);
  countetrSub: any;
  ngOnInit() {}
}
