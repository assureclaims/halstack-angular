import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'link-table-properties',
    templateUrl: './link-table-properties.component.html',
    styleUrls: ['./link-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LinkTablePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
