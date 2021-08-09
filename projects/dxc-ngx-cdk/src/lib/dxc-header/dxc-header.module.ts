import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { DxcHeaderComponent } from "./dxc-header.component";
import { ClosableDirective } from "./directives/closable.directive";
import { DxcDropdownModule } from '../dxc-dropdown/dxc-dropdown.module';
import { DxcHeaderDropdownComponent } from './dxc-header-dropdown/dxc-header-dropdown.component';
import { PipesModule } from '../pipes/pipes.module';
import { BackgroundProviderModule } from "../background-provider/background-provider.module";

@NgModule({
  declarations: [DxcHeaderComponent, DxcHeaderDropdownComponent, ClosableDirective],
  imports: [CommonModule, MatToolbarModule, DxcDropdownModule, PipesModule, BackgroundProviderModule],
  exports: [DxcHeaderComponent, DxcHeaderDropdownComponent, ClosableDirective],
})
export class DxcHeaderModule {}
