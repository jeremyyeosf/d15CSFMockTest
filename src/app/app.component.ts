import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  minDate: Date;
  maxDate: Date;
  buySelected: boolean

  constructor(private fb: FormBuilder, private btService: BitcoinService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit () {
    this.form = this.fb.group({
      contactNo: this.fb.control('', [Validators.required, Validators.pattern("^[6|8|9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$")]),
      name: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required]),
      orderDate: this.fb.control('', [Validators.required]),
      orderType: this.fb.control('', [Validators.required]),
      orderUnit: this.fb.control('', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]),
      qrCode: this.fb.control(''),
      bitcoinAddress: this.fb.control(''),
      // {value: '', disabled: !this.buySelected}
    })
  }
  selectOption(event) {
    // console.log('selected: ', event.target.value)
    if (event.target.value === 'buy') {
      this.buySelected = true
      this.form.controls["bitcoinAddress"].setValidators([Validators.required])
      this.form.controls["bitcoinAddress"].updateValueAndValidity()
      this.form.controls["qrCode"].clearValidators()
      this.form.controls["qrCode"].updateValueAndValidity()
    } else if (event.target.value === 'sell') {
      this.buySelected = false
      this.form.controls["qrCode"].setValidators([Validators.required])
      this.form.controls["qrCode"].updateValueAndValidity()
      this.form.controls["bitcoinAddress"].clearValidators()
      this.form.controls["bitcoinAddress"].updateValueAndValidity()
    }
  }



  processForm() {
    const input = this.form.value
    console.log('form input: ', input)
    
  }
  clearForm() {
    this.form.reset()

  }
}
