
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootNavComponent } from './navigation/root-nav/root-nav.component';
import { HomeComponent } from './navigation/site/home/home.component';
import { ThemesComponent } from './navigation/site/themes/themes.component';
import { SpeakersComponent } from './navigation/site/speakers/speakers.component';
import { ScheduleComponent } from './navigation/site/schedule/schedule.component';
import { TicketsComponent } from './navigation/site/tickets/tickets.component';
import { RegisterationComponent } from './navigation/site/registeration/registeration.component';
import { SponsorsComponent } from './navigation/site/sponsors/sponsors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ContactComponent } from './navigation/site/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './navigation/footer/footer.component';
import { WelcomeComponent } from './navigation/site/welcome/welcome.component';
import { CallUsComponent } from './navigation/site/call-us/call-us.component';
import { AccommodationRegisterationComponent } from './navigation/site/accommodation-registeration/accommodation-registeration.component';
import { AccomodationComponent } from './navigation/site/accomodation/accomodation.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { LightboxModule } from 'ngx-lightbox';


library.add(fas, far, fab);
@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    HomeComponent,
    ThemesComponent,
    SpeakersComponent,
    ScheduleComponent,
    TicketsComponent,
    RegisterationComponent,
    SponsorsComponent,
    ContactComponent,
    FooterComponent,
    WelcomeComponent,
    CallUsComponent,
    AccommodationRegisterationComponent,
    AccomodationComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    FontAwesomeModule,
    SlickCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHnj2ejtMhrAZ6UsOPw3TQtulK1RUd1Yo'
    }),
    MatProgressSpinnerModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
