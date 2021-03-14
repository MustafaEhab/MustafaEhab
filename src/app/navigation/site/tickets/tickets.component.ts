import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { RegisterationComponent } from '../registeration/registeration.component';
declare const change: boolean;
declare const disabled: boolean;
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  prices_international;
  prices_egy;
  conferenceDate = new Date('2021-12-07');
  endDate = new Date('2021-12-09');
  viewedItem;
  today;
  cantRegiser;
  constructor(
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    AOS.init();
    if (change == false) {
      this.prices_international = this.tickets_interational_before;
      this.prices_egy = this.tickets_egy_before;
      this.cantRegiser = false;
    }
    else {
      this.prices_international = this.tickets_interational_after;
      this.prices_egy = this.tickets_egy_after;
      this.cantRegiser = false;
    }
    this.cantRegiser = disabled;
  }

  openDialog(id) {
    // console.log(id);
    this.viewedItem = this.prices_international.find(x => x.id === id);
    const dialogRef = this.dialog.open(RegisterationComponent, {
      panelClass: 'my-dialog-class',
      data: this.viewedItem,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEgy(id) {
    console.log(id);
    this.viewedItem = this.prices_egy.find(x => x.id === id);
    const dialogRef = this.dialog.open(RegisterationComponent, {
      panelClass: 'my-dialog-class',
      data: this.viewedItem,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  tickets_interational_before = [
    {
      id: "1",
      guest: "International or Regional Participant",
      amount: "175",
      currency: "$",
    },
    {
      id: "2",
      guest: "IAAH and ACAM Members",
      amount: "150",
      currency: "$"
    },
    {
      id: "3",
      guest: "Accompanying person",
      amount: "50",
      currency: "$"
    },
  ];
  tickets_interational_after = [
    {
      id: "1",
      guest: "International or Regional Participant",
      amount: "200",
      currency: "$",
    },
    {
      id: "2",
      guest: "IAAH and ACAM Members",
      amount: "175",
      currency: "$"
    },
    {
      id: "3",
      guest: "Accompanying person",
      amount: "50",
      currency: "$"
    },
  ];

  tickets_egy_before = [
    {
      id: "1",
      guest: "Participants from Egypt",
      amount: "500",
      currency: "EGP"
    },
    {
      id: "2",
      guest: "Medical Students",
      amount: "200",
      currency: "EGP"
    },
    {
      id: "3",
      guest: "Accompanying person",
      amount: "200",
      currency: "EGP"
    },
  ];
  tickets_egy_after = [
    {
      id: "1",
      guest: "Participants from Egypt",
      amount: "600",
      currency: "EGP"
    },
    {
      id: "2",
      guest: "Medical Students",
      amount: "200",
      currency: "EGP"
    },
    {
      id: "3",
      guest: "Accompanying person",
      amount: "200",
      currency: "EGP"
    },
  ];
}
