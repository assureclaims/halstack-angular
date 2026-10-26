import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
@Component({
    selector: 'spinner-table-properties',
    templateUrl: './spinner-table-properties.component.html',
    styleUrls: ['./spinner-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpinnerTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
