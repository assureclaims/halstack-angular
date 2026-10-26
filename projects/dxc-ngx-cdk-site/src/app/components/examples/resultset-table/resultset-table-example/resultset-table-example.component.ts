import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'examples-component-resultset-table',
    templateUrl: './resultset-table-example.component.html',
    styleUrls: ['./resultset-table-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ResultsetTableExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
