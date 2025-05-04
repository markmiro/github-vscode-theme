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

  return t;
}
