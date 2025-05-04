import { Color, formatHex, formatHex8, Oklch, oklch } from "culori";

export function darkDimmedThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l,
    c: Math.max(oklchColor.c + 0.01, 0.01),
    h: hue,
    alpha: oklchColor.alpha,
  });
}

export function lightThemeTinter(hue: number): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l * 0.97,
    c: Math.min(oklchColor.c * 2.5, 90),
    h: hue,
    alpha: oklchColor.alpha,
  });
}

export function darkFgThemeTinter(hue: number): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l,
    c: oklchColor.c * 0.95,
    h: ((oklchColor.h ?? 0) + 10) % 360,
    alpha: oklchColor.alpha,
  });
}

export function lightFgThemeTinter(hue: number): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l,
    c: Math.max(oklchColor.c + 0.05, 0.01),
    h: oklchColor.h,
    alpha: oklchColor.alpha,
  });
}

export function tintColor(
  colors: any,
  tint: (oklchColor: Oklch) => Color
): any {
  // Handle array of colors
  if (Array.isArray(colors)) {
    return colors.map((color: any) => tintColor(color, tint));
  }

  // Handle nested objects
  if (typeof colors === "object" && colors !== null) {
    const tinted: any = {};
    for (const key in colors) {
      tinted[key] = tintColor(colors[key], tint);
    }
    return tinted;
  }

  // Handle non-color values
  if (typeof colors !== "string" || !oklch(colors)) {
    return colors;
  }

  const oklchColor = oklch(colors);

  if (!oklchColor) {
    return colors;
  }

  const newColor: Color = tint(oklchColor);
  return oklchColor.alpha ? formatHex8(newColor) : formatHex(newColor);
}
