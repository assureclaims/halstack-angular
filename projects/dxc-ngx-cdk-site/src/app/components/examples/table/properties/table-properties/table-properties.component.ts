import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
    selector: 'table-properties',
    templateUrl: './table-properties.component.html',
    styleUrls: ['./table-properties.component.scss'],
    standalone: false
})
export class TablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit() {
  }

}
