import { Component } from "@angular/core";

@Component({
    selector: "toggle-group-info",
    templateUrl: "./toggle-group-info.component.html",
    styleUrls: ["./toggle-group-info.component.scss"],
    standalone: false
})
export class ToggleGroupInfoComponent {

  values = ["1", "2"];

  selectedNew($event) {
    console.log($event);
  }

  constructor() {}

}
