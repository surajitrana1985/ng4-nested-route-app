import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';

import { GroupsComponent } from '../groups/groups.component';
import { UsersComponent } from '../users/users.component';
import { DealsComponent } from '../deals/deals.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() myStatus:boolean;

  constructor() { }

  ngOnInit() {
  }

}

export const routes:Routes = [
  { path: '', redirectTo: 'deals', pathMatch: 'full' },
  { path: 'deals', component: DealsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'users', component: UsersComponent }
];