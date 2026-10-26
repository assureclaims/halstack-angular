import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'resultset-table-api',
    templateUrl: './resultset-table-api.component.html',
    styleUrls: ['./resultset-table-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ResultsetTableApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
