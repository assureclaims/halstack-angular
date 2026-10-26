import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-radio-example',
    templateUrl: './radio-example.component.html',
    styleUrls: ['./radio-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RadioExampleComponent {

  constructor() {
  }
}
