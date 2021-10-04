export const generalProps = [
  {
    prop: "width",
    css: "width"
  },
  {
    prop: "height",
    css: "height"
  }
] as const;

export const flexProps = [
  {
    prop: "align",
    css: "alignItems"
  },
  {
    prop: "justify",
    css: "justifyContent"
  },
  {
    prop: "align",
    css: "alignItems"
  },
  {
    prop: "direction",
    css: "flexDirection"
  }
] as const;

export const gridProps = [
  { prop: "column", css: "gridTemplateColumns" },
  { prop: "row", css: "gridTemplateRows" },
  { prop: "gap", css: "gridGap" }
] as const;

export const imageProps = [
  {
    prop: "ratio",
    css: "aspectRatio"
  }
] as const;

export type GeneralProps = {
  [K in typeof generalProps[number]["prop"]]?: string | number | object;
};
export type GridProps = {
  [K in typeof gridProps[number]["prop"]]?: string | number | object;
};
export type FlexProps = {
  [K in typeof flexProps[number]["prop"]]?: string | number | object;
};
export type ImageProps = {
  [K in typeof imageProps[number]["prop"]]?: string | number | object;
};
