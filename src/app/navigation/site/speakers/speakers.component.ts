import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  ambassadors = [

    {
      name: "Dr. Montasser Kamal",
      title: "Program leader, global health, IDRC, Canada",
      confirmation: "( To be confirmed )"
    },
    {
      name: "Dr. Umaiyeh Khammash",
      title: "Director, Juzoor for Health & Development, Palestine"
    },
    {
      name: "Dr. Magdy Khaled",
      title: "SRH Regional Consultant, Former Director of UNFPA, Egypt",
    },
  ];
  safety = [
    {
      name: "Prof. Amani Abou El Soud",
      title: "Professor of Public Health, Zagazig University, Egypt",
    },
    {
      name: "Prof. Nagwa Sobhi Eid",
      title: "Professor of Family Medicine, Cairo University, Egypt",
    },
    {
      name: "Prof. Safaa Hashem",
      title: "Dean, Faculty of Nursing, British University, Cairo, Egypt",
    }
  ];
  scientific = [
    {
      name: "Prof. Fadia Al-Buhairan",
      country: "(Saudi Arabia)"
    },
    {
      name: "Prof. Shereen Abdel-Ghaffar",
      country: "(Egypt)"
    }
  ];
  scientificmembers = [
    {
      name: "Dr. Beatrice Khater",
      country: "(Lebanon)"
    },
    {
      name: "Prof. Heba Fathi ",
      country: "(Egypt)"
    },
    {
      name: "Prof. Kholoud Tayel ",
      country: "(Egypt)"
    },
    {
      name: "Prof. Madeeha Kamal",
      country: "(Qatar)"
    },
    {
      name: "Dr. Nahla Abdel Tawab",
      country: "(Egypt)"
    },
    {
      name: "Prof. Nuray Kanbur",
      country: "(Turkey)"
    },
    {
      name: "Prof. Omaima Al Gebaly ",
      country: "(Egypt)"
    },
    {
      name: "Prof. Orhan Derman",
      country: "(Turkey)"
    },
    {
      name: "Dr. Younis Al Achhab",
      country: "(Morocco)"
    }
  ]
  organizing = [
    {
      name: "Dr. Ahmed Saied",
    },
    {
      name: "Ms. Farah Feteha",
    },
    {
      name: "Ms. Hannaa Hamed"
    },
    {
      name: "Dr. Hoda Radwan",
    },
    {
      name: "Ms. Rawan El Minshawy",
    },
    {
      name: "Dr. Yasmine sakr"
    }
  ]
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
