import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "app-card-example",
    templateUrl: "./card-example.component.html",
    styleUrls: ["./card-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CardExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
