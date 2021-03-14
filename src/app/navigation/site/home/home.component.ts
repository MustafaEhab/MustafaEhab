import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
// declare const setInterval: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    // setInterval()
  }
  conferenceDate = new Date('2021-12-07');

}
