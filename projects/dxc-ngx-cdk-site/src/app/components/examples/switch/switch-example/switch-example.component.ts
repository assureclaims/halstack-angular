import { Component, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "app-switch-example",
    templateUrl: "./switch-example.component.html",
    styleUrls: ["./switch-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchExampleComponent {

  constructor() {
  }
}
