import { Component } from "@angular/core";

@Component({
    selector: "progressBar-info",
    templateUrl: "./progressBar-info.component.html",
    styleUrls: ["./progressBar-info.component.scss"],
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
