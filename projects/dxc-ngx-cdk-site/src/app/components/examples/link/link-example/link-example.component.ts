import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'link-example',
    templateUrl: './link-example.component.html',
    styleUrls: ['./link-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LinkExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
