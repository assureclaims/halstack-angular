const globalTokens = {
  black: "#000000",
  lightBlack: "#212121",
  yellow: "#FFED00",
  lightGrey: "#D9D9D9",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  blue: "#005FCC",
  lighterGrey: "#F8F8F8",
  red: "#D0011B",
  violet: "#8800F6",
  darkBlue: "#006BF6",
  inherit: "inherit",
  transparent: "transparent",
  purple: "#6f2c91",
  mediumPurple: "#ead8f3",
  lightPurple: "#f5ebf9",
  lighterPurple: "#d0bddb",
  white: "#ffffff",
  darkGrey: "#666666",
  mediumGrey: "#bfbfbf",
  mediumWhite: "#f9f9f9",
  mediumBlue: "#0067b3",
  softBlue: "#b1cee6",
  darkWhite: "#eeeeee",
  lighterBlack: "#b1b1b1",
  mediumBlack: "#676767",
  mediumGreyBlack: "#dbdbdb",
  lightWhite: "#f2f2f2",
  softGrey: "#cecece",
  softBlack: "#565656",
  fontSize10: "10px",
  type_sans: "Open Sans, sans-serif",
  type_scale_root: "16px",
  type_scale_08: "3.75rem",
  type_scale_07: "3rem",
  type_scale_06: "2rem",
  type_scale_05: "1.5rem",
  type_scale_04: "1.25rem",
  type_scale_03: "1rem",
  type_scale_02: "0.875rem",
  type_scale_01: "0.75rem",
  type_light: "300",
  type_regular: "400",
  type_semibold: "600",
  type_bold: "bold",
  type_italic: "italic",
  type_normal: "normal",
  type_spacing_tight_02: "-0.05em",
  type_spacing_tight_01: "-0.025em",
  type_spacing_normal: "0",
  type_spacing_wide_01: "0.025em",
  type_spacing_wide_02: "0.05em",
  type_spacing_wide_03: "0.1em",
  type_initial: "initial",
  type_uppercase: "uppercase",
  type_no_line: "none",
  type_underline: "underline",
  type_line_through: "line-through",
  type_leading_compact_03: "1em",
  type_leading_compact_02: "1.25em",
  type_leading_compact_01: "1.365em",
  type_leading_normal: "1.5em",
  type_leading_loose_01: "1.75em",
  type_leading_loose_02: "2em",
};

export const componentTokens = {
  "--fontFamily": globalTokens.type_sans,
  //ACCORDION
  "--accordion-backgroundColor": globalTokens.white,
  "--accordion-arrowColor": globalTokens.purple,
  "--accordion-hoverBackgroundColor": globalTokens.lightPurple,
  //Font
  "--accordion-fontColorBase": globalTokens.darkGrey,
  "--accordion-disabledFontColor": globalTokens.mediumGrey,
  //Title
  "--accordion-titleFontFamily": globalTokens.type_sans,
  "--accordion-titleFontSize": globalTokens.type_scale_03,
  "--accordion-titleFontWeight": globalTokens.type_regular,
  "--accordion-titleFontStyle": globalTokens.type_normal,
  "--accordion-titleFontColor": "",
  "--accordion-titleMarginRight": "48px",
  "--accordion-titleMarginLeft": "0px",
  "--accordion-titleMarginTop": "0px",
  "--accordion-titleMarginBottom": "0px",
  //AssistiveText
  "--accordion-assistiveTextFontFamily": globalTokens.type_sans,
  "--accordion-assistiveTextFontSize": globalTokens.type_scale_03,
  "--accordion-assistiveTextFontWeight": globalTokens.type_light,
  "--accordion-assistiveTextFontStyle": globalTokens.type_italic,
  "--accordion-assistiveTextFontColor": "",
  "--accordion-assistiveTextLetterSpacing": globalTokens.type_spacing_wide_01,
  "--accordion-assistiveTextMinWidth": "100px",
  "--accordion-assistiveTextMarginRight": "0px",
  "--accordion-assistiveTextMarginLeft": "0px",
  "--accordion-assistiveTextMarginTop": "1px",
  "--accordion-assistiveTextMarginBottom": "0px",
  //CustomContent
  "--accordion-customContentFontFamily": globalTokens.type_sans,
  "--accordion-customContentFontSize": globalTokens.type_scale_03,
  "--accordion-customContentFontWeight": globalTokens.type_light,
  "--accordion-customContentFontColor": "",
  //Header
  "--accordion-headerPaddingLeft": "16px",
  "--accordion-headerPaddingRight": "16px",
  "--accordion-headerPaddingTop": "0px",
  "--accordion-headerPaddingBottom": "0px",
  "--accordion-headerFocusBorderStyle": "auto",
  "--accordion-headerFocusBorderThickness": "1px",
  "--accordion-headerFocusBorderColor": globalTokens.purple,
  //Size
  "--accordion-minHeight": "48px",
  "--accordion-minWidth": "280px",
  //Icon
  "--accordion-iconMaxHeight": "24px",
  "--accordion-iconMaxWidth": "24px",
  "--accordion-iconMarginLeft": "0px",
  "--accordion-iconMarginRigth": "12px",
  //Border/BoxShadow
  "--accordion-borderRadius": "4px",
  "--accordion-boxShadowOffsetX": "0px",
  "--accordion-boxShadowOffsetY": "6px",
  "--accordion-boxShadowBlur": "10px",
  "--accordion-boxShadowColor": "#00000024",
  //Separator
  "--accordion-accordionGroupSeparatorBorderColor": "#00000024",
  "--accordion-accordionGroupSeparatorBorderThickness": "1px",
  "--accordion-accordionGroupSeparatorBorderRadius": "0px",
  "--accordion-accordionGroupSeparatorBorderStyle": "solid",

  //ALERT
  "--alert-infoColor": globalTokens.lightBlue,
  "--alert-successColor": globalTokens.lightGreen,
  "--alert-warningColor": globalTokens.lightYellow,
  "--alert-errorColor": globalTokens.lightPink,
  "--alert-overlayColor": globalTokens.black,
  "--alert-overlayOpacity": "0.8",
  "--alert-focusColor": globalTokens.blue, //ponerlo en el componente
  // Title
  "--alert-height": "48px",
  "--alert-titleFontFamily": globalTokens.type_sans,
  "--alert-titleFontSize": globalTokens.type_scale_01,
  "--alert-titleFontColor": globalTokens.black,
  "--alert-titleFontWeight": globalTokens.type_bold,
  "--alert-titleFontStyle": globalTokens.type_normal,
  "--alert-titleTextTransform": globalTokens.type_uppercase,
  "--alert-titlePaddingRight": "10px",
  "--alert-titlePaddingLeft": "12px",
  "--alert-titlePaddingTop": "0px",
  "--alert-titlePaddingBottom": "0px",
  //Content
  "--alert-contentFontFamily": globalTokens.type_sans,
  "--alert-contentFontSize": globalTokens.type_scale_01,
  "--alert-contentFontColor": globalTokens.black,
  "--alert-contentFontWeight": globalTokens.type_normal,
  "--alert-contentPaddingLeft": "46px",
  "--alert-contentPaddingRight": "12px",
  "--alert-contentPaddingTop": "8px",
  "--alert-contentPaddingBottom": "20px",
  //InlineText
  "--alert-inlineTextPaddingLeft": "10px",
  "--alert-inlineTextPaddingRight": "22px",
  "--alert-inlineTextPaddingTop": "0px",
  "--alert-inlineTextPaddingBottom": "0px",
  //Icon
  "--alert-iconPaddingLeft": "12px",
  "--alert-iconPaddingRight": "0px",
  "--alert-iconPaddingTop": "0px",
  "--alert-iconPaddingBottom": "0px",
  "--alert-iconSize": "20px",
  //Box/Border
  "--alert-boxShadowOffsetX": "0px",
  "--alert-boxShadowOffsetY": "3px",
  "--alert-boxShadowBlur": "6px",
  "--alert-boxShadowColor": "#00000012",
  "--alert-borderRadius": "4px",
  "--alert-borderStyle": globalTokens.type_no_line,
  "--alert-borderThickness": "0px",
  "--alert-borderColor": globalTokens.transparent,

  //BOX
  "--box-backgroundColor": globalTokens.white,
  
  "--box-fontFamily": globalTokens.type_sans,
  "--box-fontSize": globalTokens.type_scale_02,
  "--box-fontWeight": globalTokens.type_normal,
  "--box-fontColor": globalTokens.black,
  "--box-letterSpacing": globalTokens.type_spacing_wide_01,

  "--box-borderRadius": "4px",
  "--box-borderThickness": "0px",
  "--box-borderColor": globalTokens.transparent,
  "--box-borderStyle": globalTokens.type_no_line,

  "--box-noneShadowDepthShadowOffsetX": "none",
  "--box-noneShadowDepthShadowOffsetY": "none",
  "--box-noneShadowDepthShadowBlur": "none",
  "--box-noneShadowDepthShadowSpread": "none",
  "--box-noneShadowDepthShadowColor": globalTokens.transparent,
  "--box-oneShadowDepthShadowOffsetX": "0px",
  "--box-oneShadowDepthShadowOffsetY": "2px",
  "--box-oneShadowDepthShadowBlur": "1px",
  "--box-oneShadowDepthShadowSpread": "-1px",
  "--box-oneShadowDepthShadowColor": "#00000033",
  "--box-twoShadowDepthShadowOffsetX": "0px",
  "--box-twoShadowDepthShadowOffsetY": "3px",
  "--box-twoShadowDepthShadowBlur": "3px",
  "--box-twoShadowDepthShadowSpread": "-2px",
  "--box-twoShadowDepthShadowColor": "#00000033",

  //TABS
  "--tabs-selectedFontColor": globalTokens.purple,
  "--tabs-backgroundColor": globalTokens.white,
  "--tabs-fontColor": globalTokens.darkGrey,
  "--tabs-disabledFontColor": globalTokens.mediumGrey,
  "--tabs-focusOutline": globalTokens.purple,
  "--tabs-selectedUnderlinedColor": globalTokens.purple,
  "--tabs-divider": globalTokens.mediumGrey,
  "--tabs-selectedIconColor": globalTokens.purple,
  "--tabs-hoverBackgroundColor": globalTokens.lightPurple,
  "--tabs-pressedBackgroundColor": globalTokens.mediumPurple,

  //------------Without new design---------------------

  //BUTTON
  "--button-primaryBackgroundColor": globalTokens.purple,
  "--button-primaryBackgroundColorOnDark": "#581B81",
  "--button-primaryHoverBackgroundColor": globalTokens.black,
  "--button-primaryHoverBackgroundColorOnDark": "#581B81",
  "--button-primaryFontColor": globalTokens.white,
  "--button-primaryFontColorOnDark": "#000000",
  "--button-primaryHoverFontColor": globalTokens.white,
  "--button-primaryHoverFontColorOnDark": "#000000",
  "--button-disabledPrimaryBackgroundColor": globalTokens.lighterPurple,
  "--button-primaryActiveBackgroundColor": globalTokens.mediumBlack,
  "--button-primaryActiveBackgroundColorOnDark": "#581B81",
  "--button-primaryDisabledBackgroundColor": globalTokens.lighterPurple,
  "--button-primaryDisabledBackgroundColorOnDark": "#ffffff57",
  "--button-primaryDisabledFontColor": globalTokens.white,
  "--button-primaryDisabledFontColorOnDark": "#000000",
  "--button-primaryBorderThickness": "0px",
  "--button-primaryBorderStyle": "none",
  "--button-primaryBorderRadius": "4px",
  "--button-primaryFontFamily": globalTokens.type_sans,
  "--button-primaryFontSize": globalTokens.type_scale_02,
  "--button-primaryFontWeight": globalTokens.type_regular,
  "--button-primaryPaddingTop": "12px",
  "--button-primaryPaddingBottom": "12px",
  "--button-secondaryOutlinedColor": globalTokens.purple,
  "--button-secondaryOutlinedColorOnDark": "#6A229A",
  "--button-secondaryBackgroundColor": globalTokens.transparent,
  "--button-secondaryBackgroundColorOnDark": "transparent",
  "--button-secondaryHoverOutlinedColor": globalTokens.black,
  "--button-secondaryHoverOutlinedColorOnDark": "#6A229A",
  "--button-secondaryFontColor": globalTokens.black,
  "--button-secondaryFontColorOnDark": "#FFFFFF",
  "--button-secondaryHoverFontColor": globalTokens.black,
  "--button-secondaryHoverFontColorOnDark": "#FFFFFF",
  "--button-secondaryActiveBackgroundColor": globalTokens.mediumGreyBlack,
  "--button-secondaryActiveBackgroundColorOnDark": "#FFFFFF29",
  "--button-secondaryHoverBackgroundColor": globalTokens.darkWhite,
  "--button-secondaryHoverBackgroundColorOnDark": "#FFFFFF14",
  "--button-secondaryDisabledOutlinedColor": globalTokens.lighterPurple,
  "--button-secondaryDisabledOutlinedColorOnDark": "#575757",
  "--button-secondaryDisabledFontColor": globalTokens.lighterBlack,
  "--button-secondaryDisabledFontColorOnDark": "#575757",
  "--button-secondaryBorderThickness": "2px",
  "--button-secondaryBorderStyle": "solid",
  "--button-secondaryBorderRadius": "4px",
  "--button-secondaryFontFamily": globalTokens.type_sans,
  "--button-secondaryFontSize": globalTokens.type_scale_02,
  "--button-secondaryFontWeight": globalTokens.type_regular,
  "--button-secondaryPaddingTop": "10px",
  "--button-secondaryPaddingBottom": "10px",
  "--button-textBackgroundColor": globalTokens.transparent,
  "--button-textBackgroundColorOnDark": "transparent",
  "--button-textHoverBackgroundColor": globalTokens.black,
  "--button-textHoverBackgroundColorOnDark": "#6A229A80",
  "--button-textFontColor": globalTokens.purple,
  "--button-textFontColorOnDark": "#FFFFFF",
  "--button-textHoverFontColor": globalTokens.white,
  "--button-textHoverFontColorOnDark": "#FFFFFF",
  "--button-textActiveBackgroundColor": globalTokens.mediumBlack,
  "--button-textActiveBackgroundColorOnDark": "#581B81",
  "--button-textDisabledFontColor": globalTokens.lighterPurple,
  "--button-textDisabledBackgroundColor": "transparent",
  "--button-textDisabledBackgroundColorOnDark": "transparent",
  "--button-textDisabledFontColorOnDark": "#FFFFFF80",
  "--button-textBorderThickness": "0px",
  "--button-textBorderColor": "",
  "--button-textBorderColorOnDark": "",
  "--button-textBorderStyle": "none",
  "--button-textBorderRadius": "4px",
  "--button-textFontFamily": globalTokens.type_sans,
  "--button-textFontSize": globalTokens.type_scale_02,
  "--button-textFontWeight": globalTokens.type_regular,
  "--button-textPaddingTop": "12px",
  "--button-textPaddingBottom": "12px",
  "--button-focusColor": globalTokens.blue,
  "--button-labelFontLineHeight": globalTokens.type_leading_normal,
  "--button-labelletterSpacing": globalTokens.type_spacing_wide_01,
  "--button-labelTextTransform": globalTokens.type_uppercase,
  "--button-iconMaxHeight": "20px",
  "--button-conMaxWidth": "20px",
  "--button-minHeight": "43px",

  //CARD
  "--card-backgroundColor": globalTokens.white,

  //CHECKBOX
  "--checkbox-borderColor": globalTokens.mediumBlue,
  "--checkbox-checkColor": globalTokens.white,
  "--checkbox-backgroundColorChecked": globalTokens.mediumBlue,
  "--checkbox-fontColor": globalTokens.inherit,
  "--checkbox-focusColor": globalTokens.blue,
  "--checkbox-disabledBackgroundColorChecked": globalTokens.softBlue,
  "--checkbox-disabledBorderColor": globalTokens.softBlue,
  "--checkbox-disabledCheckColor": globalTokens.white,
  "--checkbox-disabledFontColor": globalTokens.lighterBlack,

  //CHIP
  "--chip-backgroundColor": globalTokens.darkWhite,
  "--chip-outlinedColor": "",
  "--chip-fontColor": globalTokens.black,
  "--chip-disabledBackgroundColor": globalTokens.mediumWhite,
  "--chip-disabledFontColor": globalTokens.lighterBlack,

  //DATE
  "--date-pickerSelectedDateBackgroundColor": globalTokens.purple,
  "--date-pickerSelectedDateColor": globalTokens.white,
  "--date-pickerBackgroundColor": globalTokens.white,
  "--date-pickerActualDate": globalTokens.lightGrey,
  "--date-pickerFontColor": globalTokens.black,
  "--date-pickerHoverDateFontColor": globalTokens.black,
  "--date-pickerHoverDateBackgroundColor": globalTokens.lighterPurple,
  "--date-focusColor": globalTokens.blue,

  //DIALOG
  "--dialog-overlayColor": globalTokens.black,
  "--dialog-backgroundColor": globalTokens.white,
  "--dialog-scrollBarThumbColor": globalTokens.darkGrey,
  "--dialog-scrollBarTrackColor": globalTokens.lightGrey,

  //DROPDOWN
  "--dropdown-backgroundColor": globalTokens.white,
  "--dropdown-fontColor": globalTokens.black,
  "--dropdown-dropdownBackgroundColor": globalTokens.white,
  "--dropdown-dropdownFontColor": globalTokens.black,
  "--dropdown-hoverBackgroundOption": globalTokens.lightGrey,
  "--dropdown-hoverBackgroundColor": globalTokens.white,
  "--dropdown-scrollBarThumbColor": globalTokens.darkGrey,
  "--dropdown-scrollBarTrackColor": globalTokens.lightGrey,
  "--dropdown-focusColor": globalTokens.blue, //añadir al componente

  //FOOTER
  "--footer-backgroundColor": globalTokens.black,
  "--footer-fontColor": globalTokens.white,
  "--footer-lineColor": globalTokens.mediumBlue,

  //HEADER
  "--header-backgroundColor": globalTokens.white,
  "--header-underlinedColor": globalTokens.black,
  "--header-fontColor": globalTokens.black,
  "--header-backgroundColorMenu": globalTokens.white,
  "--header-fontColorMenu": globalTokens.black,
  "--header-hamburguerColor": globalTokens.black,
  "--header-hoverHamburguerColor": globalTokens.mediumGreyBlack,
  "--header-overlayColor": globalTokens.softBlack,
  "--header-focusColor": globalTokens.blue,

  //HEADING
  "--heading-fontColor": globalTokens.inherit,

  //INPUT TEXT
  "--inputText-selectedOptionBackgroundColor": globalTokens.lightGrey,
  "--inputText-placeholderColor": globalTokens.lightGrey,
  "--inputText-error": globalTokens.darkRed,
  "--inputText-focusColor": globalTokens.blue,
  "--inputText-fontColor": globalTokens.black,
  "--inputText-scrollBarThumbColor": globalTokens.darkGrey,
  "--inputText-scrollBarTrackColor": globalTokens.lightGrey,
  "--inputText-disabledFontColor": globalTokens.lighterBlack,

  //LINK
  "--link-fontColor": globalTokens.blue,
  "--link-visitedFontColor": globalTokens.violet,
  "--link-disabledColor": globalTokens.lightGrey,
  "--link-hoverFontColor": globalTokens.darkBlue,
  "--link-underlinedBackgroundColor": globalTokens.blue,
  "--link-disabledUnderlinedBackgroundColor": globalTokens.lightGrey,
  "--link-visitedUnderlinedBackgroundColor": globalTokens.violet,

  //PAGINATOR
  "--paginator-paginatorBackgroundColor": globalTokens.darkWhite,
  "--paginator-paginatorFontColor": globalTokens.black,

  //PROGRESSBAR
  "--progressBar-trackLine": globalTokens.purple,
  "--progressBar-totalLine": globalTokens.softGrey,
  "--progressBar-overlayColor": globalTokens.black,
  "--progressBar-fontColor": globalTokens.inherit,

  //RADIO
  "--radio-color": globalTokens.black,
  "--radio-disabledColor": globalTokens.lighterBlack,
  "--radio-fontColor": globalTokens.inherit,
  "--radio-disabledFontColor": globalTokens.lighterBlack,
  "--radio-focusColor": globalTokens.blue,

  //SELECT
  "--select-selectedOptionBackgroundColor": globalTokens.lightGrey,
  "--select-color": globalTokens.black,
  "--select-error": globalTokens.darkRed,
  "--select-required": globalTokens.darkRed,
  "--select-focusColor": globalTokens.blue,
  "--select-disabledColor": globalTokens.lighterBlack,
  "--select-scrollBarThumbColor": globalTokens.darkGrey,
  "--select-scrollBarTrackColor": globalTokens.lightGrey,
  "--select-hoverOptionBackgroundColor": globalTokens.lightWhite,

  //SIDENAV
  "--sidenav-backgroundColor": globalTokens.lighterGrey,
  "--sidenav-arrowContainerColor": globalTokens.lightGrey,
  "--sidenav-arrowColor": globalTokens.black,

  //SLIDER
  "--slider-thumbBackgroundColor": globalTokens.mediumBlue,
  "--slider-dotsBackgroundColor": globalTokens.mediumBlue,
  "--slider-trackLine": globalTokens.mediumBlue,
  "--slider-totalLine": globalTokens.softBlue,
  "--slider-disabledThumbBackgroundColor": globalTokens.softBlue,
  "--slider-disabledDotsBackgroundColor": globalTokens.softBlue,
  "--slider-disabledTrackLine": globalTokens.softBlue,
  "--slider-disabledtotalLine": globalTokens.softBlue,
  "--slider-focusColor": globalTokens.blue,

  //SPINNER
  "--spinner-trackCircleColor": globalTokens.purple,
  "--spinner-totalCircleColor": globalTokens.white,
  "--spinner-overlayColor": globalTokens.black,
  "--spinner-fontColor": globalTokens.inherit,

  //SWITCH
  "--switch-checkedTrackBackgroundColor": globalTokens.purple,
  "--switch-checkedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedTrackBackgroundColor": globalTokens.lightGrey,
  "--switch-requiredColor": globalTokens.darkRed,
  "--switch-focusColor": globalTokens.blue,
  "--switch-fontColor": globalTokens.black,
  "--switch-disabledCheckedTrackBackgroundColor": globalTokens.lighterPurple,
  "--switch-disabledUncheckedTrackBackgroundColor": globalTokens.lightWhite,
  "--switch-disabledFontColor": globalTokens.lighterBlack,

  //TABLE
  "--table-headerBackgroundColor": globalTokens.purple,
  "--table-headerFontColor": globalTokens.white,
  "--table-separatorColor": globalTokens.lightGrey,
  "--table-bodyBackgroundColor": globalTokens.white,
  "--table-bodyFontColor": globalTokens.black,
  "--table-scrollBarThumbColor": globalTokens.darkGrey,
  "--table-scrollBarTrackColor": globalTokens.lightGrey,

  //TAG
  "--tag-backgroundColor": globalTokens.white,

  //TEXTAREA
  "--textarea-fontColor": globalTokens.black,
  "--textarea-placeholderColor": globalTokens.lightGrey,
  "--textarea-disabledFontColor": globalTokens.lighterBlack,
  "--textarea-error": globalTokens.darkRed,
  "--textarea-scrollBarThumbColor": globalTokens.darkGrey,
  "--textarea-scrollBarTrackColor": globalTokens.lightGrey,

  //TOGGLE GROUP
  "--toggle-unselectedBackgroundColor": globalTokens.lightGrey,
  "--toggle-unselectedBackgroundHoverColor": globalTokens.darkWhite,
  "--toggle-unselectedFontColor": globalTokens.black,
  "--toggle-unselectedHoverFontColor": globalTokens.black,
  "--toggle-selectedBackgroundColor": globalTokens.purple,
  "--toggle-selectedHoverBackgroundColor": globalTokens.black,
  "--toggle-selectedFontColor": globalTokens.white,
  "--toggle-selectedHoverFontColor": globalTokens.white,
  "--toggle-disabledSelectedBackgroundColor": globalTokens.lighterPurple,
  "--toggle-disabledSelectedFontColor": globalTokens.white,
  "--toggle-disabledUnselectedBackgroundColor": globalTokens.lightWhite,
  "--toggle-disabledUnselectedFontColor": globalTokens.lighterBlack,

  //UPLOAD
  "--upload-fontColor": globalTokens.darkGrey,
  "--upload-shadowColor": globalTokens.lightWhite,
  "--upload-backgroundDragColor": globalTokens.lightWhite,
  "--upload-accentColor": globalTokens.lightGrey,
  "--upload-fileHoverColor": globalTokens.darkWhite,
  "--upload-scrollBarThumbColor": globalTokens.darkGrey,
  "--upload-scrollBarTrackColor": globalTokens.lightGrey,
  "--upload-errorColor": globalTokens.darkRed,

  //WIZARD
  "--wizard-focusColor": globalTokens.blue,
  "--wizard-disabledBackgroundColor": globalTokens.lightGrey,
  "--wizard-disabledFontColor": globalTokens.darkGrey,
  "--wizard-stepContainerFontSize": globalTokens.type_scale_03,
  "--wizard-stepContainerFontFamily": globalTokens.type_sans,
  "--wizard-stepContainerFontStyle": globalTokens.type_normal,
  "--wizard-stepContainerFontWeight": globalTokens.type_regular,
  "--wizard-stepContainerLetterSpacing": globalTokens.type_spacing_wide_02,
  "--wizard-stepContainerFontColor": globalTokens.black,
  "--wizard-stepContainerSelectedFontColor": globalTokens.white,
  "--wizard-stepContainerSelectedBackgroundColor": globalTokens.purple,
  "--wizard-stepContainerBackgroundColor": globalTokens.white,
  "--wizard-stepContainerIconSize": "19px",
  "--wizard-labelFontSize": globalTokens.type_scale_03,
  "--wizard-labelFontFamily": globalTokens.type_sans,
  "--wizard-labelFontStyle": globalTokens.type_normal,
  "--wizard-labelFontWeight": globalTokens.type_regular,
  "--wizard-labelLetterSpacing": globalTokens.type_spacing_normal,
  "--wizard-labelFontTextTransform": "none",
  "--wizard-labelTextAlign": "left",
  "--wizard-labelFontColor": globalTokens.darkGrey,
  "--wizard-labelActiveFontColor": globalTokens.black,
  "--wizard-descriptionFontSize": globalTokens.type_scale_01,
  "--wizard-descriptionFontFamily": globalTokens.type_sans,
  "--wizard-descriptionFontStyle": globalTokens.type_normal,
  "--wizard-descriptionFontWeight": globalTokens.type_regular,
  "--wizard-descriptionLetterSpacing": globalTokens.type_spacing_wide_01,
  "--wizard-descriptionFontTextTransform": "none",
  "--wizard-descriptionFontColor": globalTokens.darkGrey,
  "--wizard-descriptionActiveFontColor": globalTokens.black,
  "--wizard-descriptionTextAlign": "left",
  "--wizard-circleBorderThickness": "2px",
  "--wizard-circleBorderStyle": "solid",
  "--wizard-circleBorderRadius": "45px",
  "--wizard-circleBorderColor": globalTokens.black,
  "--wizard-circleSelectedWidth": "32px",
  "--wizard-circleSelectedHeight": "32px",
  "--wizard-circleSelectedBorderThickness": "2px",
  "--wizard-circleSelectedBorderStyle": "solid",
  "--wizard-circleSelectedBorderRadius": "45px",
  "--wizard-circleSelectedBorderColor": globalTokens.purple,
  "--wizard-circleDisabledWidth": "32px",
  "--wizard-circleDisabledHeight": "32px",
  "--wizard-circleDisabledBorderThickness": "2px",
  "--wizard-circleDisabledBorderStyle": "solid",
  "--wizard-circleDisabledBorderRadius": "45px",
  "--wizard-circleDisabledBorderColor": globalTokens.lightGrey,
  "--wizard-circleWidth": "32px",
  "--wizard-circleHeight": "32px",
  "--wizard-separatorBorderThickness": "1px",
  "--wizard-separatorBorderStyle": "solid",
  "--wizard-separatorColor": globalTokens.lightGrey,
};

export const componentIcons = {
  footer: {
    logo: "assets/dxc_logo_wht.png",
  },
  header: {
    logo: "assets/dxc_logo_blk_rgb.svg",
    logoResponsive: "assets/dxc_logo_blk_rgb.svg",
  },
};
