import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'upload-api',
    templateUrl: './upload-api.component.html',
    styleUrls: ['./upload-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UploadApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
