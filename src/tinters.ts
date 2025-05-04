import { Color, formatHex, formatHex8, Oklch, oklch } from "culori";

export function darkDimmedThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l,
    c: Math.max(oklchColor.c + 0.01, 0.02),
    h: hue,
    alpha: oklchColor.alpha,
  });
}

export function darkDimmedBrownThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l * 0.7,
    c: Math.max(oklchColor.c * 0.2, 0.015),
    h: hue,
    alpha: oklchColor.alpha,
  });
}

export function darkDimmedBrownFgThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l * 0.9,
    c: Math.max(oklchColor.c * 0.7, 0.01),
    h: ((oklchColor.h ?? 0) + 15) % 360,
    alpha: oklchColor.alpha,
  });
}

export function darkVampireThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l * 1.2,
    c: Math.max(oklchColor.c * 2, 0.02),
    h: hue,
    alpha: oklchColor.alpha,
  });
}

export function darkVampireFgThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => {
    const h = oklchColor.h ?? 0;
    return {
      mode: "oklch",
      l: oklchColor.l,
      c: oklchColor.c * 0.8,
      h: h < 180 ? h + 25 : h - 25,
      alpha: oklchColor.alpha,
    };
  };
}

export function darkMutedThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l + 0.05,
    c: Math.max(oklchColor.c * 0.5, 0.02),
    h: oklchColor.h,
    alpha: oklchColor.alpha,
  });
}

export function darkMutedFgThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => {
    const h = oklchColor.h ?? 0;
    return {
      mode: "oklch",
      l: oklchColor.l,
      c: Math.min(oklchColor.c * 0.8, 0.1),
      h: oklchColor.h,
      alpha: oklchColor.alpha,
    };
  };
}

export function darkDimmedVampireThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => ({
    mode: "oklch",
    l: oklchColor.l * 0.8,
    c: Math.max(oklchColor.c * 4, 0.02),
    h: hue,
    alpha: oklchColor.alpha,
  });
}

export function darkDimmedVampireFgThemeTinter(
  hue: number
): (oklchColor: Oklch) => Color {
  return (oklchColor: Oklch) => {
    const h = oklchColor.h ?? 0;
    return {
      mode: "oklch",
      l: oklchColor.l,
      c: oklchColor.c * 0.8,
      h: h < 150 ? h + 25 : h - 25,
      alpha: oklchColor.alpha,
    };
  };
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
