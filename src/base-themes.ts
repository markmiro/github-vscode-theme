import lightColors from "@primer/primitives/dist/json/colors/light.json";
import lightHighContrastColors from "@primer/primitives/dist/json/colors/light_high_contrast.json";
import lightColorblindColors from "@primer/primitives/dist/json/colors/light_colorblind.json";
import darkColors from "@primer/primitives/dist/json/colors/dark.json";
import darkHighContrastColors from "@primer/primitives/dist/json/colors/dark_high_contrast.json";
import darkColorblindColors from "@primer/primitives/dist/json/colors/dark_colorblind.json";
import dimmedColors from "@primer/primitives/dist/json/colors/dark_dimmed.json";

export const baseThemes = {
  light: lightColors,
  light_high_contrast: lightHighContrastColors,
  light_colorblind: lightColorblindColors,
  dark: darkColors,
  dark_high_contrast: darkHighContrastColors,
  dark_colorblind: darkColorblindColors,
  dark_dimmed: dimmedColors,
} as const;

export function isLightTheme(theme: BaseTheme) {
  return (
    theme === "light" ||
    theme === "light_high_contrast" ||
    theme === "light_colorblind"
  );
}

export type BaseTheme = keyof typeof baseThemes;
