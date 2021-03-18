import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-accommodation-registeration',
  templateUrl: './accommodation-registeration.component.html',
  styleUrls: ['./accommodation-registeration.component.scss']
})
export class AccommodationRegisterationComponent implements OnInit {

  room_type = [
    { value: 'single', viewValue: 'Single' },
    { value: 'double', viewValue: 'Double' },
    { value: 'triple', viewValue: 'Triple' }
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
    name: new FormControl('', [Validators.required,]
    ),
    nationality: new FormControl('', [Validators.required,]
    ),
    rooms: new FormControl('', [Validators.required,]
    ),
    roomType: new FormControl('', [Validators.required,]
    ),
    nights: new FormControl('', [Validators.required,]
    ),
  })
  tegister(f) {
    this.formValues = JSON.stringify(f.value)
    console.log(this.formValues)
  }
}
