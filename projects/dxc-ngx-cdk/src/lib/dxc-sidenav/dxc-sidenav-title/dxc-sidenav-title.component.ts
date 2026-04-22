import {
  Component,
  ElementRef,
  OnInit,
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
    selector: "dxc-sidenav-title",
    templateUrl: "./dxc-sidenav-title.component.html",
    providers: [CssUtils],
    standalone: false
})
export class DxcSidenavTitleComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
