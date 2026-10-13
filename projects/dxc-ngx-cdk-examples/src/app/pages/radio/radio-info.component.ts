import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'radio-info',
    templateUrl: './radio-info.component.html',
    styleUrls: ['./radio-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RadioInfoComponent {

  checked = false;
  constructor() {}

  onChange(value){
    this.checked = value;
    console.debug(value);
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

}
