import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dropdown-import',
    templateUrl: './dropdown-import.component.html',
    styleUrls: ['./dropdown-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DropdownImportComponent implements OnInit {

  bindCode = `
  import { DxcDropdownModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcDropdownModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
