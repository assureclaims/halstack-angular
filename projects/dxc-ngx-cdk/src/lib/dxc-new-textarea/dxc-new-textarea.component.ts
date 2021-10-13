import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BackgroundProviderService } from "../../public-api";
import { CssUtils } from "../utils";
import { DxcNewTextareaHelper } from "./dxc-new-textarea.helper";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "dxc-new-textarea",
  templateUrl: "./dxc-new-textarea.component.html",
  providers: [DxcNewTextareaHelper, CssUtils],
})
export class DxcNewTextareaComponent implements OnInit {
  @HostBinding("class") className;
  @HostBinding("class.hasError") hasError = false;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  id: string;

  @Input()
  helperText: string;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get optional(): boolean {
    return this._optional;
  }
  set optional(value: boolean) {
    this._optional = coerceBooleanProperty(value);
  }
  private _optional = false;

  @Input()
  get rows(): number {
    return this._rows;
  }
  set rows(value: number) {
    this._rows = coerceNumberProperty(value);
  }
  private _rows = 4;

  @Input()
  verticalGrow = "";

  @Input()
  error = undefined;

  @Input()
  placeholder = "";

  @Input()
  pattern = "";

  @Input()
  length = { min: undefined, max: undefined };

  @Input()
  margin: Object | string;

  @Input()
  tabIndex: number;

  @Input()
  size: string;

  private controlled: boolean;

  defaultInputs = new BehaviorSubject<any>({
    placeholder: "",
    error: "",
    optional: false,
    disabled: false,
    helperText: "",
    value: "",
    name: "",
    label: "",
    margin: "",
    tabIndex: 0,
    size: "medium",
    rows: 4,
    verticalGrow: "auto",
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @ViewChild("textareaRef", { static: true }) textareaRef: ElementRef;

  darkBackground: boolean = false;

  isDirty: boolean = false;

  validationError: string = "";

  textareaId = `textarea-${uuidv4()}`;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcNewTextareaHelper,
    @Optional() public bgProviderService?: BackgroundProviderService
  ) {
    this.bgProviderService.$changeColor.subscribe((value) => {
      setTimeout(() => {
        if (value === "dark") {
          this.darkBackground = true;
        } else if (value === "light") {
          this.darkBackground = false;
        }
        this.className = `${this.helper.getDynamicStyle({
          ...this.defaultInputs.getValue(),
          darkBackground: this.darkBackground,
        })}`;
      }, 0);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkHeight();
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
    })}`;
  }

  ngOnInit(): void {
    if (this.value === undefined) {
      this.value = "";
      this.controlled = false;
    } else {
      this.controlled = true;
    }
    this.className = `${this.helper.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      darkBackground: this.darkBackground,
    })}`;
  }

  ngAfterViewInit(): void {
    if (this.textareaRef) {
      this.textareaRef.nativeElement.ariaDisabled = this.disabled;
    }
    this.checkHeight();
  }

  handleOnChange(event) {
    if (this.value !== event && this.isDirty) {
      this.onChange.emit(event);
    }
    if (!this.controlled) {
      this.value = event;
    } else {
      setTimeout(() => {
        if (this.textareaRef.nativeElement.value !== this.value) {
          this.textareaRef.nativeElement.value = this.value;
          this.cdRef.detectChanges();
        }
      }, 0);
    }
    this.cdRef.detectChanges();
  }

  checkHeight(){
    if(this.textareaRef){
      if (this.verticalGrow === "auto") {
        const textareaLineHeight = parseInt(window.getComputedStyle(this.textareaRef.nativeElement)["line-height"]);
        const textareaPaddingTopBottom = parseInt(window.getComputedStyle(this.textareaRef.nativeElement)["padding-top"]) * 2;
        this.textareaRef.nativeElement.style.height = `${textareaLineHeight * this.rows}px`;
        const newHeight = this.textareaRef.nativeElement.scrollHeight - textareaPaddingTopBottom;
        this.textareaRef.nativeElement.style.height = `${newHeight}px`;
      }
    }
  }

  handleOnBlur() {
    const validationError = this.validateOnBlur();
    this.validationError = validationError;
    this.hasError = this.validationError ? true : false;
    this.onBlur.emit({ value: this.value, error: validationError });
  }

  handleOnFocus() {
    if (!this.isDirty) {
      this.isDirty = true;
    }
  }

  validateOnBlur() {
    let err = this.validateLength(this.value);
    if (!err && this.value && !this.patternMatch(this.pattern, this.value)) {
      err = `Please use a valid pattern`;
    }
    return err;
  }

  validateLength(value) {
    return (this.length.min && value && value.length < +this.length.min) ||
      (this.length.max && value && value.length > +this.length.max)
      ? `Min length ${this.length.min}, Max length ${this.length.max}`
      : null;
  }

  patternMatch(pattern, value) {
    const patternToMatch = new RegExp(pattern);
    return patternToMatch.test(value);
  }
}