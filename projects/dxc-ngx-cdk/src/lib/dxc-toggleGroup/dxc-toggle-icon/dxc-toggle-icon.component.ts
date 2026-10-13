import {
  Component,
  HostBinding,
  OnChanges,
  ChangeDetectionStrategy
} from "@angular/core";
  
  @Component({
    selector: "dxc-toggle-icon",
    templateUrl: "./dxc-toggle-icon.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
  export class DxcToggleIconComponent implements OnChanges {
  
    @HostBinding("class") classes = "icon";

    constructor() {}
  
    public ngOnChanges(): void {
      
    }
  
  }
  