import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'add-user-root',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  //   providers: [UserService],
})
export class AddUserComponent {
  userName: string = '';
  status: string = '';
  constructor(private userService: UserService) {}

  addUser() {
    this.userService.AddNewUser(this.userName, this.status);
    // console.log(this.userService.users, 'ssss');
  }
}
