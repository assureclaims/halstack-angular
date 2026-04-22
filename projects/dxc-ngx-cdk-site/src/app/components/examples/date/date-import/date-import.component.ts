import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'date-import',
    templateUrl: './date-import.component.html',
    styleUrls: ['./date-import.component.scss'],
    standalone: false
})
export class DateImportComponent implements OnInit {

  bindCode = `
  import { DxcDateModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcDateModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
