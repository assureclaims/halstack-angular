import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'select-api',
    templateUrl: './select-api.component.html',
    styleUrls: ['./select-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SelectApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
