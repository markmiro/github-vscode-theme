import { promises as fs } from "fs";
import { getTheme } from "./theme";
import { BaseTheme, isLightTheme } from "./base-themes";
import { Color, Oklch } from "culori";
import { darkDimmedThemeTinter, lightThemeTinter } from "./tinters";
import { colorHueMap, getThemeName } from "./util";

type ThemeStarter = {
  color: string;
  baseTheme: BaseTheme;
  tint: (oklchColor: Oklch) => Color;
};

const themeStarters = [
  // dark dimmed themes
  {
    color: "red",
    baseTheme: "dark_dimmed",
    tint: darkDimmedThemeTinter(colorHueMap.red),
  },
  {
    color: "orange",
    baseTheme: "dark_dimmed",
    tint: darkDimmedThemeTinter(colorHueMap.orange),
  },
  {
    color: "green",
    baseTheme: "dark_dimmed",
    tint: darkDimmedThemeTinter(colorHueMap.green),
  },
  {
    color: "blue",
    baseTheme: "dark_dimmed",
    tint: darkDimmedThemeTinter(colorHueMap.blue),
  },
  {
    color: "purple",
    baseTheme: "dark_dimmed",
    tint: darkDimmedThemeTinter(colorHueMap.purple),
  },
  // light themes
  {
    color: "red",
    baseTheme: "light",
    tint: lightThemeTinter(colorHueMap.red),
  },
  {
    color: "orange",
    baseTheme: "light",
    tint: lightThemeTinter(colorHueMap.orange),
  },
  {
    color: "green",
    baseTheme: "light",
    tint: lightThemeTinter(colorHueMap.green),
  },
  {
    color: "blue",
    baseTheme: "light",
    tint: lightThemeTinter(colorHueMap.blue),
  },
  {
    color: "purple",
    baseTheme: "light",
    tint: lightThemeTinter(colorHueMap.purple),
  },
] as const satisfies ThemeStarter[];

const tintedThemes = themeStarters.map((starter) => ({
  baseTheme: starter.baseTheme,
  themeConfig: getTheme({
    theme: starter.baseTheme,
    name: getThemeName(starter.color, starter.baseTheme),
    tint: starter.tint,
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
