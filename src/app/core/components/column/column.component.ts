import { Component, OnInit, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'core-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() header;
  @Input() value;
  
  constructor(table:DataTableComponent) { 
    table.addColumn(this);
  }

  ngOnInit() {
  }

}
