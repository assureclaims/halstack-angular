import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-alert-example",
    templateUrl: "./alert-example.component.html",
    styleUrls: ["./alert-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlertExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  
}
