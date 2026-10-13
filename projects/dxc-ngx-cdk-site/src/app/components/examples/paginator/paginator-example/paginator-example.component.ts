import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-paginator-example',
    templateUrl: './paginator-example.component.html',
    styleUrls: ['./paginator-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PaginatorExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
