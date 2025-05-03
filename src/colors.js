const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/json/colors/light_high_contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/json/colors/dark_colorblind.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const { oklch, formatHex, formatHex8 } = require("culori");

function tintColor(colors, hue = 0) {
  // Handle array of colors
  if (Array.isArray(colors)) {
    return colors.map((color) => tintColor(color, hue));
  }

  // Handle nested objects
  if (typeof colors === "object" && colors !== null) {
    const warmedColors = {};
    for (const key in colors) {
      warmedColors[key] = tintColor(colors[key], hue);
    }
    return warmedColors;
  }

  // Handle non-color values
  if (typeof colors !== "string" || !oklch(colors)) {
    return colors;
  }

  const oklchColor = oklch(colors);

  const newColor = {
    mode: "oklch",
    l: oklchColor.l,
    c: Math.min(oklchColor.c + 0.01, 0.05),
    h: hue,
    alpha: oklchColor.alpha,
  };

  return oklchColor.alpha ? formatHex8(newColor) : formatHex(newColor);
}

function getColors(theme, rotateHue = 100) {
  switch (theme) {
    case "light":
      lightColors.project = tintColor(lightColors.project, rotateHue);
      lightColors.scale.gray = tintColor(lightColors.scale.gray, rotateHue);
      lightColors.fg = tintColor(lightColors.fg, rotateHue);
      lightColors.canvas = tintColor(lightColors.canvas, rotateHue);
      lightColors.border = tintColor(lightColors.border, rotateHue);
      lightColors.neutral = tintColor(lightColors.neutral, rotateHue);

      return lightColors;
    case "light_high_contrast":
      return lightHighContrastColors;
    case "light_colorblind":
      return lightColorblindColors;
    case "dark":
      darkColors.project = tintColor(darkColors.project, rotateHue);
      darkColors.scale.gray = tintColor(darkColors.scale.gray, rotateHue);
      darkColors.fg = tintColor(darkColors.fg, rotateHue);
      darkColors.canvas = tintColor(darkColors.canvas, rotateHue);
      darkColors.border = tintColor(darkColors.border, rotateHue);
      darkColors.neutral = tintColor(darkColors.neutral, rotateHue);

      // console.log(darkColors.scale.gray);

      return darkColors;
    case "dark_high_contrast":
      return darkHighContrastColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      dimmedColors.project = tintColor(dimmedColors.project, rotateHue);
      dimmedColors.scale.gray = tintColor(dimmedColors.scale.gray, rotateHue);
      dimmedColors.fg = tintColor(dimmedColors.fg, rotateHue);
      dimmedColors.canvas = tintColor(dimmedColors.canvas, rotateHue);
      dimmedColors.border = tintColor(dimmedColors.border, rotateHue);
      dimmedColors.neutral = tintColor(dimmedColors.neutral, rotateHue);

      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
