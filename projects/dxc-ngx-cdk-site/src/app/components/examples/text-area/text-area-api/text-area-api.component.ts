import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'text-area-api',
    templateUrl: './text-area-api.component.html',
    styleUrls: ['./text-area-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextAreaApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
