import { Injectable } from '@angular/core';

@Injectable()
export class EnrollService {
  OnEnrollCliked(title: string) {
    alert('welcome to ' + title + ' course ');
  }
}
