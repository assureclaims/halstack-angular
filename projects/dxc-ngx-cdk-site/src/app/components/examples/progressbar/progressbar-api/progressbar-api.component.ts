import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'progressbar-api',
    templateUrl: './progressbar-api.component.html',
    styleUrls: ['./progressbar-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProgressbarApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
