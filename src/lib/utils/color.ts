import tinycolor from "tinycolor2";

export const generateFontColor = (col: string = "white") => {
  const bgColor = tinycolor(col);
  if (bgColor.isLight()) {
    return "#000000";
  }

  return "#FFFFFF";
};
