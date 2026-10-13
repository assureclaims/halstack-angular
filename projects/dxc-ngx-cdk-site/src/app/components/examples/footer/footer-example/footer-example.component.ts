import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer-example',
    templateUrl: './footer-example.component.html',
    styleUrls: ['./footer-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  
}
