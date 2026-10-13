import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'accordion-group-api',
    templateUrl: './accordion-group-api.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccordionGroupApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
