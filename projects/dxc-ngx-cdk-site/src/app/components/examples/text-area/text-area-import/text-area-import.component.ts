import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "text-area-import",
    templateUrl: "./text-area-import.component.html",
    styleUrls: ["./text-area-import.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextAreaImportComponent implements OnInit {
  bindCode = `
  import { DXCTextareaModule } from '@dxc-technology/halstack-angular';

  @NgModule({
    imports: [
      DXCTextareaModule,
    ]
  })
  export class AppComponent { }
`;

  constructor() {}

  ngOnInit() {}
}
