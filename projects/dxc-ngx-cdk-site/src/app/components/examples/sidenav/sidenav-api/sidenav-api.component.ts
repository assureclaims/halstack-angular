import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sidenav-api',
    templateUrl: './sidenav-api.component.html',
    styleUrls: ['./sidenav-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SidenavApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
