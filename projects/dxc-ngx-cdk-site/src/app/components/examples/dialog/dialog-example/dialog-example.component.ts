import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-dialog-example",
    templateUrl: "./dialog-example.component.html",
    styleUrls: ["./dialog-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DialogExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
