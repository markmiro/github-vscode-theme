import lightColors from "@primer/primitives/dist/json/colors/light.json";
// import lightHighContrastColors from "@primer/primitives/dist/json/colors/light_high_contrast.json";
// import lightColorblindColors from "@primer/primitives/dist/json/colors/light_colorblind.json";
import darkColors from "@primer/primitives/dist/json/colors/dark.json";
// import darkHighContrastColors from "@primer/primitives/dist/json/colors/dark_high_contrast.json";
// import darkColorblindColors from "@primer/primitives/dist/json/colors/dark_colorblind.json";
import dimmedColors from "@primer/primitives/dist/json/colors/dark_dimmed.json";

// debugIcon.breakpointDisabledForeground
// debugIcon.breakpointUnverifiedForeground
// disabledForeground

export const baseThemes = {
  light: {
    ...lightColors,
    editorHoverWidget: {
      border: "#c8c8c8",
    },
    disabledForeground: "#61616180",
  },
  dark: {
    ...darkColors,
    // TODO: check following colors
    editorHoverWidget: {
      border: "#c8c8c8",
    },
    disabledForeground: "#61616180",
  },
  dark_dimmed: {
    ...dimmedColors,
    editorHoverWidget: {
      border: "#454545",
    },
    disabledForeground: "#cccccc80",
  },
} as const satisfies Record<string, any>;

export type BaseThemeConfig = {
  -readonly [K in keyof (typeof baseThemes)[BaseTheme]]: (typeof baseThemes)[BaseTheme][K];
};

export function isLightTheme(theme: BaseTheme) {
  return (
    theme === "light"
  );
}

export type BaseTheme = keyof typeof baseThemes;
