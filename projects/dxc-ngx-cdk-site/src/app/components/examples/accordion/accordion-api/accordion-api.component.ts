import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'accordion-api',
    templateUrl: './accordion-api.component.html',
    styleUrls: ['./accordion-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccordionApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
