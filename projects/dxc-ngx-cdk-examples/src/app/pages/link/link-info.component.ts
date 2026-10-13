import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'link-info',
    templateUrl: './link-info.component.html',
    styleUrls: ['./link-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LinkInfoComponent implements OnInit {

  inheritColor: boolean = true;
  newWindow: boolean = true;
  underlined: boolean = true;
  disabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
