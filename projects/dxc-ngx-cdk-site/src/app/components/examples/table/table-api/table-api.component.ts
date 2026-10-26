import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'table-api',
    templateUrl: './table-api.component.html',
    styleUrls: ['./table-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TableApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
