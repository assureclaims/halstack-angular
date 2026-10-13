import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'toggleGroup-api',
    templateUrl: './toggleGroup-api.component.html',
    styleUrls: ['./toggleGroup-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ToggleGroupApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
