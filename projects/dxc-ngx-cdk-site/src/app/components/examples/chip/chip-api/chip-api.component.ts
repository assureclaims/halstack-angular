import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'chip-api',
    templateUrl: './chip-api.component.html',
    styleUrls: ['./chip-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChipApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
