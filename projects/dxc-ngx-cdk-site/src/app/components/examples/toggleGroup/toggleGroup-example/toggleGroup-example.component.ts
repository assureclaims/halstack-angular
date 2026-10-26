import { Component, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "toggleGroup-example",
    templateUrl: "./toggleGroup-example.component.html",
    styleUrls: ["./toggleGroup-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ToggleGroupExampleComponent {

  constructor() {
  }

}
