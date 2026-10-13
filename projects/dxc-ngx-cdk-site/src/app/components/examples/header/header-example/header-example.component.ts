import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'app-header-example',
    templateUrl: './header-example.component.html',
    styleUrls: ['./header-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}
