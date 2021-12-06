import {
  Component,
  Input,
  Output,
  HostBinding,
  EventEmitter,
  SimpleChanges,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-dialog",
  templateUrl: "./dxc-dialog.component.html",
  providers: [CssUtils],
})
export class DxcDialogComponent implements AfterViewInit {
  @ViewChild('dialogboxstart', { read: ElementRef, static: false }) dialogboxstart: ElementRef;
  @ViewChild('dialogboxreturn', { read: ElementRef, static: false }) dialogboxreturn: ElementRef;
  @ViewChild('dialogboxend', { read: ElementRef, static: false }) dialogboxend: ElementRef;
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null; 
  @HostListener('keydown.escape')
  escape() {
    this.onCloseHandler(true);
  }

  @Input() closeButtonLabel: string = 'Close'
  @Input()
  get overlay(): boolean {
    return this._overlay;
  }
  set overlay(value: boolean) {
    this._overlay = coerceBooleanProperty(value);
  }
  private _overlay;
  @Input()
  get isCloseVisible(): boolean {
    return this._isCloseVisible;
  }
  set isCloseVisible(value: boolean) {
    this._isCloseVisible = coerceBooleanProperty(value);
  }
  private _isCloseVisible = true;
  @Input() padding: any;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Output() onCloseClick = new EventEmitter<any>();
  @Output() onBackgroundClick = new EventEmitter<any>();

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    overlay: true,
    isCloseVisible: true,
    padding: null,
    tabIndexValue: 0
  });

  constructor(private utils: CssUtils) { }

  public ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onCloseHandler($event: any): void {
    this.onCloseClick.emit($event);
  }

  public onBackgroundClickHandler($event: any): void {
    this.onBackgroundClick.emit($event);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dialogboxstart.nativeElement.focus();
    }, 1);
  }

  startKeyPress($event: any) {
    if ($event.shiftKey && $event.keyCode == 9 && $event.srcElement == this.dialogboxstart.nativeElement) {
      if (this.dialogboxreturn.nativeElement.focus) {
        this.dialogboxreturn.nativeElement.tabindex = "0";
        this.dialogboxreturn.nativeElement.focus();
      }
    }
  }

  endFocus($event: any) {
    if (this.dialogboxstart.nativeElement.focus)
      this.dialogboxstart.nativeElement.focus();
  }

  returnFocusOut($event: any) {
    this.dialogboxreturn.nativeElement.tabindex = "-1";
  }

  private overlayStyle(overlay: boolean) {
    if (overlay === true) {
      return css`
        background-color: var(--dialog-overlayColor);
        opacity: 0.8 !important;
      `;
    } else
      return css`
        background-color: transparent;
      `;
  }

  getDynamicStyle(inputs) {
    return css`
      .dialog {
        position: fixed;
        z-index: 3300;
        right: 0px;
        bottom: 0px;
        top: 0px;
        left: 0px;
        .backOverlay {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: fixed;
          opacity: 1;
          ${this.overlayStyle(inputs.overlay)}
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          outline: none;
          opacity: 1;
          transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          .dialogContainer {
            overflow: unset;
            max-width: 80%;
            min-width: 800px;
            ${inputs.isCloseVisible
        ? css`
                  min-height: 72px;
                `
        : css``}
            box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
            ${this.utils.getPaddings(inputs.padding)}
            display: flex;
            max-height: calc(100% - 96px);
            flex-direction: column;
            margin: 48px;
            position: relative;
            overflow-y: auto;
            border-radius: 4px;
            color: rgba(0, 0, 0, 0.87);
            transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            background-color: var(--dialog-backgroundColor);
            .closeIcon {
              display: flex;
              justify-content: flex-end;
              position: absolute;
              top: 20px;
              right: 20px;
              svg {
                cursor: pointer;
                width: 34px;
                height: 34px;
              }
            }
            .content {
              overflow-y: auto;
              ::-webkit-scrollbar {
                width: 3px;
              }
              ::-webkit-scrollbar-track {
                background-color: var(--dialog-scrollBarTrackColor);
                border-radius: 3px;
              }
              ::-webkit-scrollbar-thumb {
                background-color: var(--dialog-scrollBarThumbColor);
                border-radius: 3px;
              }
            }
          }
        }
      }
    `;
  }
}
