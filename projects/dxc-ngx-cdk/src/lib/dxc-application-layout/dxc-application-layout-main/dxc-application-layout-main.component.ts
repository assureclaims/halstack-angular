import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { CssUtils } from "../../utils";

@Component({
    selector: "dxc-application-layout-main",
    templateUrl: "./dxc-application-layout-main.component.html",
    providers: [CssUtils],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcApplicationLayoutMainComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
