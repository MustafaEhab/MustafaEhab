import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  slides = [
    { img: "../../../../assets/imgs/sponsors/image0.jpeg" },
    { img: "../../../../assets/imgs/sponsors/image1.jpeg" },
    { img: "../../../../assets/imgs/sponsors/image2.jpeg" },
    { img: "../../../../assets/imgs/sponsors/sponsor3.jpg" }
  ];
  slideConfig = { "speed": 300, "slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, };

  slickInit(e) {
    console.log('slick initialized');
  }

  // breakpoint(e) {
  //   console.log('breakpoint');
  // }

  // afterChange(e) {
  //   console.log('afterChange');
  // }

  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

}
