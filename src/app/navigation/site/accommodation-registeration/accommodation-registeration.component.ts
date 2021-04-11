import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  ];
  selectedValue: string;
  formValues;
  form;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AccommodationRegisterationComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = this.fb.group({
      name: ['', [Validators.required,]],
      nationality: ['', [Validators.required,]],
      rooms: ['', [Validators.required,]],
      roomType: ['', [Validators.required,]],
      nights: ['', [Validators.required,]],
      Accompanying: [],
      age: [],
      arrivalDate: ['', [Validators.required,]],
      departure: ['', [Validators.required,]],
      special: [],
    })
  }

  tegister() {
    if (this.form.invalid) {
      // console.log(this.form);
      return;
    }
    this.formValues = JSON.stringify(this.form.value)
    console.log('values', this.formValues);
    this.dialogRef.close();
    Swal.fire(
      {
        imageUrl: '../../../../assets/imgs/hands.png',
        imageAlt: 'Custom image',
        title: 'Your reservation has been made',
      }
    )
  }
}
