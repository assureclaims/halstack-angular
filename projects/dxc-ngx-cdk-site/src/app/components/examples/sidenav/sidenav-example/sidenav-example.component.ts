import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sidenav-example',
    templateUrl: './sidenav-example.component.html',
    styleUrls: ['./sidenav-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SidenavExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
