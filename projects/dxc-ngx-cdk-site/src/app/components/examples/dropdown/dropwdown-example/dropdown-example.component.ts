import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-dropdown-example",
    templateUrl: "./dropdown-example.component.html",
    styleUrls: ["./dropdown-example.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DropdownExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
