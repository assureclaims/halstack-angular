import { Component, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "app-select-example",
    templateUrl: "./select-example.component.html",
    styleUrls: ["./select-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SelectExampleComponent {

  constructor() {
  }

}
