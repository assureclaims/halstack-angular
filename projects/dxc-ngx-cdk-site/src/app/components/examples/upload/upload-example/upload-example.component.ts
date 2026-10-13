import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-upload-example',
    templateUrl: './upload-example.component.html',
    styleUrls: ['./upload-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UploadExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
