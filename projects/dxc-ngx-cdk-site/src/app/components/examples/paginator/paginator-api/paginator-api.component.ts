import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-paginator-api',
    templateUrl: './paginator-api.component.html',
    styleUrls: ['./paginator-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PaginatorApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
