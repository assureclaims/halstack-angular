import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'accordion-group-import',
    templateUrl: './accordion-group-import.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccordionGroupImportComponent {

  bindCode = `
    import { DxcAccordionGroupModule } from '@dxc-technology/halstack-angular';

    @NgModule({
      imports: [
        DxcAccordionGroupModule,
      ]
    })
    export class AppComponent { }
  `;

  constructor() { }
}
