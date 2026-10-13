import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'checkbox-api',
    templateUrl: './checkbox-api.component.html',
    styleUrls: ['./checkbox-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CheckboxApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
