import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcFileInputComponent } from './dxc-file-input.component';
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcFileComponent } from './dxc-file/dxc-file.component';
import { DxcFileErrorComponent } from './dxc-file-error/dxc-file-error.component';
import { FileFormatDirective } from './directives/file-format.directive';
@NgModule({
  declarations: [DxcFileInputComponent, DxcFileComponent, DxcFileErrorComponent, FileFormatDirective],
  imports: [CommonModule, DxcButtonModule],
  exports: [DxcFileInputComponent],
})
export class DxcFileInputModule { }
