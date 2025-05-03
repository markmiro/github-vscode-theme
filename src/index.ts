import { promises as fs } from "fs";
import { getTheme } from "./theme";

// Dark dimmed themes
// ---

const darkDimmedRedTheme = getTheme({
  theme: "dark_dimmed",
  name: "A GitHub Dark Dimmed 1 🔴 Red",
  rotateHue: 0,
});

const darkDimmedOrangeTheme = getTheme({
  theme: "dark_dimmed",
  name: "A GitHub Dark Dimmed 2 🟠 Orange",
  rotateHue: 80,
});

const darkDimmedGreenTheme = getTheme({
  theme: "dark_dimmed",
  name: "A GitHub Dark Dimmed 3 🟢 Green",
  rotateHue: 150,
});

const darkDimmedBlueTheme = getTheme({
  theme: "dark_dimmed",
  name: "A GitHub Dark Dimmed 4 🔵 Blue",
  rotateHue: 240,
});

const darkDimmedPurpleTheme = getTheme({
  theme: "dark_dimmed",
  name: "A GitHub Dark Dimmed 5 🟣 Purple",
  rotateHue: 300,
});

// Light themes
// ---

const lightRedTheme = getTheme({
  theme: "light",
  name: "A GitHub Light 1 🔴 Red",
  rotateHue: 0,
});

const lightOrangeTheme = getTheme({
  theme: "light",
  name: "A GitHub Light 2 🟠 Orange",
  rotateHue: 80,
});

const lightGreenTheme = getTheme({
  theme: "light",
  name: "A GitHub Light 3 🟢 Green",
  rotateHue: 150,
});

const lightBlueTheme = getTheme({
  theme: "light",
  name: "A GitHub Light 4 🔵 Blue",
  rotateHue: 240,
});

const lightPurpleTheme = getTheme({
  theme: "light",
  name: "A GitHub Light 5 🟣 Purple",
  rotateHue: 300,
});

// Write themes
// ---

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      // Dark dimmed themes
      fs.writeFile(
        "./themes/dark-dimmed-red.json",
        JSON.stringify(darkDimmedRedTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-dimmed-orange.json",
        JSON.stringify(darkDimmedOrangeTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-dimmed-green.json",
        JSON.stringify(darkDimmedGreenTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-dimmed-blue.json",
        JSON.stringify(darkDimmedBlueTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-dimmed-purple.json",
        JSON.stringify(darkDimmedPurpleTheme, null, 2)
      ),
      // Light themes
      fs.writeFile(
        "./themes/light-red.json",
        JSON.stringify(lightRedTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/light-orange.json",
        JSON.stringify(lightOrangeTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/light-green.json",
        JSON.stringify(lightGreenTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/light-blue.json",
        JSON.stringify(lightBlueTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/light-purple.json",
        JSON.stringify(lightPurpleTheme, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1));
