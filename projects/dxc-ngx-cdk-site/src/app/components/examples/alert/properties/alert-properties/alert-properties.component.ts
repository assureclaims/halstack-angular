import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'alert-properties',
    templateUrl: './alert-properties.component.html',
    styleUrls: ['./alert-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlertComponentPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
