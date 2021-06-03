import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare const google: any;
import * as AOS from 'aos';
import { Lightbox } from 'ngx-lightbox';
import { AccommodationRegisterationComponent } from '../accommodation-registeration/accommodation-registeration.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  conferenceDate = new Date('2021-12-01');
  endDate = new Date('2021-12-03')
  album = [
    {
      src: 'assets/imgs/1.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/1.jpg',
    },

    {
      src: 'assets/imgs/5.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/5.jpg',
    },
    {
      src: 'assets/imgs/6.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/6.jpg',
    },
    {
      src: 'assets/imgs/7.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/7.jpg',
    },
    {
      src: 'assets/imgs/8.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/8.jpg',
    },
    {
      src: 'assets/imgs/4.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/4.jpg',
    },
    {
      src: 'assets/imgs/2.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/2.jpg',
    },
    {
      src: 'assets/imgs/3.jpg',
      caption: 'HURGHADA',
      thumb: 'assets/imgs/3.jpg',
    },

  ];
  constructor(
    public dialog: MatDialog,
    private lightbox: Lightbox
  ) {

  }

  ngOnInit(): void {
    AOS.init();
  }
  lat: number = 27.197238238852517;
  lng: number = 33.844337168626446;

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }

}
