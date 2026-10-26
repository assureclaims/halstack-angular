import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'upload-import',
    templateUrl: './upload-import.component.html',
    styleUrls: ['./upload-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UploadImportComponent implements OnInit {

  bindCode = `
  import { DxcUploadModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcUploadModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
