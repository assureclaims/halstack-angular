import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wizard-example',
    templateUrl: './wizard-example.component.html',
    styleUrls: ['./wizard-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WizardExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
