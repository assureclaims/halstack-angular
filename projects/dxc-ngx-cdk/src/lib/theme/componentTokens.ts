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
  type_spacing_normal: "0em",
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
  "--tabs-fontFamily": globalTokens.type_sans,
  "--tabs-fontSize": globalTokens.type_scale_03,
  "--tabs-fontStyle": globalTokens.type_normal,
  "--tabs-fontWeight": globalTokens.type_semibold,
  "--tabs-fontTextTransform": "none",
  "--tabs-selectedBackgroundColor": globalTokens.white,
  "--tabs-selectedFontColor": globalTokens.purple,
  "--tabs-selectedIconColor": globalTokens.purple,
  "--tabs-selectedUnderlineColor": globalTokens.purple,
  "--tabs-selectedUnderlineThickness": "",
  "--tabs-unselectedBackgroundColor": globalTokens.white,
  "--tabs-unselectedFontColor": globalTokens.darkGrey,
  "--tabs-unselectedIconColor": globalTokens.darkGrey,
  "--tabs-disabledFontColor": globalTokens.mediumGrey,
  "--tabs-disabledIconColor": globalTokens.mediumGrey,
  "--tabs-disabledFontStyle": globalTokens.type_normal,
  "--tabs-hoverBackgroundColor": globalTokens.lightPurple,
  "--tabs-pressedBackgroundColor": globalTokens.mediumPurple,
  "--tabs-pressedFontWeight": globalTokens.type_semibold,
  "--tabs-dividerColor": globalTokens.mediumGrey,
  "--tabs-dividerThickness": "1px",
  "--tabs-focusOutline": globalTokens.purple,
  "--tabs-scrollButtonsWidth": "48px",
  "--tabs-badgeBackgroundColor": globalTokens.darkRed,
  "--tabs-badgeFontFamily": globalTokens.type_sans,
  "--tabs-badgeFontSize": "10px",
  "--tabs-badgeFontStyle": globalTokens.type_normal,
  "--tabs-badgeFontWeight": "500",
  "--tabs-badgeFontColor": globalTokens.white,
  "--tabs-badgeLetterSpacing": globalTokens.type_spacing_wide_02,
  "--tabs-badgeWidth": "16px",
  "--tabs-badgeHeight": "16px",
  "--tabs-badgeRadius": "10px",
  "--tabs-badgeWidthWithNotificationNumber": "23px",
  "--tabs-badgeHeightWithNotificationNumber": "17px",
  "--tabs-badgeRadiusWithNotificationNumber": "10px",

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
  "--progressBar-trackLineColor": globalTokens.purple,
  "--progressBar-totalLineColor": globalTokens.softGrey,
  "--progressBar-overlayColor": globalTokens.black,
  "--progressBar-labelFontFamily": globalTokens.type_sans,
  "--progressBar-labelFontSize": globalTokens.type_scale_01,
  "--progressBar-labelFontStyle": globalTokens.type_normal,
  "--progressBar-labelFontWeight": globalTokens.type_regular,
  "--progressBar-labelFontColor": globalTokens.black,
  "--progressBar-labelFontTextTransform": globalTokens.type_uppercase,
  "--progressBar-valueFontFamily": globalTokens.type_sans,
  "--progressBar-valueFontSize": globalTokens.type_scale_01,
  "--progressBar-valueFontStyle": globalTokens.type_normal,
  "--progressBar-valueFontWeight": globalTokens.type_regular,
  "--progressBar-valueFontColor": globalTokens.black,
  "--progressBar-valueFontTextTransform": globalTokens.type_uppercase,
  "--progressBar-thickness": "9px",
  "--progressBar-borderRadius": "5px",
  "--progressBar-overlayOpacity": "0.8",

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
  "--sidenav-customContentFontFamily": globalTokens.type_sans,
  "--sidenav-customContentFontSize": "16px",
  "--sidenav-customContentFontStyle": globalTokens.type_normal,
  "--sidenav-customContentFontWeight": globalTokens.type_regular,
  "--sidenav-customContentFontColor": globalTokens.black,
  "--sidenav-titleFontFamily": globalTokens.type_sans,
  "--sidenav-titleFontSize": globalTokens.type_scale_05,
  "--sidenav-titleFontStyle": globalTokens.type_normal,
  "--sidenav-titleFontWeight": globalTokens.type_regular,
  "--sidenav-titleFontColor": "#000000de",
  "--sidenav-titleFontTextTransform": globalTokens.type_no_line,
  "--sidenav-titleFontLetterSpacing": globalTokens.type_spacing_normal,
  "--sidenav-subtitleFontFamily": globalTokens.type_sans,
  "--sidenav-subtitleFontSize": globalTokens.type_scale_01,
  "--sidenav-subtitleFontStyle": globalTokens.type_normal,
  "--sidenav-subtitleFontWeight": globalTokens.type_regular,
  "--sidenav-subtitleFontColor": "#00000099",
  "--sidenav-subtitleFontTextTransform": globalTokens.type_uppercase,
  "--sidenav-subtitleFontLetterSpacing": globalTokens.type_spacing_wide_03,
  "--sidenav-linkFontFamily": globalTokens.type_sans,
  "--sidenav-linkFontSize": globalTokens.type_scale_02,
  "--sidenav-linkFontStyle": globalTokens.type_normal,
  "--sidenav-linkFontWeight": globalTokens.type_regular,
  "--sidenav-linkFontColor": "#00000099",
  "--sidenav-linkFontTextTransform": globalTokens.type_no_line,
  "--sidenav-linkFontLetterSpacing": globalTokens.type_spacing_wide_01,
  "--sidenav-linkTextDecoration": "none",
  "--sidenav-linkMarginTop": "6px",
  "--sidenav-linkMarginRight": "18px",
  "--sidenav-linkMarginBottom": "6px",
  "--sidenav-linkMarginLeft": "18px",
  "--sidenav-scrollBarThumbColor": "#66666626",
  "--sidenav-scrollBarTrackColor": globalTokens.transparent,

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
  "--spinner-overlayBackgroundColor": globalTokens.black,
  "--spinner-labelFontFamily": globalTokens.type_sans,
  "--spinner-labelFontSize": globalTokens.type_scale_01,
  "--spinner-labelFontStyle": globalTokens.type_normal,
  "--spinner-labelFontWeight": globalTokens.type_regular,
  "--spinner-labelFontColor": globalTokens.inherit,
  "--spinner-labelFontTextTransform": globalTokens.type_uppercase,
  "--spinner-labelLetterSpacing": globalTokens.type_spacing_normal,
  "--spinner-labelTextAlign": "center",
  "--spinner-progressValueFontFamily": globalTokens.type_sans,
  "--spinner-progressValueFontSize": globalTokens.type_scale_01,
  "--spinner-progressValueFontStyle": globalTokens.type_normal,
  "--spinner-progressValueFontWeight": globalTokens.type_regular,
  "--spinner-progressValueFontColor": globalTokens.inherit,
  "--spinner-progressValueLetterSpacing": globalTokens.type_spacing_normal,
  "--spinner-progressValueTextAlign": "center",
  "--spinner-overlayOpacity": "0.8",
  "--spinner-overlayLabelFontFamily": globalTokens.type_sans,
  "--spinner-overlayLabelFontSize": globalTokens.type_scale_01,
  "--spinner-overlayLabelFontStyle": globalTokens.type_normal,
  "--spinner-overlayLabelFontWeight": globalTokens.type_regular,
  "--spinner-overlayLabelFontColor": globalTokens.white,
  "--spinner-overlayLabelFontTextTransform": globalTokens.type_uppercase,
  "--spinner-overlayLabelLetterSpacing": globalTokens.type_spacing_normal,
  "--spinner-overlayLabelTextAlign": "center",
  "--spinner-overlayProgressValueFontFamily": globalTokens.type_sans,
  "--spinner-overlayProgressValueFontSize": globalTokens.type_scale_01,
  "--spinner-overlayProgressValueFontStyle": globalTokens.type_normal,
  "--spinner-overlayProgressValueFontWeight": globalTokens.type_regular,
  "--spinner-overlayProgressValueFontColor": globalTokens.white,
  "--spinner-overlayProgressValueLetterSpacing":
    globalTokens.type_spacing_normal,
  "--spinner-overlayProgressValueTextAlign": "center",

  //SWITCH
  "--switch-requiredColor": globalTokens.darkRed,
  "--switch-checkedTrackBackgroundColor": globalTokens.purple,
  "--switch-checkedTrackBackgroundColorOnDark": globalTokens.purple,
  "--switch-checkedThumbBackgroundColor": globalTokens.white,
  "--switch-checkedThumbBackgroundColorOnDark": globalTokens.white,
  "--switch-uncheckedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedThumbBackgroundColorOnDark": globalTokens.white,
  "--switch-uncheckedTrackBackgroundColor": globalTokens.lightGrey,
  "--switch-uncheckedTrackBackgroundColorOnDark": globalTokens.lightGrey,
  "--switch-disabledCheckedTrackBackgroundColor": globalTokens.lighterPurple,
  "--switch-disabledCheckedTrackBackgroundColorOnDark": "#1c0b24",
  "--switch-disabledCheckedThumbBackgroundColor": globalTokens.white,
  "--switch-disabledCheckedThumbBackgroundColorOnDark": globalTokens.white,
  "--switch-disabledUncheckedTrackBackgroundColor": globalTokens.lightWhite,
  "--switch-disabledUncheckedTrackBackgroundColorOnDark": "#363636",
  "--switch-disabledUncheckedThumbBackgroundColor": globalTokens.white,
  "--switch-disabledUncheckedThumbBackgroundColorOnDark": globalTokens.white,
  "--switch-disabledLabelFontColor": globalTokens.lighterBlack,
  "--switch-disabledLabelFontColorOnDark": "#575757",
  "--switch-disabledLabelFontStyle": globalTokens.type_normal,
  "--switch-labelFontFamily": globalTokens.type_sans,
  "--switch-labelFontSize": "16px",
  "--switch-labelFontStyle": globalTokens.type_normal,
  "--switch-labelFontWeight": globalTokens.type_regular,
  "--switch-labelFontColor": globalTokens.black,
  "--switch-labelFontColorOnDark": globalTokens.white,
  "--switch-thumbFocusColor": globalTokens.blue,
  "--switch-thumbFocusColorOnDark": "#1489FB",
  "--switch-thumbHeight": "24px",
  "--switch-thumbWidth": "24px",
  "--switch-thumbShift": "-2px",
  "--switch-trackHeight": "12px",
  "--switch-trackWidth": "60px",
  "--switch-spaceBetweenLabelSwitch": "0px",

  //TABLE
  "--table-rowSeparatorThickness": "1px",
  "--table-rowSeparatorStyle": "solid",
  "--table-rowSeparatorColor": globalTokens.lightGrey,
  "--table-dataBackgroundColor": globalTokens.white,
  "--table-dataFontFamily": globalTokens.type_sans,
  "--table-dataFontSize": globalTokens.type_scale_root,
  "--table-dataFontStyle": globalTokens.type_normal,
  "--table-dataFontWeight": globalTokens.type_regular,
  "--table-dataFontColor": globalTokens.black,
  "--table-dataFontTextTransform": "none",
  "--table-dataPaddingTop": "14px",
  "--table-dataPaddingBottom": "12px",
  "--table-dataPaddingRight": "20px",
  "--table-dataPaddingLeft": "40px",
  "--table-dataTextAlign": "left",
  "--table-dataTextLineHeight": "normal",
  "--table-headerBackgroundColor": globalTokens.purple,
  "--table-headerBorderRadius": "4px",
  "--table-headerFontFamily": globalTokens.type_sans,
  "--table-headerFontSize": globalTokens.type_scale_02,
  "--table-headerFontStyle": globalTokens.type_normal,
  "--table-headerFontWeight": globalTokens.type_regular,
  "--table-headerFontColor": globalTokens.white,
  "--table-headerFontTextTransform": "none",
  "--table-headerPaddingTop": "16px",
  "--table-headerPaddingBottom": "16px",
  "--table-headerPaddingRight": "20px",
  "--table-headerPaddingLeft": "40px",
  "--table-headerTextAlign": "left",
  "--table-headerTextLineHeight": "normal",
  "--table-scrollBarThumbColor": globalTokens.darkGrey,
  "--table-scrollBarTrackColor": globalTokens.lightGrey,
  "--table-sortIconColor": globalTokens.white,

  //TAG
  "--tag-iconColor": globalTokens.white,
  "--tag-fontStyle": globalTokens.type_normal,
  "--tag-fontTextTransform": globalTokens.type_uppercase,
  "--tag-height": "43px",
  "--tag-iconSectionWidth": "48px",
  "--tag-iconHeight": "24px",
  "--tag-iconWidth": "24px",

  //TEXTAREA
  "--textarea-fontColor": globalTokens.black,
  "--textarea-placeholderColor": globalTokens.lightGrey,
  "--textarea-disabledFontColor": globalTokens.lighterBlack,
  "--textarea-error": globalTokens.darkRed,
  "--textarea-scrollBarThumbColor": globalTokens.darkGrey,
  "--textarea-scrollBarTrackColor": globalTokens.lightGrey,

  //TOGGLE GROUP
  "--toggleGroup-unselectedBackgroundColor": globalTokens.lightGrey,
  "--toggleGroup-unselectedBackgroundHoverColor": globalTokens.darkWhite,
  "--toggleGroup-unselectedFontColor": globalTokens.black,
  "--toggleGroup-unselectedHoverFontColor": globalTokens.black,
  "--toggleGroup-selectedBackgroundColor": globalTokens.purple,
  "--toggleGroup-selectedBackgroundHoverColor": globalTokens.black,
  "--toggleGroup-selectedFontColor": globalTokens.white,
  "--toggleGroup-selectedHoverFontColor": globalTokens.white,
  "--toggleGroup-disabledSelectedBackgroundColor": globalTokens.lighterPurple,
  "--toggleGroup-disabledSelectedFontColor": globalTokens.white,
  "--toggleGroup-disabledUnselectedBackgroundColor": globalTokens.lightWhite,
  "--toggleGroup-disabledUnselectedFontColor": globalTokens.lighterBlack,
  "--toggleGroup-fontFamily": globalTokens.type_sans,
  "--toggleGroup-fontSize": globalTokens.type_scale_02,
  "--toggleGroup-fontStyle": globalTokens.type_normal,
  "--toggleGroup-fontWeight": globalTokens.type_regular,
  "--toggleGroup-fontTextTransform": globalTokens.type_uppercase,
  "--toggleGroup-fontLetterSpacing": globalTokens.type_spacing_wide_02,
  "--toggleGroup-focusColor": "#005FCC",
  "--toggleGroup-iconSize": "20px",
  "--toggleGroup-iconPaddingTop": "10px",
  "--toggleGroup-iconPaddingBottom": "10px",
  "--toggleGroup-iconPaddingRight": "12px",
  "--toggleGroup-iconPaddingLeft": "12px",
  "--toggleGroup-labelPaddingTop": "12px",
  "--toggleGroup-labelPaddingBottom": "12px",
  "--toggleGroup-labelPaddingLeft": "30px",
  "--toggleGroup-labelPaddingRight": "30px",

  //UPLOAD
  "--upload-shadowColor": globalTokens.lightWhite,
  "--upload-fileHoverColor": globalTokens.darkWhite,
  "--upload-scrollBarThumbColor": globalTokens.darkGrey,
  "--upload-scrollBarTrackColor": globalTokens.lightGrey,
  "--upload-errorColor": globalTokens.darkRed,
  "--upload-backgroundColor": globalTokens.white,
  "--upload-fontFamily": globalTokens.type_sans,
  "--upload-draggingAreaBackgroundColor": globalTokens.lightWhite,
  "--upload-dragAndDropIconColor": globalTokens.black,
  "--upload-dragAndDropIconHeight": "43.5px",
  "--upload-dragAndDropIconWidth": "43.5px",
  "--upload-dragAndDropTitleFontSize": globalTokens.type_scale_04,
  "--upload-dragAndDropTitleFontStyle": globalTokens.type_normal,
  "--upload-dragAndDropTitleFontWeight": globalTokens.type_bold,
  "--upload-dragAndDropTitleFontTextTransform": "none",
  "--upload-dragAndDropTitleFontColor": globalTokens.black,
  "--upload-dragAndDropDescriptionFontSize": globalTokens.type_scale_03,
  "--upload-dragAndDropDescriptionFontStyle": globalTokens.type_italic,
  "--upload-dragAndDropDescriptionFontWeight": globalTokens.type_normal,
  "--upload-dragAndDropTextDescriptionFontTextTransform": "none",
  "--upload-dragAndDropTextDescriptionFontColor": globalTokens.darkGrey,
  "--upload-dragAndDropDraggingStateIconColor": globalTokens.darkGrey,
  "--upload-dragAndDropDraggingStateIconHeight": "74.5px",
  "--upload-dragAndDropDraggingStateIconWidth": "74.5px",
  "--upload-dragAndDropDraggingStateFontSize": globalTokens.type_scale_03,
  "--upload-dragAndDropDraggingStateFontStyle": globalTokens.type_italic,
  "--upload-dragAndDropDraggingStateFontWeight": globalTokens.type_normal,
  "--upload-dragAndDropTextDraggingStateFontTextTransform": "none",
  "--upload-dragAndDropTextDraggingStateFontColor": globalTokens.darkGrey,
  "--upload-dragAndDropAreaIconColor": globalTokens.darkGrey,
  "--upload-dragAndDropAreaIconHeight": "24px",
  "--upload-dragAndDropAreaIconWidth": "24px",
  "--upload-dragAndDropAreaTextFontSize": globalTokens.type_scale_01,
  "--upload-dragAndDropAreaTextFontStyle": globalTokens.type_italic,
  "--upload-dragAndDropAreaTextFontWeight": globalTokens.type_regular,
  "--upload-dragAndDropAreaTextFontTextTransform": "none",
  "--upload-dragAndDropAreaTextFontColor": globalTokens.darkGrey,
  "--upload-fileDeleteIconColor": globalTokens.black,
  "--upload-fileDeleteIconHeight": "30px",
  "--upload-fileDeleteIconWidth": "30px",
  "--upload-fileUnderlineColor": globalTokens.lightGrey,
  "--upload-fileUnderlineThickness": "1px",
  "--upload-fileNameFontSize": globalTokens.type_scale_03,
  "--upload-fileNameFontStyle": globalTokens.type_normal,
  "--upload-fileNameFontWeight": globalTokens.type_regular,
  "--upload-fileNameFontTextTransform": "none",
  "--upload-fileNameFontColor": globalTokens.black,
  "--upload-fileTypeFontSize": globalTokens.type_scale_01,
  "--upload-fileTypeFontStyle": globalTokens.type_normal,
  "--upload-fileTypeFontWeight": globalTokens.type_regular,
  "--upload-fileTypeFontTextTransform": globalTokens.type_uppercase,
  "--upload-fileTypeFontColor": globalTokens.darkGrey,
  "--upload-fileUploadedIconColor": globalTokens.lightGrey,
  "--upload-fileUploadedIconHeight": "24px",
  "--upload-fileUploadedIconWidth": "24px",
  "--upload-filesUploadedTitleFontSize": globalTokens.type_scale_04,
  "--upload-filesUploadedTitleFontStyle": globalTokens.type_normal,
  "--upload-filesUploadedTitleFontWeight": globalTokens.type_regular,
  "--upload-filesUploadedTitleFontTextTransform": "none",
  "--upload-filesUploadedTitleFontColor": globalTokens.black,
  "--upload-filesUploadedSubtitleFontSize": globalTokens.type_scale_01,
  "--upload-filesUploadedSubtitleFontStyle": globalTokens.type_normal,
  "--upload-filesUploadedSubtitleFontWeight": globalTokens.type_regular,
  "--upload-filesUploadedSubtitleFontTextTransform": "none",
  "--upload-filesUploadedSubtitleFontColor": globalTokens.darkGrey,
  "--upload-filesUploadedNumberFontWeight": globalTokens.type_bold,

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
