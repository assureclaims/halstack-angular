import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-design-guidelines-page',
    templateUrl: './design-guidelines-page.component.html',
    styleUrls: ['./design-guidelines-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DesignGuidelinesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
