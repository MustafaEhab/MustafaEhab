import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { AccommodationRegisterationComponent } from '../accommodation-registeration/accommodation-registeration.component';
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    AOS.init();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AccommodationRegisterationComponent, {
      panelClass: 'my-dialog-class',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  tickets_interational = [
    {
      guest: "Single Room",
      amount: "105",
      currency: "$",
    },
    {
      guest: "Double Room",
      amount: "130",
      currency: "$",
    },
  ];
  tickets_egyptians = [
    {
      guest: "غرفة مفردة مطله على البحر",
      amount: "1600",
      currency: "جنيه",
    },
    {
      guest: "غرفة مزدوجه مطله على البحر",
      amount: "1900",
      currency: "جنيه",
    },
  ]
}
