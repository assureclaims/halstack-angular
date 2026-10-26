import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'footer-api',
    templateUrl: './footer-api.component.html',
    styleUrls: ['./footer-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
