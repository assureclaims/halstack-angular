import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "tabs-info",
    templateUrl: "./tabs-info.component.html",
    styleUrls: ["./tabs-info.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TabsInfoComponent {

  tabId = 2;

  constructor() {}

  tabClicked(tabId) {
    this.tabId = tabId;
    console.log("Tab clicked " + tabId);
  }

  uncontrolledTabClicked(tabId) {
    console.log("Uncontrolled Tab clicked " + tabId);
  }

  hover(){
    console.log("Hover in tab");
  }
}
