import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {

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
