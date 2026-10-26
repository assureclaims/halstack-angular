import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'heading-info',
    templateUrl: './heading-info.component.html',
    styleUrls: ['./heading-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeadingInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
