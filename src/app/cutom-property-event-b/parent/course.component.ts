import { Component } from '@angular/core';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CoursesComponent {
  courses = [
    {
      id: 101,
      name: 'Angular For Beginner',
      author: 'Mark Youth',
      duration: 18.5,
      type: 'premium',
      price: 2000,
      rating: 4.5,
      image: '',
      desc: 'This course is good for beginner to learn the angular end to end before starting this course berief about html,css,ts and js ',
    },
    {
      id: 102,
      name: 'Javascript For Beginner',
      author: 'Mark Youth',
      duration: 15.5,
      type: 'free',
      price: 123.6,
      rating: 4.4,
      image: '',
      desc: 'This course is good for beginner to learn the angular end to end before starting this course berief about html,css,ts and js ',
    },
    {
      id: 103,
      name: 'GitHub',
      author: 'Mark Youth',
      duration: 10.5,
      type: 'premium',
      price: 100.1,
      rating: 4.3,
      image: '',
      desc: 'This course is good for beginner to learn the angular end to end before starting this course berief about html,css,ts and js ',
    },
    {
      id: 104,
      name: 'BitBucket',
      author: 'Mark Youth',
      duration: 12.5,
      type: 'free',
      price: 222.1,
      rating: 4.6,
      image: '',
      desc: 'This course is good for beginner to learn the angular end to end before starting this course berief about html,css,ts and js ',
    },
    {
      id: 105,
      name: 'HTML For Beginner',
      author: 'Mark Youth',
      duration: 8.8,
      type: 'premium',
      price: 89.8,
      rating: 4.7,
      image: '',
      desc: 'This course is good for beginner to learn the angular end to end before starting this course berief about html,css,ts and js ',
    },
    {
      id: 106,
      name: 'CSS For Beginner',
      author: 'Mark Youth',
      duration: 16.8,
      type: 'free',
      price: 250.8,
      rating: 4.2,
      image: '',
      desc: 'This course is good for beginner to learn the angular end to end before starting this course berief about html,css,ts and js ',
    },
  ];
  getTotalCourses() {
    return this.courses.length;
  }
  getTotalFreeCourses() {
    return this.courses.filter((course1) => course1.type === 'free').length;
  }
  getPremiumCourses() {
    return this.courses.filter((course2) => course2.type === 'premium').length;
  }

  courseCouttonRadioButton: string = 'all';

  onFilterRadioButoonChanged(data: string) {
    this.courseCouttonRadioButton = data;
    console.log(this.courseCouttonRadioButton, 'ffff');
  }
  searchText: string = '';
  onsearchTechEntered(saerchValue: string) {
    this.searchText = saerchValue;
    console.log(this.searchText, 'searchtext');
  }
}
