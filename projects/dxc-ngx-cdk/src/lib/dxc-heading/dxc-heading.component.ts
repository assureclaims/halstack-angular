import { css } from "emotion";
import { CssUtils } from "../utils";
import { BehaviorSubject } from "rxjs";
import { Component, Input, HostBinding, SimpleChanges } from "@angular/core";

@Component({
  selector: "dxc-heading",
  templateUrl: "./dxc-heading.component.html",
  providers: [CssUtils],
})
export class DxcHeadingComponent {
  @Input() level: number;
  @Input() text: string;
  @Input() weight: string;
  @Input() margin: string;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    level: 1,
    text: null,
    weight: null,
    margin: null,
  });

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.level == null) {
      this.level = 1;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.level == null) {
      this.level = 1;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .container {
        ${this.utils.getMargins(inputs.margin)}
      }

      font-family: var(--heading-fontFamilyBase);
      color: var(--heading-fontColorBase);

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0px;
      }

      h1 {
        font-weight: ${inputs.weight === "light"
          ? 200
          : inputs.weight === "normal"
          ? 400
          : inputs.weight === "bold"
          ? 600
          : "var(--heading-level1FontWeight)"};
        letter-spacing: var(--heading-level1LetterSpacing);
        font-size: var(--heading-level1FontSize);
        line-height: var(--heading-level1LineHeight);
        color: var(--heading-level1FontColor);
        font-family: var(--heading-level1FontFamily);
        font-style: var(--heading-level1FontStyle);
      }

      h2 {
        font-weight: ${inputs.weight === "light"
          ? 200
          : inputs.weight === "normal"
          ? 400
          : inputs.weight === "bold"
          ? 600
          : "var(--heading-level2FontWeight)"};
        letter-spacing: var(--heading-level2LetterSpacing);
        font-size: var(--heading-level2FontSize);
        line-height: var(--heading-level2LineHeight);
        color: var(--heading-level2FontColor);
        font-family: var(--heading-level2FontFamily);
        font-style: var(--heading-level2FontStyle);
      }

      h3 {
        font-weight: ${inputs.weight === "light"
          ? 200
          : inputs.weight === "normal"
          ? 400
          : inputs.weight === "bold"
          ? 600
          : "var(--heading-level3FontWeight)"};
        letter-spacing: var(--heading-level3LetterSpacing);
        font-size: var(--heading-level3FontSize);
        line-height: var(--heading-level3LineHeight);
        color: var(--heading-level3FontColor);
        font-family: var(--heading-level3FontFamily);
        font-style: var(--heading-level3FontStyle);
      }

      h4 {
        font-weight: ${inputs.weight === "light"
          ? 200
          : inputs.weight === "normal"
          ? 400
          : inputs.weight === "bold"
          ? 600
          : "var(--heading-level4FontWeight)"};
        letter-spacing: var(--heading-level4LetterSpacing);
        font-size: var(--heading-level4FontSize);
        line-height: var(--heading-level4LineHeight);
        color: var(--heading-level4FontColor);
        font-family: var(--heading-level4FontFamily);
        font-style: var(--heading-level4FontStyle);
      }

      h5 {
        font-weight: ${inputs.weight === "light"
          ? 200
          : inputs.weight === "normal"
          ? 400
          : inputs.weight === "bold"
          ? 600
          : "var(--heading-level5FontWeight)"};
        letter-spacing: var(--heading-level5LetterSpacing);
        font-size: var(--heading-level5FontSize);
        line-height: var(--heading-level5LineHeight);
        color: var(--heading-level5FontColor);
        font-family: var(--heading-level5FontFamily);
        font-style: var(--heading-level5FontStyle);
      }
    `;
  }
}
