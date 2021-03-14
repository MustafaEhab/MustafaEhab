import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }
  firstDay = new Date("2021-12-07");
  secondDay = new Date("2021-12-07");
  thirdDay = new Date("2021-12-07");
  ngOnInit(): void {
    AOS.init();
  }

}
