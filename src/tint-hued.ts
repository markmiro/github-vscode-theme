import { Color, Oklch } from "culori";
import { tintColor } from "./tinters";
import { BaseThemeConfig } from "./base-themes";

export function tintHued(
  obj: BaseThemeConfig,
  tint: (oklchColor: Oklch) => Color
) {
  const t = JSON.parse(JSON.stringify(obj)) as BaseThemeConfig;

  t.scale.blue = tintColor(t.scale.blue, tint);
  t.scale.green = tintColor(t.scale.green, tint);
  t.scale.yellow = tintColor(t.scale.yellow, tint);
  t.scale.orange = tintColor(t.scale.orange, tint);
  t.scale.red = tintColor(t.scale.red, tint);
  t.scale.purple = tintColor(t.scale.purple, tint);
  t.scale.pink = tintColor(t.scale.pink, tint);
  t.scale.coral = tintColor(t.scale.coral, tint);

  t.ansi.red = tintColor(t.ansi.red, tint);
  t.ansi.redBright = tintColor(t.ansi.redBright, tint);
  t.ansi.green = tintColor(t.ansi.green, tint);
  t.ansi.greenBright = tintColor(t.ansi.greenBright, tint);
  t.ansi.yellow = tintColor(t.ansi.yellow, tint);
  t.ansi.yellowBright = tintColor(t.ansi.yellowBright, tint);
  t.ansi.blue = tintColor(t.ansi.blue, tint);
  t.ansi.blueBright = tintColor(t.ansi.blueBright, tint);
  t.ansi.magenta = tintColor(t.ansi.magenta, tint);
  t.ansi.magentaBright = tintColor(t.ansi.magentaBright, tint);
  t.ansi.cyan = tintColor(t.ansi.cyan, tint);
  t.ansi.cyanBright = tintColor(t.ansi.cyanBright, tint);

  return t;
}
