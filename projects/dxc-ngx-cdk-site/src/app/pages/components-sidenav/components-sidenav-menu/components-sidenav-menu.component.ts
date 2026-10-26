import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'components-sidenav-menu',
    templateUrl: './components-sidenav-menu.component.html',
    styleUrls: ['./components-sidenav-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ComponentsSidenavMenuComponent implements OnInit {

  constructor(public router: Router) { }

  navigateTo(route) {
    this.router.navigate([route]);
  }

  ngOnInit() {
  }

}
