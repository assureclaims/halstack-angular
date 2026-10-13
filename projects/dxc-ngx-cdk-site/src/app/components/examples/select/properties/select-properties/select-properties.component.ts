import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'select-properties',
    templateUrl: './select-properties.component.html',
    styleUrls: ['./select-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SelectPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
