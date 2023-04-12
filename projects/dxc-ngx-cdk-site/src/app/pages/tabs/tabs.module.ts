import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTableModule, DxcTabsModule,DxcTagModule, DxcChipModule,DxcHeadingModule } from "@dxc-technology/halstack-angular";
import { TabbedSectionModule } from "src/app/components/tabbed-section/tabbed-section.module";
import { ExampleViewerModule } from "src/app/components/example-viewer/example-viewer.module";
import { ExampleViewerComponent } from "../../components/example-viewer/example-viewer.component";
import { TabsComponent } from "./tabs.component";
import { TabsTablePropertiesComponent } from "src/app/components/examples/tabs/properties/tabs-table-properties.component";
import { TabsExampleComponent } from "../../components/examples/tabs/tabs-example/tabs-example.component";
import { TabsImportComponent } from '../../components/examples/tabs/tabs-import/tabs-import.component';
import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';
import { TabsApiComponent } from '../../components/examples/tabs/tabs-api/tabs-api.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CodesandboxViewerModule } from '../../components/codesandbox-viewer/codesandbox-viewer.module';

@NgModule({
    declarations: [
        TabsComponent,
        TabsTablePropertiesComponent,
        TabsExampleComponent,
        TabsImportComponent,
        TabsApiComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        DxcTableModule,
        TabbedSectionModule,
        DxcTabsModule,
        ExampleViewerModule,
        DxcTagModule,
        CodePlaygroundModule,
        ComponentsSidenavModule,
        ColorPreviewModule,
        DxcChipModule,
        DxcHeadingModule,
        CodesandboxViewerModule
    ],
    exports: [
        TabsComponent,
        TabsTablePropertiesComponent,
        TabsExampleComponent,
        TabsImportComponent,
        TabsApiComponent
    ]
})
export class TabsModule {}
