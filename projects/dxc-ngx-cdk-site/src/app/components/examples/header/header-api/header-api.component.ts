import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-api',
    templateUrl: './header-api.component.html',
    styleUrls: ['./header-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderApiComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToRoute() {
    this.router.navigate(
      ["components/dropdown"]
    );
  }

  ngOnInit(): void {
  }

}
