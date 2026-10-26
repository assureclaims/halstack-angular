import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
    selector: 'table-properties',
    templateUrl: './table-properties.component.html',
    styleUrls: ['./table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
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
