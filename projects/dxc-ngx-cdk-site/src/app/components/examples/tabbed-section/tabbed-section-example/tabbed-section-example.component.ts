import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tabbed-section-example',
    templateUrl: './tabbed-section-example.component.html',
    styleUrls: ['./tabbed-section-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TabbedSectionExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
