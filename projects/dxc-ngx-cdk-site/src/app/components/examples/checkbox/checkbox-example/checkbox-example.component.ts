import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-checkbox-example',
    templateUrl: './checkbox-example.component.html',
    styleUrls: ['./checkbox-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CheckboxExampleComponent {

  constructor() {
  }


}