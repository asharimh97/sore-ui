// eslint-disable-next-line import/no-unresolved
import * as CSS from "csstype";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
  getFontWeight,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
  getFont,
} from "@xstyled/styled-components";

interface WeightProps<T extends ITheme = Theme> {
  weight?: SystemProp<CSS.Property.FontWeight, T>;
}
const weight = style({
  prop: "weight",
  css: "fontWeight",
  themeGet: getFontWeight,
});

interface SizeProps<T extends ITheme = Theme> {
  size?: SystemProp<CSS.Property.FontSize, T>;
}
const size = style({
  prop: "size",
  css: "fontSize",
  themeGet: getFontSize,
});

interface HeightProps<T extends ITheme = Theme> {
  height?: SystemProp<CSS.Property.LineHeight, T>;
}
const height = style({
  prop: "height",
  css: "lineHeight",
  themeGet: getLineHeight,
});

interface SpacingProps<T extends ITheme = Theme> {
  spacing?: SystemProp<CSS.Property.LetterSpacing, T>;
}
const spacing = style({
  prop: "spacing",
  css: "letterSpacing",
  themeGet: getLetterSpacing,
});

interface FamilyProps<T extends ITheme = Theme> {
  family?: SystemProp<CSS.Property.FontFamily, T>;
}
const family = style({
  prop: "family",
  css: "fontFamily",
  themeGet: getFont,
});

// Text style props
interface ItalicProps {
  italic?: boolean;
}
const italic = style({
  prop: "italic",
  css: () => ({
    "&": {
      fontStyle: "italic",
    },
  }),
});

interface LowercaseProps {
  lowercase?: boolean;
}
const lowercase = style({
  prop: "lowercase",
  css: () => ({
    "&": {
      textTransform: "lowercase",
    },
  }),
});

interface UppercaseProps {
  uppercase?: boolean;
}
const uppercase = style({
  prop: "uppercase",
  css: () => ({
    "&": {
      textTransform: "uppercase",
    },
  }),
});

interface CapitalizeProps {
  caps?: boolean;
}
const capitalize = style({
  prop: "caps",
  css: () => ({
    "&": {
      textTransform: "capitalize",
    },
  }),
});

interface ClearStyleProps {
  clear?: boolean;
}
const clear = style({
  prop: "clear",
  css: () => ({
    "&": {
      fontStyle: "none",
      textDecoration: "none",
    },
  }),
});

interface EllipsisProps {
  ellipsis?: boolean;
}
const ellipsis = style({
  prop: "ellipsis",
  css: () => ({
    "&": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),
});

export interface TextProps<T extends ITheme = Theme>
  extends WeightProps<T>,
    SizeProps<T>,
    HeightProps<T>,
    SpacingProps<T>,
    FamilyProps<T>,
    ItalicProps,
    LowercaseProps,
    UppercaseProps,
    CapitalizeProps,
    ClearStyleProps,
    EllipsisProps {}

export const textProps = compose(
  weight,
  size,
  height,
  spacing,
  family,
  italic,
  lowercase,
  uppercase,
  capitalize,
  clear,
  ellipsis,
);
