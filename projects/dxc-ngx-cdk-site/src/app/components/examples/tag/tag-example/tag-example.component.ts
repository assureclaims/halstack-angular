import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tag-example',
    templateUrl: './tag-example.component.html',
    styleUrls: ['./tag-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TagExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
