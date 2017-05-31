import { Component, OnInit, Input } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'core-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  columns: ColumnComponent[] = [];
  @Input() dataset;
  
  constructor() { }

  ngOnInit() {
  }

  addColumn(column:ColumnComponent) {
    this.columns.push(column);
  }

}
