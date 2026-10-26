import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'button-api',
    templateUrl: './button-api.component.html',
    styleUrls: ['./button-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ButtonApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
