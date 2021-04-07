import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare const google: any;
import * as AOS from 'aos';
import { AccommodationRegisterationComponent } from '../accommodation-registeration/accommodation-registeration.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  conferenceDate = new Date('2021-12-01');
  endDate = new Date('2021-12-03')
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    AOS.init();
  }
  lat: number = 27.197238238852517;
  lng: number = 33.844337168626446;

  // openDialog() {
  //   const dialogRef = this.dialog.open(AccommodationRegisterationComponent, {
  //     panelClass: 'my-dialog-class',
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
