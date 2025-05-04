import { promises as fs } from "fs";
import { getTheme } from "./theme";
import { BaseTheme, isLightTheme } from "./base-themes";
import { Color, Oklch } from "culori";
import {
  darkDimmedThemeTinter,
  darkFgThemeTinter,
  lightFgThemeTinter,
  lightThemeTinter,
  //
  darkDimmedBrownFgThemeTinter,
  darkDimmedBrownThemeTinter,
  darkDimmedVampireFgThemeTinter,
  darkDimmedVampireThemeTinter,
  darkVampireThemeTinter,
  darkVampireFgThemeTinter,
  darkMutedThemeTinter,
  darkMutedFgThemeTinter,
} from "./tinters";
import { colorHueMap, getThemeName, SupportedColor } from "./util";

type ThemeStarter = {
  color: SupportedColor;
  baseTheme: BaseTheme;
  bgTint: (oklchColor: Oklch) => Color;
  fgTint?: (oklchColor: Oklch) => Color;
};

const themeStarters = [
  {
    color: "brown",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedBrownThemeTinter(colorHueMap.brown),
    fgTint: darkDimmedBrownFgThemeTinter(colorHueMap.brown),
  },
  {
    color: "muted",
    baseTheme: "dark",
    bgTint: darkMutedThemeTinter(colorHueMap.muted),
    fgTint: darkMutedFgThemeTinter(colorHueMap.muted),
  },
  {
    color: "muted",
    baseTheme: "dark_dimmed",
    bgTint: darkMutedThemeTinter(colorHueMap.muted),
    fgTint: darkMutedFgThemeTinter(colorHueMap.muted),
  },
  {
    color: "vampire",
    baseTheme: "dark",
    bgTint: darkVampireThemeTinter(colorHueMap.vampire),
    fgTint: darkVampireFgThemeTinter(colorHueMap.vampire),
  },
  {
    color: "vampire",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedVampireThemeTinter(colorHueMap.vampire),
    fgTint: darkDimmedVampireFgThemeTinter(colorHueMap.vampire),
  },
  // dark dimmed themes
  {
    color: "red",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedThemeTinter(colorHueMap.red),
    fgTint: undefined,
  },
  {
    color: "orange",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedThemeTinter(colorHueMap.orange),
    fgTint: undefined,
  },
  {
    color: "green",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedThemeTinter(colorHueMap.green),
    fgTint: undefined,
  },
  {
    color: "blue",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedThemeTinter(colorHueMap.blue),
    fgTint: undefined,
  },
  {
    color: "purple",
    baseTheme: "dark_dimmed",
    bgTint: darkDimmedThemeTinter(colorHueMap.purple),
    fgTint: undefined,
  },
  // light themes
  {
    color: "red",
    baseTheme: "light",
    bgTint: lightThemeTinter(colorHueMap.red),
    fgTint: undefined,
  },
  {
    color: "orange",
    baseTheme: "light",
    bgTint: lightThemeTinter(colorHueMap.orange),
    fgTint: undefined,
  },
  {
    color: "green",
    baseTheme: "light",
    bgTint: lightThemeTinter(colorHueMap.green),
    fgTint: undefined,
  },
  {
    color: "blue",
    baseTheme: "light",
    bgTint: lightThemeTinter(colorHueMap.blue),
    fgTint: undefined,
  },
  {
    color: "purple",
    baseTheme: "light",
    bgTint: lightThemeTinter(colorHueMap.purple),
    fgTint: undefined,
  },
] as const satisfies ThemeStarter[];

const tintedThemes = themeStarters.map((starter) => ({
  baseTheme: starter.baseTheme,
  themeConfig: getTheme({
    theme: starter.baseTheme,
    name: getThemeName(starter.color, starter.baseTheme),
    bgTint: starter.bgTint,
    fgTint:
      starter.fgTint ??
      (starter.baseTheme === "dark_dimmed"
        ? darkFgThemeTinter(colorHueMap[starter.color])
        : lightFgThemeTinter(colorHueMap[starter.color])),
  }),
  fileName: `${starter.baseTheme}-${starter.color}.json`,
}));

console.log(tintedThemes);

// Write themes
// ---

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      tintedThemes.map((theme) =>
        fs.writeFile(
          `./themes/${theme.fileName}`,
          JSON.stringify(theme.themeConfig, null, 2)
        )
      ),
    ])
  )
  .catch(() => process.exit(1));

// Update package.json
// ---

async function updatePackageJson() {
  const packageJson = JSON.parse(await fs.readFile("./package.json", "utf8"));
  packageJson.contributes.themes = tintedThemes.map((theme) => ({
    label: theme.themeConfig.name,
    uiTheme: isLightTheme(theme.baseTheme) ? "vs" : "vs-dark",
    path: `./themes/${theme.fileName}`,
  }));

  fs.writeFile("./package.json", JSON.stringify(packageJson, null, 2));
}

updatePackageJson();
