import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dropdown-api',
    templateUrl: './dropdown-api.component.html',
    styleUrls: ['./dropdown-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DropdownApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
