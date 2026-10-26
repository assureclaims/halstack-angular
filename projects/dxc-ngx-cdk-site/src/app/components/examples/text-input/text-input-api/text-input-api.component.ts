import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'text-input-api',
    templateUrl: './text-input-api.component.html',
    styleUrls: ['./text-input-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextInputApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
