import { BaseTheme } from "./base-themes";

const colors = [
  "red",
  "orange",
  "green",
  "blue",
  "purple",
  //
  "brown",
  "vampire",
  "muted",
] as const;
export type SupportedColor = (typeof colors)[number];

export const colorHueMap = {
  red: 0,
  orange: 80,
  green: 150,
  blue: 240,
  purple: 300,
  //
  brown: 10,
  vampire: 290,
  muted: 260,
} as const satisfies Record<SupportedColor, number>;

export const colorNumberMap = {
  red: 1,
  orange: 2,
  green: 3,
  blue: 4,
  purple: 5,
  //
  brown: undefined,
  vampire: undefined,
  muted: undefined,
} as const satisfies Record<SupportedColor, number | undefined>;

export const colorEmojiMap = {
  red: "🔴",
  orange: "🟠",
  green: "🟢",
  blue: "🔵",
  purple: "🟣",
  //
  brown: "🟤",
  vampire: "🧛",
  muted: "🩶",
} as const satisfies Record<SupportedColor, string>;

export const baseThemeIdToNameMap = {
  dark_dimmed: "Dark Dimmed",
  light: "Light",
  // light_high_contrast: "Light High Contrast",
  // light_colorblind: "Light Colorblind",
  dark: "Dark",
  // dark_high_contrast: "Dark High Contrast",
  // dark_colorblind: "Dark Colorblind",
} as const satisfies Record<BaseTheme, string>;

export function getThemeName(color: SupportedColor, baseTheme: BaseTheme) {
  const prefix = "A GitHub";
  const baseThemeName = baseThemeIdToNameMap[baseTheme];
  const emoji = colorEmojiMap[color];
  const colorNumber = colorNumberMap[color];
  const colorCapitalized = color.charAt(0).toUpperCase() + color.slice(1);

  return [prefix, baseThemeName, colorNumber, emoji, colorCapitalized]
    .filter(Boolean) // Remove undefined values
    .join(" ");
}
