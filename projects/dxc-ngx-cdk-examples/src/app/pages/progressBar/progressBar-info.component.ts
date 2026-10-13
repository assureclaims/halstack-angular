import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "progressBar-info",
    templateUrl: "./progressBar-info.component.html",
    styleUrls: ["./progressBar-info.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProgressInfoComponent {
  constructor() {}

  isVisible = false;

  showProgressbar() {
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}
