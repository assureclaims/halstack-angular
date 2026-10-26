import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
@Component({
    selector: 'box-table-properties',
    templateUrl: './box-table-properties.component.html',
    styleUrls: ['./box-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BoxTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
