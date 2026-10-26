import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'header-import',
    templateUrl: './header-import.component.html',
    styleUrls: ['./header-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderImportComponent implements OnInit {

  bindCode = `
  import { DxcHeaderModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcHeaderModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
