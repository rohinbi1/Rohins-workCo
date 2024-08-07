import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
@Component({
  selector: 'all-user-root',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
})
export class AllUserComponent implements OnInit {
  users: {
    name: string;
    age: number;
    gender: string;
    job: string;
    country: string;
    avatar: string;
  }[] = [];
  constructor(private userInfoService: UserInfoService) {}
  ngOnInit() {
    this.users = this.userInfoService.userInfo;
  }
  showDetails(userInfo: {
    name: string;
    age: number;
    gender: string;
    job: string;
    country: string;
    avatar: string;
  }) {
    this.userInfoService.ShowUserDetails(userInfo);
  }
}
