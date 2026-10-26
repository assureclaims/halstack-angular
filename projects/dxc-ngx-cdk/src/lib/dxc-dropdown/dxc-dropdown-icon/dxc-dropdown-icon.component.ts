import { Component, EventEmitter, HostBinding, OnChanges, ChangeDetectionStrategy } from "@angular/core";
import { css } from "@emotion/css";

@Component({
    selector: "dxc-dropdown-icon",
    templateUrl: "./dxc-dropdown-icon.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcDropdownIconComponent {
  @HostBinding("class") iconClass;

  constructor() {}

  ngOnInit() {
    this.iconClass = `${this.getDynamicStyle()}`;
  }

  getDynamicStyle() {
    return css`
      display: flex;
    `;
  }
}
