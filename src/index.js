const fs = require("fs").promises;
const getTheme = require("./theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "AA Light Default",
});

const lightHighContrastTheme = getTheme({
  theme: "light_high_contrast",
  name: "AA Light High Contrast",
});

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "AA Light Colorblind",
});

const lightRedTheme = getTheme({
  theme: "light",
  name: "AA Light Red 🔴",
  rotateHue: 0,
});

const lightOrangeTheme = getTheme({
  theme: "light",
  name: "AA Light Orange 🟠",
  rotateHue: 80,
});

const lightGreenTheme = getTheme({
  theme: "light",
  name: "AA Light Green 🟢",
  rotateHue: 150,
});

const lightBlueTheme = getTheme({
  theme: "light",
  name: "AA Light Blue 🔵",
  rotateHue: 240,
});

const lightPurpleTheme = getTheme({
  theme: "light",
  name: "AA Light Purple 🟣",
  rotateHue: 300,
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "AA Dark Default",
});

const darkHighContrastTheme = getTheme({
  theme: "dark_high_contrast",
  name: "AA Dark High Contrast",
});

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "AA Dark Colorblind",
});

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "AA Dark Dimmed",
});

const darkDimmedRedTheme = getTheme({
  theme: "dark_dimmed",
  name: "AA Dark Dimmed Red 🔴",
  rotateHue: 0,
});

const darkDimmedOrangeTheme = getTheme({
  theme: "dark_dimmed",
  name: "AA Dark Dimmed Orange 🟠",
  rotateHue: 80,
});

const darkDimmedGreenTheme = getTheme({
  theme: "dark_dimmed",
  name: "AA Dark Dimmed Green 🟢",
  rotateHue: 150,
});

const darkDimmedBlueTheme = getTheme({
  theme: "dark_dimmed",
  name: "AA Dark Dimmed Blue 🔵",
  rotateHue: 240,
});

const darkDimmedPurpleTheme = getTheme({
  theme: "dark_dimmed",
  name: "AA Dark Dimmed Purple 🟣",
  rotateHue: 300,
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/light-default.json",
        JSON.stringify(lightDefaultTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/light-high-contrast.json",
        JSON.stringify(lightHighContrastTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/light-colorblind.json",
        JSON.stringify(lightColorblindTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-default.json",
        JSON.stringify(darkDefaultTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-high-contrast.json",
        JSON.stringify(darkHighContrastTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-colorblind.json",
        JSON.stringify(darkColorblindTheme, null, 2)
      ),
      fs.writeFile(
        "./themes/dark-dimmed.json",
        JSON.stringify(darkDimmedTheme, null, 2)
      ),
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
    ])
  )
  .catch(() => process.exit(1));
