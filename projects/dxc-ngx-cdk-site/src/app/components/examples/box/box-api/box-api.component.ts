import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'box-api',
    templateUrl: './box-api.component.html',
    styleUrls: ['./box-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BoxApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
