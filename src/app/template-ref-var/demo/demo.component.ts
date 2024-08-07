import { Component } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  public searchedText: string = '';

  SayHello(InputEL: HTMLInputElement) {
    alert('hello' + ' ' + InputEL.value);
    // console.log(InputEL, 'ssssss');
  }
}
