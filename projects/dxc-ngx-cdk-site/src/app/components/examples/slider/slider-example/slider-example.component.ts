import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'app-slider-example',
    templateUrl: './slider-example.component.html',
    styleUrls: ['./slider-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SliderExampleComponent {

  constructor() {
  }
}
