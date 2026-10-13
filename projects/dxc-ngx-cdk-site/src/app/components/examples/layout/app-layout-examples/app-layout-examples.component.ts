import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "app-layout-examples",
    templateUrl: "./app-layout-examples.component.html",
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ApplicationLayoutExamplesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
