import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'header-example-responsive',
    templateUrl: './header-example-responsive.component.html',
    styleUrls: ['./header-example-responsive.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderExampleResponsiveComponent implements OnInit {

  bindCode = `
  <dxc-header>
    <div id="unresponsive">
        <a>Overview</a>
        <a>Components</a>
    </div>
    <div id="responsive">
      <ul style="list-style: none;">
        <li><a>Overview</a></li>
        <li><a>Components</a></li>
      </ul>
    </div>
  </dxc-header>
  `;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
