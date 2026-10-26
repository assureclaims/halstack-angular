import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'date-api',
    templateUrl: './date-api.component.html',
    styleUrls: ['./date-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DateApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
