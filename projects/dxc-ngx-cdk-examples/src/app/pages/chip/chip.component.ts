import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'chip-info',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChipComponent implements OnInit {

  iconPath = './assets/images/home.svg';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Click");
  }

}
