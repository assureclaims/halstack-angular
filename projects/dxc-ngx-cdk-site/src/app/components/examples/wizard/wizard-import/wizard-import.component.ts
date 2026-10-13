import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'wizard-import',
    templateUrl: './wizard-import.component.html',
    styleUrls: ['./wizard-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WizardImportComponent implements OnInit {

  bindCode = `
  import { DxcWizardModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcWizardModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
