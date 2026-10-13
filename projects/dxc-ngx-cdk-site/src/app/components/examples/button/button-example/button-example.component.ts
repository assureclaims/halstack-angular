import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-button-example',
    templateUrl: './button-example.component.html',
    styleUrls: ['./button-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ButtonExampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
