import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'alert-api',
    templateUrl: './alert-api.component.html',
    styleUrls: ['./alert-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlertApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
