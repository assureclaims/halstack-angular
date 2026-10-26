import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
    selector: 'card-table-properties',
    templateUrl: './card-table-properties.component.html',
    styleUrls: ['./card-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CardTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
