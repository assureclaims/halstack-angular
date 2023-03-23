import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { DxcSpinnerComponent } from "./dxc-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DxcSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
  exports: [DxcSpinnerComponent],
})
export class DxcSpinnerModule {}
