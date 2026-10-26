import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "app-progressbar-example",
    templateUrl: "./progressbar-example.component.html",
    styleUrls: ["./progressbar-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProgressbarExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
