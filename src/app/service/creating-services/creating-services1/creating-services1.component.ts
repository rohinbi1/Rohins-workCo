import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';
// import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'creating-services1-root',
  templateUrl: './creating-services1.component.html',
  styleUrls: ['./creating-services1.component.scss'],
})
export class Craetingservices1Component {
  title = 'JAVASCRIPT';

  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.OnEnrollCliked(this.title);
  }
}
