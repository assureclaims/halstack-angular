import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Example } from 'src/app/model/example';
import { ExampleService } from 'src/app/service/example.service';

@Component({
    selector: 'app-accordion-example',
    templateUrl: './accordion-example.component.html',
    styleUrls: ['./accordion-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccordionExampleComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
  
}
