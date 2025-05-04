import { Color, Oklch } from "culori";
import { tintColor } from "./tinters";
import { baseThemes, BaseTheme, BaseThemeConfig } from "./base-themes";

export function tintGrays(
  theme: BaseTheme,
  bgTint: (oklchColor: Oklch) => Color
) {
  const t = JSON.parse(JSON.stringify(baseThemes[theme])) as BaseThemeConfig;

  // @ts-ignore
  t.editorHoverWidget.border = tintColor(t.editorHoverWidget.border, bgTint);
  t.disabledForeground = tintColor(t.disabledForeground, bgTint);

  t.canvasDefaultTransparent = tintColor(t.canvasDefaultTransparent, bgTint);

  t.diffBlob.addition.numText = tintColor(t.diffBlob.addition.numText, bgTint);
  t.diffBlob.addition.fg = tintColor(t.diffBlob.addition.fg, bgTint);
  t.diffBlob.deletion.numText = tintColor(t.diffBlob.deletion.numText, bgTint);
  t.diffBlob.deletion.fg = tintColor(t.diffBlob.deletion.fg, bgTint);
  t.diffBlob.expander.icon = tintColor(t.diffBlob.expander.icon, bgTint);

  t.diffstat.deletionBorder = tintColor(t.diffstat.deletionBorder, bgTint);
  t.diffstat.additionBorder = tintColor(t.diffstat.additionBorder, bgTint);

  t.prettylights.syntax.comment = tintColor(
    t.prettylights.syntax.comment,
    bgTint
  );
  t.prettylights.syntax.storageModifierImport = tintColor(
    t.prettylights.syntax.storageModifierImport,
    bgTint
  );
  t.prettylights.syntax.invalidIllegalText = tintColor(
    t.prettylights.syntax.invalidIllegalText,
    bgTint
  );
  t.prettylights.syntax.carriageReturnText = tintColor(
    t.prettylights.syntax.carriageReturnText,
    bgTint
  );
  t.prettylights.syntax.markupItalic = tintColor(
    t.prettylights.syntax.markupItalic,
    bgTint
  );
  t.prettylights.syntax.markupBold = tintColor(
    t.prettylights.syntax.markupBold,
    bgTint
  );
  t.prettylights.syntax.markupIgnoredText = tintColor(
    t.prettylights.syntax.markupIgnoredText,
    bgTint
  );
  t.prettylights.syntax.brackethighlighterAngle = tintColor(
    t.prettylights.syntax.brackethighlighterAngle,
    bgTint
  );
  t.prettylights.syntax.sublimelinterGutterMark = tintColor(
    t.prettylights.syntax.sublimelinterGutterMark,
    bgTint
  );

  t.codemirror.text = tintColor(t.codemirror.text, bgTint);
  t.codemirror.bg = tintColor(t.codemirror.bg, bgTint);
  t.codemirror.guttersBg = tintColor(t.codemirror.guttersBg, bgTint);
  t.codemirror.guttermarkerText = tintColor(
    t.codemirror.guttermarkerText,
    bgTint
  );
  t.codemirror.guttermarkerSubtleText = tintColor(
    t.codemirror.guttermarkerSubtleText,
    bgTint
  );
  t.codemirror.linenumberText = tintColor(t.codemirror.linenumberText, bgTint);
  t.codemirror.cursor = tintColor(t.codemirror.cursor, bgTint);
  t.codemirror.activelineBg = tintColor(t.codemirror.activelineBg, bgTint);
  t.codemirror.matchingbracketText = tintColor(
    t.codemirror.matchingbracketText,
    bgTint
  );

  t.checks.bg = tintColor(t.checks.bg, bgTint);
  t.checks.textPrimary = tintColor(t.checks.textPrimary, bgTint);
  t.checks.textSecondary = tintColor(t.checks.textSecondary, bgTint);
  t.checks.btnIcon = tintColor(t.checks.btnIcon, bgTint);
  t.checks.btnHoverIcon = tintColor(t.checks.btnHoverIcon, bgTint);
  t.checks.btnHoverBg = tintColor(t.checks.btnHoverBg, bgTint);
  t.checks.inputText = tintColor(t.checks.inputText, bgTint);
  t.checks.inputPlaceholderText = tintColor(
    t.checks.inputPlaceholderText,
    bgTint
  );
  t.checks.inputFocusText = tintColor(t.checks.inputFocusText, bgTint);
  t.checks.inputBg = tintColor(t.checks.inputBg, bgTint);
  t.checks.donutNeutral = tintColor(t.checks.donutNeutral, bgTint);
  t.checks.dropdownText = tintColor(t.checks.dropdownText, bgTint);
  t.checks.dropdownBg = tintColor(t.checks.dropdownBg, bgTint);
  t.checks.dropdownBorder = tintColor(t.checks.dropdownBorder, bgTint);
  t.checks.dropdownShadow = tintColor(t.checks.dropdownShadow, bgTint);
  t.checks.dropdownHoverText = tintColor(t.checks.dropdownHoverText, bgTint);
  t.checks.dropdownHoverBg = tintColor(t.checks.dropdownHoverBg, bgTint);
  t.checks.dropdownBtnHoverText = tintColor(
    t.checks.dropdownBtnHoverText,
    bgTint
  );
  t.checks.dropdownBtnHoverBg = tintColor(t.checks.dropdownBtnHoverBg, bgTint);
  t.checks.scrollbarThumbBg = tintColor(t.checks.scrollbarThumbBg, bgTint);
  t.checks.headerLabelText = tintColor(t.checks.headerLabelText, bgTint);
  t.checks.headerLabelOpenText = tintColor(
    t.checks.headerLabelOpenText,
    bgTint
  );
  t.checks.headerBorder = tintColor(t.checks.headerBorder, bgTint);
  t.checks.headerIcon = tintColor(t.checks.headerIcon, bgTint);
  t.checks.lineText = tintColor(t.checks.lineText, bgTint);
  t.checks.lineNumText = tintColor(t.checks.lineNumText, bgTint);
  t.checks.lineTimestampText = tintColor(t.checks.lineTimestampText, bgTint);
  t.checks.lineHoverBg = tintColor(t.checks.lineHoverBg, bgTint);
  t.checks.lineDtFmText = tintColor(t.checks.lineDtFmText, bgTint);
  t.checks.gateText = tintColor(t.checks.gateText, bgTint);
  t.checks.stepHeaderOpenBg = tintColor(t.checks.stepHeaderOpenBg, bgTint);
  t.checks.loglineText = tintColor(t.checks.loglineText, bgTint);
  t.checks.loglineNumText = tintColor(t.checks.loglineNumText, bgTint);
  t.checks.loglineErrorText = tintColor(t.checks.loglineErrorText, bgTint);
  t.checks.loglineErrorNumText = tintColor(
    t.checks.loglineErrorNumText,
    bgTint
  );
  t.checks.loglineWarningText = tintColor(t.checks.loglineWarningText, bgTint);

  t.checks.ansi.black = tintColor(t.checks.ansi.black, bgTint);
  t.checks.ansi.blackBright = tintColor(t.checks.ansi.blackBright, bgTint);
  t.checks.ansi.white = tintColor(t.checks.ansi.white, bgTint);
  t.checks.ansi.whiteBright = tintColor(t.checks.ansi.whiteBright, bgTint);
  t.checks.ansi.gray = tintColor(t.checks.ansi.gray, bgTint);

  t.project = tintColor(t.project, bgTint);

  t.mktg.btn.bg = tintColor(t.mktg.btn.bg, bgTint);

  t.avatar.bg = tintColor(t.avatar.bg, bgTint);
  t.avatar.border = tintColor(t.avatar.border, bgTint);
  t.avatar.stackFade = tintColor(t.avatar.stackFade, bgTint);
  t.avatar.stackFadeMore = tintColor(t.avatar.stackFadeMore, bgTint);
  // t.avatar.childShadow = tintColor(t.avatar.childShadow, bgTint);

  // TODO: make CSS
  // t.overlay.shadow = tintColor(t.overlay.shadow, bgTint);

  t.header = tintColor(t.header, bgTint);
  t.headerSearch = tintColor(t.headerSearch, bgTint);

  t.sidenav.selectedBg = tintColor(t.sidenav.selectedBg, bgTint);

  t.menu.bgActive = tintColor(t.menu.bgActive, bgTint);

  t.timeline.badgeBg = tintColor(t.timeline.badgeBg, bgTint);

  t.ansi.black = tintColor(t.ansi.black, bgTint);
  t.ansi.blackBright = tintColor(t.ansi.blackBright, bgTint);
  t.ansi.white = tintColor(t.ansi.white, bgTint);
  t.ansi.whiteBright = tintColor(t.ansi.whiteBright, bgTint);
  t.ansi.gray = tintColor(t.ansi.gray, bgTint);

  t.btn.text = tintColor(t.btn.text, bgTint);
  t.btn.bg = tintColor(t.btn.bg, bgTint);
  t.btn.border = tintColor(t.btn.border, bgTint);
  t.btn.hoverBg = tintColor(t.btn.hoverBg, bgTint);
  t.btn.hoverBorder = tintColor(t.btn.hoverBorder, bgTint);
  t.btn.activeBg = tintColor(t.btn.activeBg, bgTint);
  t.btn.activeBorder = tintColor(t.btn.activeBorder, bgTint);
  t.btn.focusBorder = tintColor(t.btn.focusBorder, bgTint);
  t.btn.selectedBg = tintColor(t.btn.selectedBg, bgTint);
  t.btn.focusBg = tintColor(t.btn.focusBg, bgTint);
  t.btn.focusBorder = tintColor(t.btn.focusBorder, bgTint);
  t.btn.counterBg = tintColor(t.btn.counterBg, bgTint);

  t.btn.primary.border = tintColor(t.btn.primary.border, bgTint);
  t.btn.primary.hoverBorder = tintColor(t.btn.primary.hoverBorder, bgTint);
  t.btn.primary.disabledText = tintColor(t.btn.primary.disabledText, bgTint);
  t.btn.primary.disabledBorder = tintColor(
    t.btn.primary.disabledBorder,
    bgTint
  );
  t.btn.primary.focusBorder = tintColor(t.btn.primary.focusBorder, bgTint);
  t.btn.primary.focusBg = tintColor(t.btn.primary.focusBg, bgTint);

  t.btn.outline.hoverBg = tintColor(t.btn.outline.hoverBg, bgTint);
  t.btn.outline.hoverBorder = tintColor(t.btn.outline.hoverBorder, bgTint);
  t.btn.outline.hoverCounterBg = tintColor(
    t.btn.outline.hoverCounterBg,
    bgTint
  );
  t.btn.outline.selectedBorder = tintColor(
    t.btn.outline.selectedBorder,
    bgTint
  );
  t.btn.outline.focusBorder = tintColor(t.btn.outline.focusBorder, bgTint);

  t.btn.danger.hoverCounterBg = tintColor(t.btn.danger.hoverCounterBg, bgTint);
  t.btn.danger.hoverText = tintColor(t.btn.danger.hoverText, bgTint);

  t.underlinenav.borderHover = tintColor(t.underlinenav.borderHover, bgTint);

  t.actionListItem.default = tintColor(t.actionListItem.default, bgTint);
  t.actionListItem.inlineDivider = tintColor(
    t.actionListItem.inlineDivider,
    bgTint
  );

  t.segmentedControl = tintColor(t.segmentedControl, bgTint);
  t.switchTrack.bg = tintColor(t.switchTrack.bg, bgTint);
  t.switchTrack.border = tintColor(t.switchTrack.border, bgTint);
  t.switchKnob.checked.disabledBg = tintColor(
    t.switchKnob.checked.disabledBg,
    bgTint
  );

  // Using BG tint because FG is used for tinting colored text
  t.fg = tintColor(t.fg, bgTint);

  t.canvas = tintColor(t.canvas, bgTint);
  t.border = tintColor(t.border, bgTint);
  t.neutral = tintColor(t.neutral, bgTint);

  t.primer.fg.disabled = tintColor(t.primer.fg.disabled, bgTint);

  t.primer.border.contrast = tintColor(t.primer.border.contrast, bgTint);

  t.scale.gray = tintColor(t.scale.gray, bgTint);

  return t;
}
