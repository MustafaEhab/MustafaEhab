import { Component, HostListener } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '4th IAAH MENA REGION CONFERENCE ADOLESCENTt HEALTH';
  width = 'width:100%;';
  displaySpinner = true;
  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // this.displaySpinner = true;
      }
      if (event instanceof NavigationEnd) {
        this.displaySpinner = false;
        this.hideSpinner()
      }
    });
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    // this.hideSpinner();
  }

  hideSpinner() {
    this.width = "spinnerHideOverlay";
    this.displaySpinner = false;
  }
}
