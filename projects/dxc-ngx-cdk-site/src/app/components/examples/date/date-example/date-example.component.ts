import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-date-example',
    templateUrl: './date-example.component.html',
    styleUrls: ['./date-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DateExampleComponent {

  constructor() {
  }
  ngOnInit() {
  }


}
