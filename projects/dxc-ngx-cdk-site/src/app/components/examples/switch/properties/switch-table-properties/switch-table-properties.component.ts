import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';
@Component({
    selector: 'switch-properties',
    templateUrl: './switch-table-properties.component.html',
    styleUrls: ['./switch-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
