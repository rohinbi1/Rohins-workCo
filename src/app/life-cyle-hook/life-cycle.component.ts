import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'life-cycle-root',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  @Input() value: string = 'Procademy';
  constructor() {
    console.log('constructor');
    // console.log(this.value, 'value');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChnages');
    console.log(change, 'parameter');
    //ngOnchnage is called when ever the value property got changed
    // ngOnChnage is the lifecycle hook in whioch only we can pass the parameter, called even though no change in inputfield
  }

  ngOnInit() {
    console.log('ngOnInit called');
    // console.log(this.value, 'value');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
    //whenever change happend this will , when ever event happend the angular runs change detectioncycle
    // this cycle is called  for every change detection
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    //only at frist child detection cycle it got called
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    //each chnage detection cycle
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
