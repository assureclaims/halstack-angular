import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sidenav-info',
    templateUrl: './sidenav-info.component.html',
    styleUrls: ['./sidenav-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SidenavInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
