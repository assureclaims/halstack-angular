import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";

@Component({
  selector: "dxc-checkbox",
  templateUrl: "./dxc-checkbox.component.html",
  providers: [CssUtils],
})
export class DxcCheckboxComponent implements OnInit {
  @Input() value: string;
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = coerceBooleanProperty(value);
  }
  private _checked;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
  private _required;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Input() margin: any;
  @Input() size: any;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onChange: EventEmitter<any>;

  @HostBinding("class") className;

  renderedChecked: boolean;

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    checked: false,
    disabled: false,
    required: false,
    label: null,
    name: null,
    id: null,
    labelPosition: "before",
    margin: null,
    size: "fitContent",
  });

  sizes = {
    small: "120px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset",
  };

  public ngOnChanges(changes: SimpleChanges): void {
    this.renderedChecked = this.checked;

    this.labelPosition === "after" ? "after" : "before";
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils) {
    this.onChange = new EventEmitter();
  }

  ngOnInit() {
    this.renderedChecked = this.checked;

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.disabled) {
      this.required = false;
    }
  }

  onValueChange($event: any) {
    this.onChange.emit($event.checked);

    if (this.checked === undefined || this.checked === null) {
      this.renderedChecked = $event.checked;
    } else {
      $event.source.checked = this.renderedChecked;
      $event.source._checked = this.renderedChecked;
      $event.source._inputElement.nativeElement.checked = this.renderedChecked;
    }
  }

  calculateWidth(size) {
    if (size === "fillParent") {
      return css`
        width: ${this.sizes[size]};
      `;
    }
    return css`
      width: ${this.sizes[size]};
    `;
  }

  setTextAlign(labelPosition) {
    if (labelPosition === "before") {
      return css`
        text-align: end;
      `;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.calculateWidth(inputs.size)}
      display: inline-flex;
      vertical-align: top;
      .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
      .mat-checkbox-checked.mat-accent .mat-checkbox-background {
        background: var(--checkbox-backgroundColorChecked) !important;
      }

      .mat-checkbox:not(.mat-checkbox-disabled).mat-accent
        .mat-checkbox-ripple
        .mat-ripple-element {
        background-color: transparent;
      }
      mat-checkbox {
        display: inline-flex;
        width: 100%;
        &.cdk-focused:not(.mat-checkbox-disabled) {
          label.mat-checkbox-layout {
            .mat-checkbox-inner-container {
              .mat-checkbox-background {
                outline: -webkit-focus-ring-color auto 1px;
                outline-color: var(--checkbox-focusColor);
                outline-offset: 3px;
              }
            }
          }
        }
        label.mat-checkbox-layout {
          display: inline-flex;
          align-items: center;
          width: 100%;
          white-space: normal;
          span.mat-checkbox-label {
            word-break: normal;
            color: var(--checkbox-fontColor);
            font-family: var(--fontFamily);
            display: flex;
            justify-content: flex-end;
          }

          .mat-checkbox-inner-container {
            margin: ${inputs.labelPosition === "after"
              ? "10px 15px 10px 0px;"
              : "10px 0px 10px 15px;"};
            width: 20px;
            height: 20px;

            .mat-checkbox-background,
            .mat-checkbox-frame {
              border-radius: 4px;
              border-color: var(--checkbox-borderColor);
            }

            .mat-checkbox-background {
              svg path {
                stroke: var(--checkbox-checkColor) !important;
                stroke-width: 3px;
              }
            }
          }
        }
        &.mat-checkbox-disabled {
          cursor: not-allowed;
          .mat-checkbox-inner-container {
            .mat-checkbox-frame {
              border-color: var(--checkbox-disabledBorderColor) !important;
            }
          }
          label.mat-checkbox-layout span.mat-checkbox-label {
            color: var(--checkbox-disabledFontColor) !important;
          }
        }
        &.mat-checkbox-disabled.mat-checkbox-checked {
          .mat-checkbox-inner-container {
            .mat-checkbox-frame {
              border-color: var(--checkbox-disabledBorderColor) !important;
            }
            .mat-checkbox-background {
              background: var(
                --checkbox-disabledBackgroundColorChecked
              ) !important;
              svg path {
                stroke: var(--checkbox-disabledCheckColor) !important;
              }
            }
          }
        }
      }
    `;
  }
}
