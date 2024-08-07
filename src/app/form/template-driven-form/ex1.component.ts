import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'ex1-root',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss'],
})
export class Ex1DComponent {
  // onSubmit(myForm: NgForm) {
  //   console.log(myForm);
  // }
  @ViewChild('myForm') form: NgForm | undefined;
  defaultCountry: string = 'india';
  fName: string = '';
  lName: string = '';
  email: string = '';
  gend: string = '';
  country: string = '';

  onSubmit() {
    console.log(this.form, 'form');
    this.fName = this.form?.value.personaldetails.firstname;
    this.lName = this.form?.value.personaldetails.lastname;
    this.email = this.form?.value.personaldetails.email;
    this.gend = this.form?.value.personaldetails.gender;
    this.country = this.form?.value.personaldetails.country;
  }
  defaultGender = 'Male';
  gender = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' },
  ];
  // addresses: string[] = [];
  // addressCounter: number = 1;

  // addAddress() {
  //   const newAddress = `Address ${this.addressCounter}`;
  //   this.addresses.push(newAddress);
  //   this.addressCounter++;
  // }
  addresses: string[] = [];
  dummy: string[] = ['123 hyd', '456 bng', '789 blk', '101 bddr', '202 zhr'];
  currentIndex: number = 0;

  setDefaultValue() {
    // this.form?.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personaldetails: {
    //     firstname: 'Jon',
    //     lastname: 'smith',
    //     email: 'abc@gmail.com',
    //   },
    // });
    this.form?.form.patchValue({
      personaldetails: {
        firstname: 'Jon',
        lastname: 'smith',
        email: 'abc@gmail.com',
      },
    });
  }

  addAddress() {
    if (this.currentIndex < this.dummy.length) {
      console.log(this.currentIndex, 'index');

      this.addresses.push(this.dummy[this.currentIndex]);
      this.currentIndex++;
    }
  }
}
