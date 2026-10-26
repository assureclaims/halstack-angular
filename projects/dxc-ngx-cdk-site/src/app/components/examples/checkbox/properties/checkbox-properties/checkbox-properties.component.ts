import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'checkbox-properties',
    templateUrl: './checkbox-properties.component.html',
    styleUrls: ['./checkbox-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CheckboxPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
