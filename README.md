# Colorful variants of GitHub's VS Code themes

This theme is not a replacement for the GitHub theme; it's a set of tinted variants. This is a fork of [GitHub's VS Code themes](https://github.com/primer/github-vscode-theme).

## Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=markmiro.colorful-github-vscode-theme).
2. Click on the "Install" button.
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme). The GitHub themes try to match the themes available in [github.com's settings](https://github.com/settings/appearance):
- `A GitHub Dark Dimmed 1 🔴 Red`
- `A GitHub Dark Dimmed 2 🟠 Orange`
- `A GitHub Dark Dimmed 3 🟢 Green`
- `A GitHub Dark Dimmed 4 🔵 Blue`
- `A GitHub Dark Dimmed 5 🟣 Purple`
- `A GitHub Dark High Contrast 1 🔴 Red`
- `A GitHub Dark High Contrast 2 🟠 Orange`
- `A GitHub Dark High Contrast 3 🟢 Green`
- `A GitHub Dark High Contrast 4 🔵 Blue`
- `A GitHub Dark High Contrast 5 🟣 Purple`
- `A GitHub Light 1 🔴 Red`
- `A GitHub Light 2 🟠 Orange`
- `A GitHub Light 3 🟢 Green`
- `A GitHub Light 4 🔵 Blue`
- `A GitHub Light 5 🟣 Purple`
- `A GitHub Dark 🧛 Vampire`
- `A GitHub Dark Dimmed 🧛 Vampire`
- `A GitHub Dark 🩶 Muted`
- `A GitHub Dark Dimmed 🩶 Muted`
- `A GitHub Dark Dimmed 🟤 Brown`

The best way to use them is to open multiple instances of VS Code and select a different theme for each instance. This makes it easy to spot the window you're looking for when you have multiple editor windows open.

To set the color, you have two options:
1. Create a `.vscode/settings.json` file in your project and add the following:

```json
{
  "workbench.preferredLightColorTheme": "A GitHub Light 1 🔴 Red",
  "workbench.preferredDarkColorTheme": "A GitHub Dark Dimmed 1 🔴 Red",
}
```

2. Create a workspace setting (ex: `github-vscode-theme.code-workspace`):

```json
{
  "folders": [
    {
      "path": "github-vscode-theme"
    }
  ],
  "settings": {
    "workbench.preferredLightColorTheme": "A GitHub Light 1 🔴 Red",
    "workbench.preferredDarkColorTheme": "A GitHub Dark Dimmed 1 🔴 Red"
  }
}
```

TODO:
- [x] Add a light theme
- [x] Convert to TypeScript
- [ ] Find the rest of the grays (for tinting)
- [ ] Handle tinting CSS shadows
- [ ] Add foreground color tinting (mostly for color tempurature)
- [ ] Add a dark theme (in addition to existing dimmed dark variants)
- [ ] Add high contrast themes
- [ ] Add slightly muted variants

## Override this theme

To override this (or any other) theme in your personal config file, please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation. This is handy for small tweaks to the theme without having to fork and maintain your own theme. 

## Contribute

1. Clone and open this [repo](https://github.com/markmiro/github-vscode-theme) in VS Code
2. Run `pnpm install` to install the dependencies.
3. Press `F5` to open a new window with your extension loaded
4. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "GitHub ..." theme you want to test. Note: It seems this has to be done 2x because the first time it switches back to the default light theme. This might be a bug?
5. Make changes to the [`/src/theme.js`](https://github.com/markmiro/github-vscode-theme/blob/master/src/theme.js) file.
    - **UI**: For all changes to the "outer UI", like (status bar, file navigation etc.), take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
    - **Syntax**: For changes to the "code highlighting", examine the syntax scopes by invoking the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
6. Run `pnpm build` to update the theme. You can also run `pnpm start` instead to automatically rebuild the theme while making changes and no reloading should be necessary.
7. Once you're happy, commit your changes and open a PR.