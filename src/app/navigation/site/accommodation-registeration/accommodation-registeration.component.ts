import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
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
    public dialog: MatDialog,
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
    Accompanying: new FormControl(),
    age: new FormControl(),
    arrivalDate: new FormControl(),
    departure: new FormControl(),
  })
  tegister(f) {

    if (this.form.valid) {
      // this.check = false;
      this.dialog.closeAll()
      this.formValues = JSON.stringify(f.value)
      console.log(this.formValues);
      Swal.fire(
        {
          imageUrl: '../../../../assets/imgs/hands.png',
          imageAlt: 'Custom image',
          title: 'Your reservation has been made',
          showConfirmButton: false,
          timer: 2000
        }
      )
    }
  }
}
