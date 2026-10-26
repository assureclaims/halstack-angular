import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'radio-api',
    templateUrl: './radio-api.component.html',
    styleUrls: ['./radio-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RadioApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
