import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcFileInputComponent } from './dxc-file-input.component';
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcFileComponent } from './dxc-file/dxc-file.component';
import { DxcFileErrorComponent } from './dxc-file-error/dxc-file-error.component';
import { FileFormatDirective } from './directives/file-format.directive';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule  } from '@angular/common/http';
@NgModule({
  declarations: [DxcFileInputComponent, DxcFileComponent, DxcFileErrorComponent, FileFormatDirective],
  imports: [
  CommonModule, 
  DxcButtonModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule],
  exports: [DxcFileInputComponent],
})
export class DxcFileInputModule { }
