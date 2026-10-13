import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'checkbox-import',
    templateUrl: './checkbox-import.component.html',
    styleUrls: ['./checkbox-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CheckboxImportComponent implements OnInit {

  bindCode = `
  import { DxcCheckboxModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcCheckboxModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
