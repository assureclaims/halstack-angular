import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-select-import',
  templateUrl: './select-import.component.html'
})
export class NewSelectImportComponent implements OnInit {

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

  ngOnInit(): void {
  }

}