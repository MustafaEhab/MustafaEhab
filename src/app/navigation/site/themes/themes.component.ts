import { Component, OnInit } from '@angular/core';
import 'aos/dist/aos.css';
import * as AOS from 'aos';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  themesObject = [
    {
      title: "Health determinants and challenges facing Adolescents"
    },
    {
      title: "Characteristics of Adolescents in the MENA region"
    },
    {
      title: "Sociocultural environmental impact on Adolescents’ lifestyle"
    },
    {
      title: "Cognitive and mental disorders"
    },
    {
      title: "Nutrition, eating and malnutrition"
    },
    {
      title: "Sexual and reproductive health challenges"
    },
    {
      title: "Substance and drug abuse"
    },
    {
      title: "Health information and education"
    },
    {
      title: "Health promoting schools"
    },
    {
      title: "Adolescent-friendly healthcare"
    },
    {
      title: "Policies, strategies and programs addressing adolescents’ health needs"
    }
  ]
}
