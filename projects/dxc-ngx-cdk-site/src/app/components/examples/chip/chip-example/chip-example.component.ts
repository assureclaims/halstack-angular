import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "chip-example",
    templateUrl: "./chip-example.component.html",
    styleUrls: ["./chip-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChipExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
