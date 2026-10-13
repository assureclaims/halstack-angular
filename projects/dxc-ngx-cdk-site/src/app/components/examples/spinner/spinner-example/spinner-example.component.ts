import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "spinner-example",
    templateUrl: "./spinner-example.component.html",
    styleUrls: ["./spinner-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpinnerExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
