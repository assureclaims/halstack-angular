import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'footer-table-properties',
    templateUrl: './footer-table-properties.component.html',
    styleUrls: ['./footer-table-properties.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterTablePropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
