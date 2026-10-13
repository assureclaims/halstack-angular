import {
  Component,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
    selector: "dxc-sidenav-title",
    templateUrl: "./dxc-sidenav-title.component.html",
    providers: [CssUtils],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcSidenavTitleComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
