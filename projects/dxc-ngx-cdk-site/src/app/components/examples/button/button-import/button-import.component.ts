import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'button-import',
    templateUrl: './button-import.component.html',
    styleUrls: ['./button-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ButtonImportComponent implements OnInit {

  bindCode = `
  import { DxcButtonModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcButtonModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
