import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
// declare const scrollFunction: any;
// declare const myFunction: any;
@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.scss']
})
export class RootNavComponent implements OnInit {
  isNavbarCollapsed = true;
  bgClass = 'bg-transparent'
  height;
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    // myFunction()
  }
  toggleNavbar() {
    // this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  @Input() name: string;
  @HostListener('scroll', ['$event'])
  // onScroll(e) {
  //   console.log('Hello', e);
  // }

  divScroll(e) {
    const height = e.target.scrollTop
    console.log('div Hello', height);
    if (height > 50) {
      document.getElementById("navbar").classList.add("scrolledNav")
    }
    else {
      document.getElementById("navbar").classList.remove("scrolledNav")
    }
  }
  scrollToElement($element) {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  // @HostListener("window:scroll", [''])
  // onWindowScroll() {
  //   const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   console.log('offset');
  // }
  // scrolled() {
  //   const height = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (height > 10) {
  //     // this.animate = true;
  //     console.log('window');
  //   }
  // }


}