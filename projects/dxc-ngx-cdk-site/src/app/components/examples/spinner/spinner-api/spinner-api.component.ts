import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'spinner-api',
    templateUrl: './spinner-api.component.html',
    styleUrls: ['./spinner-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpinnerApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
