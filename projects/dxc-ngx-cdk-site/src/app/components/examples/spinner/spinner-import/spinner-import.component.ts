import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'spinner-import',
    templateUrl: './spinner-import.component.html',
    styleUrls: ['./spinner-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpinnerImportComponent implements OnInit {

  bindCode = `
  import { DxcSpinnerModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcSpinnerModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
