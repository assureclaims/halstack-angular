import {
  Directive,
  OnInit,
  OnDestroy,
  Inject,
  Optional,
} from "@angular/core";
import { ThemeService } from "./theme.service";
import { Subject } from "rxjs";
import { BindingContext } from "./bindingContext";
import { ComplexThemeBindingStrategy } from "./complexThemeBindingStrategy";
import { componentIcons } from "./componentTokens";
import { AdvancedThemeBindingStrategy } from "./advancedThemeBindingStrategy";


interface Theme {
  theme:any,
  advanced: boolean
}

@Directive({
  selector: "[theme]",
})
export class ThemeDirective implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  theme: Theme;

  constructor(
    @Optional() @Inject("ThemeService") private _themeService: ThemeService
  ) {}

  ngOnInit() {
    this.getTheme();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateTheme(theme: Theme) {
    this.theme = theme;
    this.setPropertiesCss(this.theme);
    this.setVariableLinks(this.theme);
  }

  setPropertiesCss(theme: Theme) {
    const ctx = new BindingContext(!theme.advanced ? new ComplexThemeBindingStrategy():  new AdvancedThemeBindingStrategy() );
    let processedTokens = ctx.bindProperties(theme.theme);
    for (const key in processedTokens) {
      document.body.style.setProperty(key, processedTokens[key]);
    }
  }

  setVariableLinks(theme: any): void {

    const footerLogo = theme.theme?.footer?.logo ?? componentIcons.footer.logo;
    const headerLogo = theme.theme?.header?.logo ?? componentIcons.header.logo;
    const headerLogoResponsive =
      theme?.theme?.header?.logoResponsive ?? componentIcons.header.logoResponsive;
    console.debug(`Logo del header ${headerLogo}`);
    document.body.setAttribute("footer-logo", footerLogo);
    document.body.setAttribute("header-logo", headerLogo);
    document.body.setAttribute("header-logoResponsive", headerLogoResponsive);
  }

  private getTheme(): void {
    if (this._themeService !== null && this._themeService !== undefined) {
      const active = this._themeService.getTheme();
      this.updateTheme(active);

      this._themeService.themeChange.subscribe((theme: any) => {
        this.updateTheme({theme: theme, advanced: false});
      });

      this._themeService.themeAdvanceChange.subscribe((theme: any) => {
        this.updateTheme({theme: theme, advanced: true});
      });
    }
  }
}
