import { Component, OnInit } from '@angular/core';
declare const google: any;
import * as AOS from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  conferenceDate = new Date('2021-12-07 09:00');
  endDate = new Date('2021-12-09 17:00')
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  lat: number = 27.197238238852517;
  lng: number = 33.844337168626446;
}
