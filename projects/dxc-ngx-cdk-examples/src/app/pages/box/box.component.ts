import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'box-info',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
