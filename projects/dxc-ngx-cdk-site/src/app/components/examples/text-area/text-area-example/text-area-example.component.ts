import { Component, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "text-area-example",
    templateUrl: "./text-area-example.component.html",
    styleUrls: ["./text-area-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextAreaExampleComponent {

  constructor() {
  }

}
