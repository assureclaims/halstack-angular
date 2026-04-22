import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
    selector: 'tabs-properties',
    templateUrl: './tabs-table-properties.component.html',
    styleUrls: ['./tabs-table-properties.component.scss'],
    standalone: false
})
export class TabsTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
