import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sidenav-table-properties',
    templateUrl: './sidenav-table-properties.component.html',
    styleUrls: ['./sidenav-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SidenavTablePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
