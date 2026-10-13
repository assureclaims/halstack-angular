import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'select-import',
    templateUrl: './select-import.component.html',
    styleUrls: ['./select-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SelectImportComponent implements OnInit {

  bindCode = `
  import { DxcSelectModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcSelectModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
