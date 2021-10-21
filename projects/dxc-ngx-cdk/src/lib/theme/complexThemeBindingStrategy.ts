import { MappingStrategy } from "./mappingStrategy";
import * as Color from "color";
import rgbHex from "rgb-hex";

export class ComplexThemeBindingStrategy implements MappingStrategy {
  constructor() {}

  addLightness(hexColor: String, newLightness: number) {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.color[2];
      return hslColor.lightness(lightnessColor + newLightness).hex();
    }
    return null;
  }

  subLightness(hexColor, newLightness) {
    try {
      if (hexColor) {
        const color = Color(hexColor);
        const hslColor = color.hsl();
        const lightnessColor = hslColor.color[2];
        return hslColor.lightness(lightnessColor - newLightness).hex();
      }
    } catch (e) {
      return null;
    }
  }

  setOpacity(hexColor: String, newOpacity: number) {
    if (hexColor) {
      const color = Color(hexColor);
      console.log();
      return (
        "#" + rgbHex(color.color[0], color.color[1], color.color[2], newOpacity)
      );
    }
    return null;
  }

  bindProperties(theme: any, tokens: any) {
    let proccessedTokens = tokens;

    //ACCORDION
    proccessedTokens["--accordion-arrowColor"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-hoverBackgroundColor"] =
      this.setOpacity(theme?.accordion?.accentColor, 0.16) ??
      tokens["--accordion-hoverBackgroundColor"];
    proccessedTokens["--accordion-assistiveTextFontColor"] =
      theme?.accordion?.fontColor ??
      tokens["--accordion-assistiveTextFontColor"];
    proccessedTokens["--accordion-titleLabelFontColor"] =
      theme?.accordion?.fontColor ?? tokens["--accordion-titleLabelFontColor"];
    proccessedTokens["--accordion-iconColor"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-iconColor"];
    proccessedTokens["--accordion-focusBorderColor"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-focusBorderColor"];
    proccessedTokens["--accordion-disabledAssistiveTextFontColor"] =
      this.setOpacity(theme?.accordion?.fontColor, 0.34) ??
      tokens["--accordion-disabledAssistiveTextFontColor"];
    proccessedTokens["--accordion-disabledTitleLabelFontColor"] =
      this.setOpacity(theme?.accordion?.fontColor, 0.34) ??
      tokens["--accordion-disabledTitleLabelFontColor"];
    proccessedTokens["--accordion-disabledArrowColor"] =
      this.setOpacity(theme?.accordion?.accentColor, 0.34) ??
      tokens["--accordion-disabledArrowColor"];
    proccessedTokens["--accordion-disabledIconColor"] =
      this.setOpacity(theme?.accordion?.accentColor, 0.34) ??
      tokens["--accordion-disabledIconColor"];

    //BUTTON
    proccessedTokens["--button-primaryBackgroundColor"] =
      theme?.button?.baseColor ?? tokens["--button-primaryBackgroundColor"];
    proccessedTokens["--button-secondaryFontColor"] =
      theme?.button?.baseColor ?? tokens["--button-secondaryFontColor"];
    proccessedTokens["--button-secondaryHoverBackgroundColor"] =
      theme?.button?.baseColor ??
      tokens["--button-secondaryHoverBackgroundColor"];
    proccessedTokens["--button-textFontColor"] =
      theme?.button?.baseColor ?? tokens["--button-textFontColor"];
    proccessedTokens["--button-primaryFontColor"] =
      theme?.button?.primaryFontColor ?? tokens["--button-primaryFontColor"];
    proccessedTokens["--button-secondaryBorderColor"] =
      theme?.button?.baseColor ?? tokens["--button-secondaryBorderColor"];
    proccessedTokens["--button-secondaryHoverFontColor"] =
      theme?.button?.secondaryHoverFontColor ??
      tokens["--button-secondaryHoverFontColor"];
    proccessedTokens["--button-primaryHoverBackgroundColor"] =
      this.subLightness(theme?.button?.baseColor, 8) ??
      tokens["--button-primaryHoverBackgroundColor"];
    proccessedTokens["--button-primaryActiveBackgroundColor"] =
      this.subLightness(theme?.button?.baseColor, 18) ??
      tokens["--button-primaryActiveBackgroundColor"];
    proccessedTokens["--button-secondaryActiveBackgroundColor"] =
      this.subLightness(theme?.button?.baseColor, 18) ??
      tokens["--button-secondaryActiveBackgroundColor"];
    proccessedTokens["--button-textHoverBackgroundColor"] =
      this.addLightness(theme?.button?.baseColor, 57) ??
      tokens["--button-textHoverBackgroundColor"];
    proccessedTokens["--button-textActiveBackgroundColor"] =
      this.addLightness(theme?.button?.baseColor, 52) ??
      tokens["--button-textActiveBackgroundColor"];

    //CHECKBOX
    proccessedTokens["--checkbox-borderColor"] = 
      theme?.checkbox?.baseColor ?? tokens["--checkbox-borderColor"];
    proccessedTokens["--checkbox-checkColor"] = 
      theme?.checkbox?.checkColor ?? tokens["--checkbox-checkColor"];
    proccessedTokens["--checkbox-backgroundColorChecked"] =
      theme?.checkbox?.baseColor ??
      tokens["--checkbox-backgroundColorChecked"];
    proccessedTokens["--checkbox-backgroundColorChecked"] =
      theme?.checkbox?.baseColor ?? tokens["--checkbox-backgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBackgroundColorChecked"] =
      this.setOpacity(theme?.checkbox?.baseColor, 0.34) ??
      tokens["--checkbox-disabledBackgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBorderColor"] =
      this.setOpacity(theme?.checkbox?.baseColor, 0.34) ??
      tokens["--checkbox-disabledBorderColor"];
    proccessedTokens["--checkbox-disabledCheckColor"] =
      this.setOpacity(theme?.checkbox?.checkColor, 0.34) ??
      tokens["--checkbox-disabledCheckColor"];

    //CHIP
    proccessedTokens["--chip-backgroundColor"] =
      theme?.chip?.baseColor ?? tokens["--chip-backgroundColor"];
    proccessedTokens["--chip-borderColor"] =
      theme?.chip?.accentColor ?? tokens["--chip-borderColor"];
    proccessedTokens["--chip-fontColor"] =
      theme?.chip?.fontColor ?? tokens["--chip-fontColor"];
    proccessedTokens["--chip-disabledBackgroundColor"] =
      this.setOpacity(theme?.chip?.baseColor, 0.34) ??
      tokens["--chip-disabledBackgroundColor"];
    proccessedTokens["--chip-disabledFontColor"] =
      this.setOpacity(theme?.chip?.fontColor, 0.34) ??
      tokens["--chip-disabledFontColor"];

    //DATE
    proccessedTokens["--newDate-pickerSelectedDateBackgroundColor"] =
      theme?.newDate?.baseColor ??
      tokens["--newDate-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--newDate-pickerSelectedDateColor"] =
      theme?.newDate?.accentColor ??
      tokens["--newDate-pickerSelectedDateColor"];
    proccessedTokens["--newDate-pickerHoverDateBackgroundColor"] =
      this.setOpacity(theme?.newDate?.baseColor, 0.34) ??
      tokens["--newDate-pickerHoverDateBackgroundColor"];

    //NEWDATE
    proccessedTokens["--date-pickerSelectedDateBackgroundColor"] =
      theme?.date?.baseColor ??
      tokens["--date-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--date-pickerSelectedDateColor"] =
      theme?.date?.accentColor ?? tokens["--date-pickerSelectedDateColor"];
    proccessedTokens["--date-pickerHoverDateBackgroundColor"] =
      this.setOpacity(theme?.date?.baseColor, 0.34) ??
      tokens["--date-pickerHoverDateBackgroundColor"];

    //DROPDOWN
    proccessedTokens["--dropdown-buttonBackgroundColor"] =
      theme?.dropdown?.baseColor ?? tokens["--dropdown-buttonBackgroundColor"];
    proccessedTokens["--dropdown-buttonFontColor"] =
      theme?.dropdown?.fontColor ?? tokens["--dropdown-buttonFontColor"];
    proccessedTokens["--dropdown-buttonHoverBackgroundColor"] =
      this.setOpacity(theme?.dropdown?.baseColor, 0.8) ??
      tokens["--dropdown-buttonHoverBackgroundColor"];
    proccessedTokens["--dropdown-optionsListHoverBackgroundColor"] =
      this.setOpacity(theme?.dropdown?.baseColor, 0.34) ??
      tokens["--dropdown-optionsListHoverBackgroundColor"];

    //FOOTER
    proccessedTokens["--footer-backgroundColor"] =
      theme?.footer?.baseColor ?? tokens["--footer-backgroundColor"];
    proccessedTokens["--footer-bottomLinksDividerColor"] =
      theme?.footer?.accentColor ?? tokens["--footer-bottomLinksDividerColor"];
    proccessedTokens["--footer-bottomLinksFontColor"] =
      theme?.footer?.fontColor ?? tokens["--footer-bottomLinksFontColor"];
    proccessedTokens["--footer-copyrightFontColor"] =
      theme?.footer?.fontColor ?? tokens["--footer-copyrightFontColor"];
    proccessedTokens["--footer-customContentFontColor"] =
      theme?.footer?.fontColor ?? tokens["--footer-customContentFontColor"];

    //HEADER
    proccessedTokens["--header-backgroundColor"] =
      theme?.header?.baseColor ?? tokens["--header-backgroundColor"];
    proccessedTokens["--header-underlinedColor"] =
      theme?.header?.accentColor ?? tokens["--header-underlinedColor"];
    proccessedTokens["--header-customContentFontColor"] =
      theme?.header?.fontColor ?? tokens["--header-customContentFontColor"];
    proccessedTokens["--header-menuCustomContentFontColor"] =
      theme?.header?.fontColor ?? tokens["--header-menuCustomContentFontColor"];
    proccessedTokens["--header-hamburguerFontColor"] =
      theme?.header?.fontColor ?? tokens["--header-hamburguerFontColor"];
    proccessedTokens["--header-menuBackgroundColor"] =
      theme?.header?.menuBaseColor ?? tokens["--header-menuBackgroundColor"];
    proccessedTokens["--header-hamburguerColor"] =
      theme?.header?.hamburguerColor ?? tokens["--header-hamburguerColor"];
    proccessedTokens["--header-hoverHamburguerColor"] =
      this.setOpacity(theme?.header?.hamburguerColor, 0.16) ??
      tokens["--header-hoverHamburguerColor"];

    //INPUT TEXT
    proccessedTokens["--inputText-optionHoverBackgroundColor"] =
      this.setOpacity(theme?.inputText?.selectedBaseColor, 0.34) ??
      tokens["--inputText-optionHoverBackgroundColor"];

    //hover y active para new input

    //PAGINATOR
    proccessedTokens["--paginator-backgroundColor"] =
      theme?.paginator?.baseColor ?? tokens["--paginator-backgroundColor"];
    proccessedTokens["--paginator-fontColor"] =
      theme?.paginator?.fontColor ?? tokens["--paginator-fontColor"];

    //PROGRESSBAR
    proccessedTokens["--progressBar-trackLineColor"] =
      theme?.progressBar?.accentColor ?? tokens["--progressBar-trackLineColor"];
    proccessedTokens["--progressBar-totalLineColor"] =
      this.setOpacity(theme?.progressBar?.baseColor, 0.34) ??
      tokens["--progressBar-totalLineColor"];

    //RADIO
    proccessedTokens["--radio-color"] =
      theme?.radio?.baseColor ?? tokens["--radio-color"];
    proccessedTokens["--radio-disabledColor"] =
      this.setOpacity(theme?.radio?.baseColor, 0.34) ??
      tokens["--radio-disabledColor"];

    //SELECT
    proccessedTokens["--select-selectedOptionBackgroundColor"] =
      theme?.select?.baseColor ??
      tokens["--select-selectedOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      this.setOpacity(theme?.select?.baseColor, 0.34) ??
      tokens["--select-hoverOptionBackgroundColor"];

    //SIDENAV
    proccessedTokens["--sidenav-backgroundColor"] =
      theme?.sidenav?.baseColor ?? tokens["--sidenav-backgroundColor"];
    proccessedTokens["--sidenav-arrowContainerColor"] =
      this.setOpacity(theme?.sidenav?.arrowBaseColor, 0.8) ??
      tokens["--sidenav-arrowContainerColor"];
    proccessedTokens["--sidenav-arrowColor"] =
      theme?.sidenav?.arrowAccentColor ?? tokens["--sidenav-arrowColor"];

    //SLIDER
    proccessedTokens["--slider-totalLineColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-totalLineColor"];
    proccessedTokens["--slider-disabledThumbBackgroundColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledThumbBackgroundColor"];
    proccessedTokens["--slider-disabledTrackLineColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledTrackLineColor"];
    proccessedTokens["--slider-thumbBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-thumbBackgroundColor"];
    proccessedTokens["--slider-tickBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-tickBackgroundColor"];
    proccessedTokens["--slider-trackLineColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-trackLineColor"];
    proccessedTokens["--slider-tickBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-tickBackgroundColor"];
    proccessedTokens["--slider-disabledTickBackgroundColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledTickBackgroundColor"];

    proccessedTokens["--slider-activeThumbBackgroundColor"] =
      this.addLightness(theme?.slider?.baseColor, 20) ??
      tokens["--slider-activeThumbBackgroundColor"];
    proccessedTokens["--slider-hoverThumbBackgroundColor"] =
      this.addLightness(theme?.slider?.baseColor, 20) ??
      tokens["--slider-hoverThumbBackgroundColor"];
    proccessedTokens["--slider-focusThumbBackgroundColor"] =
      this.addLightness(theme?.slider?.baseColor, 20) ??
      tokens["--slider-focusThumbBackgroundColor"];

    //SPINNER
    proccessedTokens["--spinner-trackCircleColor"] =
      theme?.spinner?.accentColor ?? tokens["--spinner-trackCircleColor"];
    proccessedTokens["--spinner-totalCircleColor"] =
      theme?.spinner?.baseColor ?? tokens["--spinner-totalCircleColor"];

    //SWITCH
    proccessedTokens["--switch-checkedTrackBackgroundColor"] =
      theme?.switch?.checkedBaseColor ??
      tokens["--switch-checkedTrackBackgroundColor"];
    proccessedTokens["--switch-disabledCheckedTrackBackgroundColor"] =
      this.setOpacity(theme?.switch?.checkedBaseColor, 0.34) ??
      tokens["--switch-disabledCheckedTrackBackgroundColor"];

    //TABLE
    proccessedTokens["--table-headerBackgroundColor"] =
      theme?.table?.baseColor ?? tokens["--table-headerBackgroundColor"];
    proccessedTokens["--table-headerFontColor"] =
      theme?.table?.fontColor ?? tokens["--table-headerFontColor"];

    //TABS
    proccessedTokens["--tabs-selectedFontColor"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedIconColor"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedUnderlinedColor"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-focusOutline"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-hoverBackgroundColor"] =
      this.addLightness(theme?.tabs?.baseColor, 58) ??
      tokens["--tabs-hoverBackgroundColor"];
    proccessedTokens["--tabs-pressedBackgroundColor"] =
      this.addLightness(theme?.tabs?.baseColor, 53) ??
      tokens["--tabs-pressedBackgroundColor"];

    //TOGGLE GROUP
    proccessedTokens["--toggleGroup-unselectedBackgroundColor"] =
      theme?.toggleGroup?.unselectedBaseColor ??
      tokens["--toggleGroup-unselectedBackgroundColor"];
    proccessedTokens["--toggleGroup-unselectedHoverBackgroundColor"] =
      theme?.toggleGroup?.unselectedHoverBaseColor ??
      tokens["--toggleGroup-unselectedHoverBackgroundColor"];
    proccessedTokens["--toggleGroup-unselectedActiveBackgroundColor"] =
      theme?.toggleGroup?.unselectedActiveBaseColor ??
      tokens["--toggleGroup-unselectedActiveBackgroundColor"];
    proccessedTokens["--toggleGroup-unselectedFontColor"] =
      theme?.toggleGroup?.unselectedFontColor ??
      tokens["--toggleGroup-unselectedFontColor"];
    proccessedTokens["--toggleGroup-selectedBackgroundColor"] =
      theme?.toggleGroup?.selectedBaseColor ??
      tokens["--toggleGroup-selectedBackgroundColor"];
    proccessedTokens["--toggleGroup-selectedHoverBackgroundColor"] =
      theme?.toggleGroup?.selectedHoverBaseColor ??
      tokens["--toggleGroup-selectedHoverBackgroundColor"];
    proccessedTokens["--toggleGroup-selectedActiveBackgroundColor"] =
      theme?.toggleGroup?.selectedActiveBaseColor ??
      tokens["--toggleGroup-selectedActiveBackgroundColor"];
    proccessedTokens["--toggleGroup-selectedFontColor"] =
      theme?.toggleGroup?.selectedFontColor ??
      tokens["--toggleGroup-selectedFontColor"];
    proccessedTokens["--toggleGroup-selectedHoverFontColor"] =
      theme?.toggleGroup?.selectedHoverFontColor ??
      tokens["--toggleGroup-selectedHoverFontColor"];
    proccessedTokens["--toggleGroup-selectedDisabledBackgroundColor"] =
      this.setOpacity(theme?.toggleGroup?.selectedBaseColor, 0.34) ??
      tokens["--toggleGroup-selectedDisabledBackgroundColor"];
    proccessedTokens["--toggleGroup-selectedDisabledFontColor"] =
      this.setOpacity(theme?.toggleGroup?.selectedFontColor, 0.34) ??
      tokens["--toggleGroup-selectedDisabledFontColor"];
    proccessedTokens["--toggleGroup-unselectedDisabledBackgroundColor"] =
      this.setOpacity(theme?.toggleGroup?.unselectedBaseColor, 0.34) ??
      tokens["--toggleGroup-unselectedDisabledBackgroundColor"];
    proccessedTokens["--toggleGroup-unselectedDisabledFontColor"] =
      this.setOpacity(theme?.toggleGroup?.unselectedFontColor, 0.34) ??
      tokens["--toggleGroup-unselectedDisabledFontColor"];

    //WIZARD
    proccessedTokens["--wizard-stepContainerSelectedBackgroundColor"] =
      theme?.wizard?.baseColor ??
      tokens["--wizard-stepContainerSelectedBackgroundColor"];
    proccessedTokens["--wizard-circleSelectedBorderColor"] =
      theme?.wizard?.baseColor ?? tokens["--wizard-circleSelectedBorderColor"];
    proccessedTokens["--wizard-stepContainerSelectedFontColor"] =
      theme?.wizard?.fontColor ??
      tokens["--wizard-stepContainerSelectedFontColor"];

    return proccessedTokens;
  }
}
