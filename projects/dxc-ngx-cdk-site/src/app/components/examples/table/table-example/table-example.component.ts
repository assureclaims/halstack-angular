import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-table-example',
    templateUrl: './table-example.component.html',
    styleUrls: ['./table-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TableExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
