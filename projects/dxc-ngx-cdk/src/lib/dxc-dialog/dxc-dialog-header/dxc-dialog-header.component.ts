import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dxc-dialog-header',
    templateUrl: './dxc-dialog-header.component.html',
    styleUrls: ['./dxc-dialog-header.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcDialogHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
