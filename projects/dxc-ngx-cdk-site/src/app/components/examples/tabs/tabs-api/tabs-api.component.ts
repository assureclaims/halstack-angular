import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tabs-api',
    templateUrl: './tabs-api.component.html',
    styleUrls: ['./tabs-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TabsApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
