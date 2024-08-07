import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {
  userInfo = [
    {
      name: 'rohin',
      age: 23,
      gender: 'female',
      job: 'engineer',
      country: 'india',
      avatar: 'src="/assets/profile-selfie.png"',
    },
    {
      name: 'raju',
      age: 28,
      gender: 'male',
      job: 'teacher',
      country: 'us',
      avatar: 'src="/assets/profile-selfie.png"',
    },
    {
      name: 'roma',
      age: 22,
      gender: 'female',
      job: 'lawyer',
      country: 'uk',
      avatar: 'src="/assets/profile-selfie.png"',
    },
    {
      name: 'rani',
      age: 29,
      gender: 'female',
      job: 'pm',
      country: 'canada',
      avatar: 'src="/assets/profile-selfie.png"',
    },
    {
      name: 'john',
      age: 30,
      gender: 'others',
      job: 'makeup artist',
      country: 'maxico',
      avatar: 'src="/assets/profile-selfie.png"',
    },
  ];

  OnShowDetailsCliked = new EventEmitter<{
    name: string;
    age: number;
    gender: string;
    job: string;
    country: string;
    avatar: string;
  }>();

  ShowUserDetails(userInfo: {
    name: string;
    age: number;
    gender: string;
    job: string;
    country: string;
    avatar: string;
  }) {
    this.OnShowDetailsCliked.emit(userInfo);
  }
}
