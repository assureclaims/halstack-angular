import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-tag-info',
    templateUrl: './tag-info.component.html',
    styleUrls: ['./tag-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TagInfoComponent implements OnInit {


  img = './assets/images/dxclogo.png';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
      }

}
