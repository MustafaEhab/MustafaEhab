import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.component.html',
  styleUrls: ['./call-us.component.scss']
})
export class CallUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  abstract = [
    {
      title: "The abstract should be submitted in a PDF or Word document"
    },
    {
      title: "The paper should be directly related to the themes of the conference"
    },
    {
      title: "Papers may present results of research, program findings or reviews"
    },
    {
      title: "It should be titled with the name of the presenter"
    },
    {
      title: "Please, submit your abstract in our official web-mail: abstracts@MENA4.org"
    },
    {
      title: "Abstracts should be short (maximum 400 words), clear, concise and written in English with correct spelling and good sentence structure"
    },
    {
      title: "It should be typed in “Arial” font size “12”."
    },
    {
      title: "Figures and tables must not be included."
    },
  ]
  abstract_right = [
    {
      title: "We recommend that the abstract is carefully compiled and thoroughly checked, in particular with regard to the list of authors"
    },
    {
      title: "Abstracts should be received by July 31st, 2021"
    },
    {
      title: "Authors of the accepted abstracts will be notified by August 15th, 2021"
    },
    {
      title: "The author or one of the co-authors of the accepted papers must register to the conference by August 31st, in order to be able to include the paper in the abstract book and final program"
    },
    {
      title: "Fifteen minutes will be allowed for each oral presentation; including 3 minutes for discussions"
    },

  ]
}
