import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-box-example",
    templateUrl: "./box-example.component.html",
    styleUrls: ["./box-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BoxExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
