import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  Component,
  Input,
  HostBinding,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { DxcLinkIconComponent } from "./dxc-link-icon/dxc-link-icon.component";

@Component({
  selector: "dxc-link",
  templateUrl: "./dxc-link.component.html",
  providers: [CssUtils],
})
export class DxcLinkComponent {
  @Input()
  get underlined(): boolean {
    return this._underlined;
  }
  set underlined(value: boolean) {
    this._underlined = coerceBooleanProperty(value);
  }
  private _underlined = true;
  @Input()
  get inheritColor(): boolean {
    return this._inheritColor;
  }
  set inheritColor(value: boolean) {
    this._inheritColor = coerceBooleanProperty(value);
  }
  private _inheritColor;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() text: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() href: string;
  @Input()
  get newWindow(): boolean {
    return this._newWindow;
  }
  set newWindow(value: boolean) {
    this._newWindow = coerceBooleanProperty(value);
  }
  private _newWindow;
  @Input() margin: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;

  isClickDefined = false;

  @ContentChildren(DxcLinkIconComponent)
  dxcLinkIcon: QueryList<DxcLinkIconComponent>;

  styledLink: string = css`
    display: inline;
  `;

  styledButton: string;

  defaultInputs = new BehaviorSubject<any>({
    underlined: false,
    inheritColor: false,
    disabled: false,
    text: null,
    iconSrc: null,
    iconPosition: "before",
    href: null,
    newWindow: false,
    margin: null,
    tabIndexValue: 0,
  });

  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.isClickDefined = this.onClick.observers.length > 0;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.styledButton = `${this.getDynamicStyledButton(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterViewChecked() {
    if (this.dxcLinkIcon.length !== 0) {
      this.iconSrc = "";
    }
    this.cdRef.detectChanges();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.styledButton = `${this.getDynamicStyledButton(
      this.defaultInputs.getValue()
    )}`;
  }

  public onClickHandler($event: any): void {
    if (!this.disabled) {
      this.onClick.emit($event);
    }
  }

  getDynamicStyle(inputs) {
    return css`
      a {
        ${this.utils.getMargins(inputs.margin)}
        display: inline-flex;
        align-items: center;
        max-width: 100%;
        font-size: var(--link-fontSize);
        padding-bottom: 2px;
        text-decoration: none;
        font-family: var(--link-fontFamily);
        font-style: var(--link-fontStyle);
        font-weight: var(--link-fontWeight);
        ${inputs.iconPosition === "before"
          ? ""
          : "flex-direction: row-reverse;"}

        ${this.getUnderlineStyles(inputs)}

        color: ${!inputs.inheritColor
          ? "var(--link-fontColor)"
          : `inherit`} !important;

        ${this.getStateStyles(inputs)}

        img,svg {
          width: var(--link-iconSize);
          height: var(--link-iconSize);
          ${inputs.iconPosition === "before"
            ? "margin-right: var(--link-iconGutter);"
            : "margin-left: var(--link-iconGutter);"}
        }
      }
    `;
  }

  getDynamicStyledButton(inputs) {
    return css`
      background: none;
      border: none;
      padding: 0;
      cursor: ${inputs.disabled ? "default" : "pointer"};
      outline: 0;
      font-family: var(--link-fontFamily);
      font-size: var(--link-fontSize);
      text-decoration: none;
      font-style: var(--link-fontStyle);
      font-weight: var(--link-fontWeight);
    `;
  }

  private getUnderlineStyles(inputs) {
    if (inputs.underlined) {
      if (!inputs.disabled) {
        return css`
          padding-bottom: var(--link-underlineSpacing) !important;
          border-bottom: var(--link-underlineThickness)
            var(--link-underlineStyle) var(--link-underlinedBackgroundColor);
        `;
      }
    } else {
      return css``;
    }
  }

  private getStateStyles(inputs) {
    if (inputs.disabled) {
      return css`
        pointer-events: none;
        color: var(--link-disabledColor) !important;
      `;
    } else {
      return css`
        &:hover {
          color: var(--link-hoverFontColor) !important;
          padding-bottom: var(--link-underlineSpacing) !important;
          border-bottom: var(--link-underlineThickness)
            var(--link-underlineStyle) var(--link-hoverUnderlineColor);
          cursor: pointer;
        }

        &:focus {
          outline: -webkit-focus-ring-color auto 2px;
          outline-color: var(--link-focusColor);
          color: var(--link-focusColor) !important;
          padding-bottom: var(--link-underlineSpacing) !important;
          border-bottom: var(--link-underlineThickness)
            var(--link-underlineStyle) var(--link-focusColor);
        }

        &:active {
          color: var(--link-activeFontColor) !important;
          padding-bottom: var(--link-underlineSpacing) !important;
          border-bottom: var(--link-underlineThickness)
            var(--link-underlineStyle) var(--link-activeUnderlineColor);
        }

        &:visited {
          color: var(--link-visitedFontColor) !important;
          padding-bottom: var(--link-underlineSpacing) !important;
          border-bottom: var(--link-underlineThickness)
            var(--link-underlineStyle) var(--link-visitedUnderlineColor);
        }
      `;
    }
  }
}
