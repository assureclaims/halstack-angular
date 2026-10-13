import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-tabs-example",
    templateUrl: "./tabs-example.component.html",
    styleUrls: ["./tabs-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TabsExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
