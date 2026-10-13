import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-dialog-api',
    templateUrl: './dialog-api.component.html',
    styleUrls: ['./dialog-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DialogApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
