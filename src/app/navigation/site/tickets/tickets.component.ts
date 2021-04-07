
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
  // prices_international;
  // prices_egy;
  conferenceDate = new Date('2021-12-01');
  endDate = new Date('2021-12-03');
  viewedItem;
  today;
  cantRegiser;
  constructor(
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    AOS.init();
  }

  openDialog() {
    // console.log(id);
    // this.viewedItem = this.prices_international.find(x => x.id === id);
    const dialogRef = this.dialog.open(RegisterationComponent, {
      panelClass: 'my-dialog-class',

    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  // openDialogEgy() {
  //   console.log();
  //   // this.viewedItem = this.prices_egy.find(x => x.id === id);
  //   const dialogRef = this.dialog.open(RegisterationComponent, {
  //     panelClass: 'my-dialog-class',
  //     // data: this.viewedItem,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  tickets_interational = [
    {
      guest: "International or Regional Participant",
      amount: "175",
      currency: "$",
      amount_after: "200",
      amount_site: "225"
    },
    {
      guest: "IAAH and ACAM Members",
      amount: "150",
      currency: "$",
      amount_after: "175",
      amount_site: "200"
    },
    {
      guest: "Accompanying person",
      amount: "50",
      currency: "$",
      amount_after: "50",
      amount_site: "50"
    },
    {
      guest: "Participants from Egypt",
      amount: "500",
      currency: "EGP",
      amount_after: "600",
      amount_site: "750"
    },
    {
      guest: "Medical Students",
      amount: "200",
      currency: "EGP",
      amount_after: "200",
      amount_site: "200"
    },
    {
      guest: "Accompanying person",
      amount: "200",
      currency: "EGP",
      amount_after: "200",
      amount_site: "200"
    },
  ];
  // tickets_egy_after = [
  //   {
  // 
  //     guest: "Participants from Egypt",
  //     amount: "600",
  //     currency: "EGP"
  //   },
  //   {
  // 
  //     guest: "Medical Students",
  //     amount: "200",
  //     currency: "EGP"
  //   },
  //   {
  // 
  //     guest: "Accompanying person",
  //     amount: "200",
  //     currency: "EGP"
  //   },
  // ];
  packge = [
    {
      title: "Admission to the scientific sessions and the exhibition area"
    },
    {
      title: "Invitation to the opening ceremony"
    },
    {
      title: "Abstract book on a USB flash drive"
    },
    {
      title: "Final program"
    },
    {
      title: "Certificate of attendance"
    },
    {
      title: "Accompanying persons are welcome to the opening ceremony and the social event."
    },
  ]
}
