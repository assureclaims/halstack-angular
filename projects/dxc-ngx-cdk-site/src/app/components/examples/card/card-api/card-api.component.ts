import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'card-api',
    templateUrl: './card-api.component.html',
    styleUrls: ['./card-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CardApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
