import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'table-info',
    templateUrl: './table-info.component.html',
    styleUrls: ['./table-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TableInfoComponent {

  constructor()  {}

}
