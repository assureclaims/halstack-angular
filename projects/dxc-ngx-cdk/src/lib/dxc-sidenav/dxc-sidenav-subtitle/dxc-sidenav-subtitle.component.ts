import {
  Component,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
    selector: "dxc-sidenav-subtitle",
    templateUrl: "./dxc-sidenav-subtitle.component.html",
    providers: [CssUtils],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcSidenavSubtitleComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
