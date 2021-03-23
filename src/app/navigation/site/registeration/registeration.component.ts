import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  gender = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'another', viewValue: 'Another' }
  ];
  selectedValue: string;
  formValues;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  form = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    firstNameControl: new FormControl('', [Validators.required,]
    ),
    lastNameControl: new FormControl('', [Validators.required,]
    ),
    birthControl: new FormControl('', [Validators.required,]
    ),
    nationality: new FormControl('', [Validators.required,]
    ),
    gender: new FormControl('', [Validators.required,]
    ),
    profession: new FormControl('', [Validators.required,]
    ),
    residence: new FormControl('', [Validators.required,]
    ),
    telephone: new FormControl('', [Validators.required,]
    ),
    jobTitle: new FormControl(),
    fax: new FormControl(),
    PresentAffiliation: new FormControl(),
    Accompanying: new FormControl(),
    paperPresenting: new FormControl(),
    arrivalDate: new FormControl(),
    departure: new FormControl(),
    paymentAmount: new FormControl(),
  })
  tegister(f) {
    this.formValues = JSON.stringify(f.value)
    console.log(this.formValues)
  }
}
