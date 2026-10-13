import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'switch-api',
    templateUrl: './switch-api.component.html',
    styleUrls: ['./switch-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
