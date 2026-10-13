import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'date-properties',
    templateUrl: './date-properties.component.html',
    styleUrls: ['./date-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DatePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
