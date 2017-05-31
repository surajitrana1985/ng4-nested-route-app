import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups:any = [];
  
  constructor(private http:Http) { 
    http.get('assets/groups.json').subscribe(response => {
      this.groups = response.json();
    });
  }

  ngOnInit() {
  }

}
