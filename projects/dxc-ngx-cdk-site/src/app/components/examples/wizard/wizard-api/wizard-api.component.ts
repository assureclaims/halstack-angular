import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wizard-api',
    templateUrl: './wizard-api.component.html',
    styleUrls: ['./wizard-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WizardApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
