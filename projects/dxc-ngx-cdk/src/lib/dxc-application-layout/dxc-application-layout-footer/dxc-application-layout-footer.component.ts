import {
  Component,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
    selector: "dxc-application-layout-footer",
    templateUrl: "./dxc-application-layout-footer.component.html",
    providers: [CssUtils],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcApplicationLayoutFooterComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
