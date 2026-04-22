import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'accordion-import',
    templateUrl: './accordion-import.component.html',
    styleUrls: ['./accordion-import.component.scss'],
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
