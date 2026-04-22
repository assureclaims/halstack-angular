import { Component } from '@angular/core';

@Component({
    selector: 'spinner-info',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    standalone: false
})
export class SpinnerInfoComponent {

  constructor() {}
  checked = false;

  onChange(){}

}
