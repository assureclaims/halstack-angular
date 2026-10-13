import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tag-api',
    templateUrl: './tag-api.component.html',
    styleUrls: ['./tag-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TagApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
