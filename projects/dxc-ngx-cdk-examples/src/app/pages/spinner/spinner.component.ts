import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'spinner-info',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpinnerInfoComponent {

  constructor() {}
  checked = false;

  onChange(){}

}
