import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserInfoService } from './services/user-info.service';
import { Observable, from, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataService } from './services/data.service';
import { LoggerService } from './services/logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // providers: [EnrollService],
  providers: [UserService, UserInfoService, DataService],
})
export class AppComponent implements OnInit {
  users: { name: string; status: string }[] = [];
  public title = 'AngularCli';

  constructor(
    private logger: LoggerService,
    private userService: UserService,
    private userInfoservice: UserInfoService,
    private dataService: DataService
  ) {}

  // asyObserverable = new Observable((obsever) => {
  //   setTimeout(() => {
  //     obsever.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     obsever.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     obsever.next('3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   obsever.error(new Error('Something Went Wroung'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     obsever.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     obsever.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     obsever.complete();
  //   }, 6000);
  //   // console.log('observerable starts');
  //   // obsever.next('1');
  //   // obsever.next('2');
  //   // obsever.next('3');
  //   // obsever.next('4');
  //   // obsever.next('5');
  // });

  // array1 = [1, 2, 6, 7, 8];
  // array2 = ['A', 'B', 'C'];
  // myObservable = from(this.array1);

  // tranformObs = this.myObservable.pipe(
  //   map((vals) => {
  //     return (vals = 5);
  //   }),
  //   filter((vals) => {
  //     return vals >= 30;
  //   })
  // );
  // filterOb = this.tranformObs.pipe(
  //   filter((vals) => {
  //     return vals >= 30;
  //   })
  // );

  counterObs = interval(1000);
  countetrSub: any;
  ngOnInit() {
    this.countetrSub = this.counterObs.subscribe((val) => {
      // console.log(val, 'sssss');
    });

    // this.asyObserverable.subscribe(
    //   (val) => {
    //     console.log(val);
    //   },
    //   (error) => {
    //     alert(error.message);
    //   },
    //   () => {
    //     alert('Observable have completed emitting all the values');
    //   }
    // );
    // this.users = this.userService.users;
    // this.myObservable.subscribe(
    //   (vals) => {
    //     console.log('vals');
    //   },
    //   (error) => {
    //     alert(error.message);
    //   }
    //   // () => {
    //   //   alert('observable has complete emtting all values.');
    //   // }
    // );
  }

  unSubscribe() {
    this.countetrSub.unsubscribe();
  }
  subscribe() {
    this.countetrSub = this.counterObs.subscribe((val) => {
      console.log(val);
    });
  }

  inputText: string = '';
  OnSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
}

// obeserable will not emit anything after the error , if u provide complete also
//  For example u added some style to button in AppComponent.scss that will only dislapy for app not other by default and by encapusulation.Emulated
//  and instead if give encapsulation None it will effect to app and all the comp which are created in app .
//  and if u added styles in scss insted of AppComponent.scss and given encapsulation ShowDown only that Component will not effected by sccs styles
