import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  OnInit,
  SimpleChanges,
  Optional,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

@Component({
  selector: "dxc-slider",
  templateUrl: "./dxc-slider.component.html",
  providers: [CssUtils],
})
export class DxcSliderComponent implements OnInit, OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  //Default values
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() step: number = 1;
  @Input()
  get showLimitsValues(): boolean {
    return this._showLimitsValues;
  }
  set showLimitsValues(value: boolean) {
    this._showLimitsValues = coerceBooleanProperty(value);
  }
  private _showLimitsValues = false;

  @Input()
  get showInput(): boolean {
    return this._showInput;
  }
  set showInput(value: boolean) {
    this._showInput = coerceBooleanProperty(value);
  }
  private _showInput = false;

  @Input() value: number;
  @Input() name: string;
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
  @Input() margin: any;
  @Input() size: string;
  @Input() labelFormatCallback: (value: number) => string | number;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onDragEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  tickInterval: any;
  renderedValue: number;

  minValueClass: any;
  maxValueClass: any;

  minValueLabel: any;
  maxValueLabel: any;

  darkBackground = false;

  defaultInputs = new BehaviorSubject<any>({
    minValue: 0,
    maxValue: 100,
    step: 1,
    showLimitsValues: false,
    showInput: false,
    value: 0,
    name: null,
    disabled: false,
    required: false,
    margin: null,
    size: null,
    tabIndexValue: 0,
  });

  sizes = {
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset",
  };

  constructor(
    private utils: CssUtils,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.bgProviderService.$changeColor.subscribe((value) => {
      if (value === "dark") {
        this.darkBackground = true;
      } else if (value === "light") {
        this.darkBackground = false;
      }
    });
  }

  ngOnInit() {
    this.renderedValue = this.value;

    if (this.labelFormatCallback) {
      this.minValueLabel = this.labelFormatCallback(this.minValue!).toString();
      this.maxValueLabel = this.labelFormatCallback(this.maxValue!).toString();
    } else {
      this.minValueLabel = this.minValue;
      this.maxValueLabel = this.maxValue;
    }
    this.updateStyles(this.defaultInputs.getValue());
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.tickInterval = this.step > 1 ? 1 : 0;
    this.isDisabled = this.disabled;
    this.renderedValue = this.value;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.updateStyles(this.defaultInputs.getValue());
  }

  private updateStyles(inputs: any) {
    this.className = `${this.getDynamicStyle(inputs)}`;
    this.minValueClass = `${this.getMinLabelContainerClass()}`;
    this.maxValueClass = `${this.getMaxLabelContainerClass(inputs)}`;
  }
  /**
   * Executed while  slider value moves or when user press a key in input
   *  @param $event
   */
  public valueChanged($event: any): void {
    let newValue = ($event.target ? $event.target.value : $event.value) * 1;
    newValue = newValue < this.minValue ? this.minValue : newValue;
    newValue = newValue > this.maxValue ? this.maxValue : newValue;

    this.onChange.emit(newValue);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = newValue;
    } else {
      $event.value = this.renderedValue;
      $event.source._value = this.renderedValue;
      $event.source._percent = this.renderedValue / 100;
    }
  }

  /**
   * controlled dxc-input behaviour
   *
   * @param $event
   */
  public inputValueChanged($event: any): void {
    let newValue = $event * 1;
    newValue = newValue < this.minValue ? this.minValue : newValue;
    newValue = newValue > this.maxValue ? this.maxValue : newValue;

    this.onChange.emit(newValue);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = newValue;
    }
  }

  /**
   *  Eexecuted once the user has ended dragging
   * @param $event
   */
  public mouseUp($event): void {
    this.onDragEnd.emit(this.renderedValue);
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      align-items: center;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      font-family: var(--slider-fontFamily);
      font-style: var(--slider-fontStyle);
      font-weight: var(--slider-fontWeight);
      letter-spacing: var(--slider-fontLetterSpacing);

      .mat-slider-has-ticks .mat-slider-wrapper::after {
        height: var(--slider-dotsSize);
        border-left-width: 2px;
        top: var(--slider-dotsVerticalPosition);
      }

      &.disabled {
        cursor: not-allowed;
        input {
          cursor: not-allowed;
        }
      }
      mat-slider {
        flex-grow: 1;
        padding: 0px;
        .mat-slider-track-fill {
          height: 100%;
        }
        .mat-slider-ticks-container {
          height: var(--slider-dotsSize);
          top: var(--slider-dotsVerticalPosition);
        }
        .mat-slider-track-wrapper {
          top: var(--slider-lineVerticalPosition);
        }
        .mat-slider-track-wrapper,
        .mat-slider-track-background,
        .mat-slider-wrapper {
          height: var(--slider-lineThickness);
        }
        .mat-slider-focus-ring {
          background-color: transparent;
        }
        .mat-slider-thumb {
          transform: none !important;
          width: var(--slider-thumbWidth);
          height: var(--slider-thumbHeight);
          bottom: var(--slider-thumbVerticalPosition);
          &:hover{
            width: 16px;
            height: 16px;
            bottom: -8px;
          }
        }
        &:not(.mat-slider-disabled) {
          .mat-slider-ticks {
            height: var(--slider-dotsSize);
          }
          &.mat-slider-sliding {
            .mat-slider-thumb {
              cursor: grabbing;
            }
          }
          &:focus:not(.mat-slider-sliding) {
            .mat-slider-thumb {
              transform: none;
              outline: -webkit-focus-ring-color auto 2px;
              outline-offset: 3px;
            }
            .mat-slider-focus-ring {
              width: 0px;
              height: 0px;
            }
          }
          &.mat-slider-has-ticks {
            .mat-slider-ticks {
              opacity: 1 !important;
            }
          }
        }
        &.mat-slider-disabled {
          pointer-events: none;
          .mat-slider-thumb {
            transform: none !important;
            bottom: var(--slider-disabledThumbVerticalPosition);
          }
          .mat-slider-ticks {
            height: var(--slider-dotsSize);
          }
          .mat-slider-ticks-container {
            top: var(--slider-disabledDotsVerticalPosition);
          }
        }
        &.cdk-focused, &.mat-slider-sliding {
          .mat-slider-thumb {
            width: 16px;
            height: 16px;
            bottom: -8px;
          }
        }
        
      }
      dxc-input-text {
        margin-top: 10px;
        margin-left: 32px;
      }
      ${this.darkBackground ? this.getDarkStyle() : this.getLightStyle()}
    `;
  }

  getMinLabelContainerClass() {
    return css`
      margin-right: 16px;
    `;
  }

  getMaxLabelContainerClass(inputs: any) {
    return css`
      margin-left: ${inputs.step === 1 ? "16px" : "20px"};
    `;
  }

  getDarkStyle() {
    return css`
      color: var(--slider-fontColorOnDark);
      .mat-slider-has-ticks .mat-slider-wrapper::after {
        border-color: var(--slider-tickMarkBackgroundColorOnDark);
      }
      mat-slider {
        &:not(.mat-slider-disabled) {
          .mat-slider-track-fill {
            background-color: var(--slider-trackLineColorOnDark);
          }
          .mat-slider-track-background {
            background-color: var(--slider-totalLineColorOnDark) !important;
            opacity: 0.38;
          }
          .mat-slider-thumb {
            background-color: var(--slider-thumbBackgroundColorOnDark);
            border-color: var(--slider-thumbBackgroundColorOnDark) !important;
          }
          .mat-slider-ticks {
            background-image: repeating-linear-gradient(
              to right,
              var(--slider-tickMarkBackgroundColorOnDark),
              var(--slider-tickMarkBackgroundColorOnDark) var(--slider-dotsSize)
                var(--slider-dotsSize),
              transparent 2px,
              #e2141400
            );
          }
          &.mat-slider-sliding {
            .mat-slider-thumb {
              background-color: var(--slider-activeThumbBackgroundColorOnDark);
              border-color: var(
                --slider-activeThumbBackgroundColorOnDark
              ) !important;
            }
          }
          &:focus:not(.mat-slider-sliding) {
            .mat-slider-thumb {
              outline-color: var(--slider-focusColorOnDark);
            }
          }
        }
      }
      &.disabled {
        .mat-slider-horizontal .mat-slider-wrapper::after {
          border-color: var(--slider-disabledTickMarkBackgroundColorOnDark);
        }
        .mat-slider-thumb {
          border-color: var(
            --slider-disabledThumbBackgroundColorOnDark
          ) !important;
          background-color: var(--slider-disabledThumbBackgroundColorOnDark);
        }
        .mat-slider-track-background {
          background-color: var(
            --slider-disabledTotalLineColorOnDark
          ) !important;
        }
        .mat-slider-track-fill {
          transform: translateX(2px) scale3d(0.5, 1, 1) !important;
          background-color: var(--slider-disabledTrackLineColorOnDark) !important;
        }
        .mat-slider-ticks {
          background-image: repeating-linear-gradient(
            to right,
            var(--slider-disabledTickMarkBackgroundColorOnDark),
            var(--slider-disabledTickMarkBackgroundColorOnDark)
              var(--slider-dotsSize) var(--slider-dotsSize),
            transparent 2px,
            #e2141400
          );
        }
      }
    `;
  }

  getLightStyle() {
    return css`
      color: var(--slider-fontColor);
      .mat-slider-has-ticks .mat-slider-wrapper::after {
        border-color: var(--slider-tickMarkBackgroundColor);
      }
      mat-slider {
        &:not(.mat-slider-disabled) {
          .mat-slider-track-fill {
            background-color: var(--slider-trackLineColor);
          }
          .mat-slider-track-background {
            background-color: var(--slider-totalLineColor) !important;
          }
          .mat-slider-thumb {
            background-color: var(--slider-thumbBackgroundColor);
            border-color: var(--slider-thumbBackgroundColor) !important;
          }
          .mat-slider-ticks {
            background-image: repeating-linear-gradient(
              to right,
              var(--slider-tickMarkBackgroundColor),
              var(--slider-tickMarkBackgroundColor) var(--slider-dotsSize)
                var(--slider-dotsSize),
              transparent 2px,
              #e2141400
            );
          }
          &.mat-slider-sliding {
            .mat-slider-thumb {
              background-color: var(--slider-activeThumbBackgroundColor);
              border-color: var(
                --slider-activeThumbBackgroundColor
              ) !important;
            }
          }
          &:focus:not(.mat-slider-sliding) {
            .mat-slider-thumb {
              outline-color: var(--slider-focusColor);
            }
          }
        }
      }
      &.disabled {
        .mat-slider-horizontal .mat-slider-wrapper::after {
          border-color: var(--slider-disabledTickMarkBackgroundColor);
        }
        .mat-slider-thumb {
          border-color: var(--slider-disabledThumbBackgroundColor) !important;
          background-color: var(--slider-disabledThumbBackgroundColor);
        }
        .mat-slider-track-background {
          background-color: var(--slider-disabledTotalLineColor) !important;
        }
        .mat-slider-track-fill {
          transform: translateX(2px) scale3d(0.5, 1, 1) !important;
          background-color: var(--slider-disabledTrackLineColor) !important;
        }
        .mat-slider-ticks {
          background-image: repeating-linear-gradient(
            to right,
            var(--slider-disabledTickMarkBackgroundColor),
            var(--slider-disabledTickMarkBackgroundColor)
              var(--slider-dotsSize) var(--slider-dotsSize),
            transparent 2px,
            #e2141400
          );
        }
      }
    `;
  }
}
