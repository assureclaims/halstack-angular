import {
  Component,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
    selector: "dxc-application-layout-header",
    templateUrl: "./dxc-application-layout-header.component.html",
    providers: [CssUtils],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcApplicationLayoutHeaderComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
