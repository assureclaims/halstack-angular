import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'heading-api',
    templateUrl: './heading-api.component.html',
    styleUrls: ['./heading-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeadingApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
