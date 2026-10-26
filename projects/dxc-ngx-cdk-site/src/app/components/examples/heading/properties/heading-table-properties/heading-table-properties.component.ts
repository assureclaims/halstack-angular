import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'heading-table-properties',
    templateUrl: './heading-table-properties.component.html',
    styleUrls: ['./heading-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeadingTablePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
