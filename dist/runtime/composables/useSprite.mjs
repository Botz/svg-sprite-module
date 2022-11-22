import { sprites, defaultSprite, spriteClass, spriteClassPrefix } from "#svg-sprite";
function generateName(name) {
  return name.toLowerCase().replace(/\.svg$/, "").replace(/[^a-z0-9-]/g, "-");
}
export const useSprite = async (name) => {
  let [sprite, icon] = name.split("/");
  if (!icon) {
    icon = sprite;
    sprite = defaultSprite;
  }
  const spriteFile = sprites[sprite] ? await sprites[sprite]() : "";
  return {
    sprite,
    icon,
    url: spriteFile + `#${generateName(icon)}`,
    class: `${spriteClass} ${spriteClassPrefix}${sprite}`
  };
};
