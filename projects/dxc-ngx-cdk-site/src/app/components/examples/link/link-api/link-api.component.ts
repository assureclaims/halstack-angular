import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-link-api',
    templateUrl: './link-api.component.html',
    styleUrls: ['./link-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LinkApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
