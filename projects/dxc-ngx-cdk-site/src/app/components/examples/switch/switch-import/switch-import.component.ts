import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'switch-import',
    templateUrl: './switch-import.component.html',
    styleUrls: ['./switch-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchImportComponent implements OnInit {

  bindCode = `
  import { DxcSwitchModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcSwitchModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
