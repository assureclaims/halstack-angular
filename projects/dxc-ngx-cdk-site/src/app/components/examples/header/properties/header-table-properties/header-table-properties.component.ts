import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'header-table-properties',
    templateUrl: './header-table-properties.component.html',
    styleUrls: ['./header-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderTablePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
