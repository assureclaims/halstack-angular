import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dialog-info',
    templateUrl: './dialog-info.component.html',
    styleUrls: ['./dialog-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DialogInfoComponent {

  visible1 = false;
  visible2 = false;
  visible3 = false;

  padding={top:"xxlarge", right: "xxlarge", bottom: "xxlarge", left: "xxlarge"}

  constructor()  {}

  openDialog1() {
    this.visible1 = !this.visible1;
  }
  openDialog2() {
    this.visible2 = !this.visible2;
  }
  openDialog3() {
    this.visible3 = !this.visible3;
  }
}
