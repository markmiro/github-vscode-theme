const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/json/colors/light_high_contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/json/colors/dark_colorblind.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const { oklch, formatHex, formatHex8 } = require("culori");

function warmifyGrayScale(colors, rotateHue = 0) {
  // TODO: handle alpha values too!

  // Handle array of colors
  if (Array.isArray(colors)) {
    return colors.map((color) => warmifyGrayScale(color, rotateHue));
  }

  // Handle nested objects
  if (typeof colors === "object" && colors !== null) {
    const warmedColors = {};
    for (const key in colors) {
      warmedColors[key] = warmifyGrayScale(colors[key], rotateHue);
    }
    return warmedColors;
  }

  // Handle non-color values
  if (typeof colors !== "string" || !oklch(colors)) {
    return colors;
  }

  // Convert color to OKLCH and warm it
  const oklchColor = oklch(colors);
  if (oklchColor.alpha) {
    return formatHex8({
      mode: "oklch",
      // for light mode, (- 0.1)
      l: oklchColor.l,
      c: Math.min(oklchColor.c + 0.01, 0.05),
      h: rotateHue, // Slight warm hue (towards red)
      // h: 75, // Slight warm hue (towards yellow/orange)
      // h: 100, // Slight warm hue (towards green)
      // h: 200, // Slight warm hue (towards blue/green)
      // h: 240, // Slight warm hue (towards blue)
      alpha: oklchColor.alpha,
    });
  }
  return formatHex({
    mode: "oklch",
    // for light mode, (- 0.1)
    l: oklchColor.l,
    c: Math.min(oklchColor.c + 0.01, 0.05), // Add small amount of chroma
    h: rotateHue, // Slight warm hue (towards red)
    // h: 75, // Slight warm hue (towards yellow/orange)
    // h: 100, // Slight warm hue (towards green)
    // h: 200, // Slight warm hue (towards blue/green)
    // h: 240, // Slight warm hue (towards blue)
    alpha: oklchColor.alpha,
  });
}

function getColors(theme, rotateHue = 100) {
  switch (theme) {
    case "light":
      lightColors.project = warmifyGrayScale(lightColors.project, rotateHue);
      lightColors.scale.gray = warmifyGrayScale(
        lightColors.scale.gray,
        rotateHue
      );
      lightColors.fg = warmifyGrayScale(lightColors.fg, rotateHue);
      lightColors.canvas = warmifyGrayScale(lightColors.canvas, rotateHue);
      lightColors.border = warmifyGrayScale(lightColors.border, rotateHue);
      lightColors.neutral = warmifyGrayScale(lightColors.neutral, rotateHue);

      return lightColors;
    case "light_high_contrast":
      return lightHighContrastColors;
    case "light_colorblind":
      return lightColorblindColors;
    case "dark":
      darkColors.project = warmifyGrayScale(darkColors.project, rotateHue);
      darkColors.scale.gray = warmifyGrayScale(
        darkColors.scale.gray,
        rotateHue
      );
      darkColors.fg = warmifyGrayScale(darkColors.fg, rotateHue);
      darkColors.canvas = warmifyGrayScale(darkColors.canvas, rotateHue);
      darkColors.border = warmifyGrayScale(darkColors.border, rotateHue);
      darkColors.neutral = warmifyGrayScale(darkColors.neutral, rotateHue);

      // console.log(darkColors.scale.gray);

      return darkColors;
    case "dark_high_contrast":
      return darkHighContrastColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      dimmedColors.project = warmifyGrayScale(dimmedColors.project, rotateHue);
      dimmedColors.scale.gray = warmifyGrayScale(
        dimmedColors.scale.gray,
        rotateHue
      );
      dimmedColors.fg = warmifyGrayScale(dimmedColors.fg, rotateHue);
      dimmedColors.canvas = warmifyGrayScale(dimmedColors.canvas, rotateHue);
      dimmedColors.border = warmifyGrayScale(dimmedColors.border, rotateHue);
      dimmedColors.neutral = warmifyGrayScale(dimmedColors.neutral, rotateHue);

      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
