import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';
@Component({
  selector: 'creating-services2-root',
  templateUrl: './creating-services2.component.html',
  styleUrls: ['./creating-services2.component.scss'],
})
export class Craetingservices2Component {
  title = 'ANGULAR';

  constructor(private enrollService: EnrollService) {}

  Onentroll() {
    this.enrollService.OnEnrollCliked(this.title);
  }
}
