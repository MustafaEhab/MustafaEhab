import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
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
  check = false;
  form: FormGroup;
  categoryList = [
    {
      guest: "International or Regional Participant",
    },
    {
      guest: "IAAH and ACAM Members",
    },
    {
      guest: "Participants from Egypt",
    },
    {
      guest: "Medical Students",
    }
  ]
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<RegisterationComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    var elem = document.getElementById('f')
    elem.scrollIntoView({ behavior: "smooth", block: "start" });

    this.form = this.fb.group({
      emailFormControl: ['', [
        Validators.required,
        Validators.email,
      ]],
      firstNameControl: ['', [Validators.required,]],
      lastNameControl: ['', [Validators.required,]],
      birthControl: ['', [Validators.required,]],
      nationality: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      profession: ['', [Validators.required,]],
      telephone: ['', [Validators.required,]],
      title: [],
      fax: [],
      PresentAffiliation: [],
      Accompanying: [],
      paperPresenting: [],
      category: ['', [Validators.required,]]
    })
  }
  tegister() {
    // console.log(this.loanForm.mobile.errors);
    // stop here if form is invalid
    if (this.form.invalid) {
      // console.log(this.form);
      return;
    }
    this.formValues = JSON.stringify(this.form.value, null, 4);
    console.log('values', this.formValues)
    this.dialogRef.close();
    Swal.fire(
      {
        imageUrl: '../../../../assets/imgs/hands.png',
        imageAlt: 'Custom image',
        title: 'Your registration has been done successfully',
        // showConfirmButton: false,
        // timer: 2000
      }
    )
    // if (this.form.valid) {
    //   // this.check = false;
    //   // this.dialog.closeAll()
    //   this.formValues = JSON.stringify(f.value)
    //   console.log(this.formValues);

    // }
  }

}
