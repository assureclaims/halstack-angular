import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'switch-info',
    templateUrl: './switch-info.component.html',
    styleUrls: ['./switch-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchInfoComponent {

  constructor() {}
  checked = false;

  onChange($event) {  
    this.checked= $event;
    console.log($event);
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }
}
