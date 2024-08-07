import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
@Component({
  selector: 'user-details-comp2',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  //   users: {
  //     name: string;
  //     age: number;
  //     gender: string;
  //     job: string;
  //     country: string;
  //     avatar: string;
  //   };
  constructor(private userInforService: UserInfoService) {}

  ngOnInit() {
    this.userInforService.OnShowDetailsCliked.subscribe(
      (data: {
        name: string;
        age: number;
        gender: string;
        job: string;
        country: string;
        avatar: string;
      }) => {
        // this.users = data;
      }
    );
  }
}
