import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ThemeBuilderService } from "../../../components/theme-builder/service/theme-builder.service";
import { AccordionPreviewComponent } from "../previews/accordion-preview/accordion-preview.component";
import getBuilderPreviewComponentByName from "./model/preview-components-map";

import advancedTheme from "./../themes/AdvancedTheme.json";
import simpleTheme from "./../themes/DefaultTheme.json";
import advancedSchema from "./../themes/schemas/Advanced.schema.json";
import simpleSchema from "./../themes/schemas/Advanced.schema.json";
import { ThemeService } from "@dxc-technology/halstack-angular";

interface SelectedThemeType {
  componentName: string;
  themeType: string;
}

@Component({
  selector: "theme-builder-sidenav",
  templateUrl: "./theme-builder-sidenav.component.html",
  styleUrls: ["./theme-builder-sidenav.component.scss"],
})
export class ThemeBuilderSidenavComponent implements OnInit {
  currentTheme: any;

  defaultTheme: any;

  complexTheme: any;

  currentSchemaTheme: any;

  componentMenuItems: Array<string>;

  selectedThemeComponent: SelectedThemeType;

  type: string;

  changeThemeComponentPropertySubscription: any;

  constructor(
    public router: Router,
    private themeBuilderService: ThemeBuilderService,
    @Inject("ThemeService") private themeService: ThemeService
  ) {
    console.log('Entra en el constructor')
    this.defaultTheme = simpleTheme;
    this.complexTheme = advancedTheme;
    this.currentTheme = this.defaultTheme;
    this.currentSchemaTheme = simpleSchema;
    this.selectedThemeComponent = { componentName : "accordion", themeType: 'default' };
    this.componentMenuItems = this.extractMenuComponentItems(this.currentTheme);
  }

  renderTo(componentName: string) {
    const currentComponent = getBuilderPreviewComponentByName(componentName);
    this.selectedThemeComponent.componentName = componentName;

    this.themeBuilderService.selectThemeBuilderComponent(
      currentComponent.name,
      currentComponent.component
    );

    this.themeBuilderService.onChangeThemeComponent(
      this.currentTheme[componentName],
      this.currentSchemaTheme[componentName]
    );
  }

  onThemeTypeChange = ($event) => {
    if ($event === "default") {
      this.currentTheme = this.defaultTheme;
      this.currentSchemaTheme = simpleSchema;
      this.themeService.registerTheme(this.defaultTheme);
      this.selectedThemeComponent.themeType = "default";
    } else {
      this.currentTheme = this.complexTheme;
      this.currentSchemaTheme = advancedSchema;
      this.selectedThemeComponent.themeType = "advanced";
      this.themeService.registerAdvancedTheme(this.complexTheme);
    }
    this.componentMenuItems = this.extractMenuComponentItems(this.currentTheme);
    this.themeBuilderService.onChangeThemeComponent(
      this.currentTheme[this.selectedThemeComponent.componentName],
      this.currentSchemaTheme[this.selectedThemeComponent.componentName]
    );
  };

  ngOnInit() {
    this.themeBuilderService.selectThemeBuilderComponent(
      "accordion",
      AccordionPreviewComponent
    );
    this.themeBuilderService.onChangeThemeComponent(
      this.currentTheme["accordion"],
      this.currentSchemaTheme["accordion"]
    );

    this.changeThemeComponentPropertySubscription =
      this.themeBuilderService.changeCustomThemeProperty$.subscribe((resp) => {

        if (resp){

          const key = this.selectedThemeComponent.componentName;
          const attributeKey = resp.propertyName;
          if (this.selectedThemeComponent.themeType === "default") {

            this.defaultTheme = {
              ...this.defaultTheme,
              [key]: { ... this.defaultTheme[key], [attributeKey]: resp.propertyValue },
            };

            this.themeService.registerTheme(this.defaultTheme);
          } else {

            this.complexTheme = {
              ...this.complexTheme,
              [key]: { ...this.complexTheme[key],  [attributeKey]: resp.propertyValue },
            };

            this.themeService.registerAdvancedTheme(this.complexTheme);
          }
        }

      });
  }

  private extractMenuComponentItems(items: any): Array<string> {
    return Object.keys(items);
  }

  ngOnDestroy(): void {
    this.changeThemeComponentPropertySubscription.destroy();
  }
}
