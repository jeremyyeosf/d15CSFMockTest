import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit () {
    this.form = this.fb.group({
      contactNo: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required]),
      orderDate: this.fb.control('', [Validators.required]),
      orderType: this.fb.control('', [Validators.required]),
      orderUnit: this.fb.control('', [Validators.required]),
      qrCode: this.fb.control('', [Validators.required]),
      bitcoinAddress: this.fb.control('', [Validators.required]),
    })
  }
}
