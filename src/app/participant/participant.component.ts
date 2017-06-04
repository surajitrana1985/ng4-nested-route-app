import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { DealComponent } from './deal/deal.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { ExitComponent } from './exit/exit.component';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  stepInfo:any;
  selectedItem:string;

  constructor() {
    this.stepInfo = [
      { "stepId": 1, "name": "Welcome Letter", "route": "welcome", "isActive": true },
      { "stepId": 2, "name": "Disclosure Document", "route": "disclosure", "isActive": false },
      { "stepId": 3, "name": "Deal Verification", "route": "deal", "isActive": false },
      { "stepId": 4, "name": "Final Foreclosure", "route": "foreclosure", "isActive": false },
      { "stepId": 5, "name": "Exit", "route": "exit", "isActive": false }
    ];
  }

  getStepWidth() {
    return (100/this.stepInfo.length) + "%";
  }

  listClick($event, step) {
    console.log(step);
    for(let i = 0; i < this.stepInfo.length; i++) {
      if (i < step.stepId) {
        this.stepInfo[i].isActive = true;
      } else {
        this.stepInfo[i].isActive = false;
      }
    }
  }

  ngOnInit() {
  }

}

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'disclosure', component: DisclosureComponent },
  { path: 'deal', component: DealComponent },
  { path: 'foreclosure', component: ForeclosureComponent },
  { path: 'exit', component: ExitComponent }
];