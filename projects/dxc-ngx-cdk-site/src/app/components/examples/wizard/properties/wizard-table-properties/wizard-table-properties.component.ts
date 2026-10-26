import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wizard-table-properties',
    templateUrl: './wizard-table-properties.component.html',
    styleUrls: ['./wizard-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WizardTablePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
