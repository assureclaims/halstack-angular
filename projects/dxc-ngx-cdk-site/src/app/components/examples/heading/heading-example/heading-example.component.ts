import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'heading-example',
    templateUrl: './heading-example.component.html',
    styleUrls: ['./heading-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeadingExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
