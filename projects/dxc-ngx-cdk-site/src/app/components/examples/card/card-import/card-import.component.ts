import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'card-import',
    templateUrl: './card-import.component.html',
    styleUrls: ['./card-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CardImportComponent implements OnInit {

  bindCode = `
  import { DxcCardModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DxcCardModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() { }

  ngOnInit() {
  }

}
