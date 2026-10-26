import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-slider-api',
    templateUrl: './slider-api.component.html',
    styleUrls: ['./slider-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SliderApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
