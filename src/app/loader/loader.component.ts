import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  display = true;
  constructor(
    public appcomp: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
