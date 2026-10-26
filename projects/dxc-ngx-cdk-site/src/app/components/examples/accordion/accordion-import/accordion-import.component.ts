import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'accordion-import',
    templateUrl: './accordion-import.component.html',
    styleUrls: ['./accordion-import.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccordionImportComponent implements OnInit {

  bindCode = `
    import { DxcAccordionModule } from '@dxc-technology/halstack-angular';

    @NgModule({
      imports: [
        DxcAccordionModule,
      ]
    })
    export class AppComponent { }
  `;

  constructor() { }

  ngOnInit() {
  }

}
