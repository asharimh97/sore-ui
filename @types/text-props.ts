/* eslint-disable no-unused-vars */
import {
  getFont,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  style
} from "@xstyled/styled-components";

const textProps = [
  {
    prop: "weight",
    cssProperty: "fontWeight",
    themeGet: getFontWeight
  },
  {
    prop: "size",
    cssProperty: "fontSize",
    themeGet: getFontSize
  },
  {
    prop: "spacing",
    cssProperty: "letterSpacing",
    themeGet: getLetterSpacing
  },
  {
    prop: "family",
    cssProperty: "fontFamily",
    themeGet: getFont
  }
] as const;

const shortenedTextProps = [
  {
    prop: "italic",
    cssProperty: () => ({
      fontStyle: "italic"
    })
  },
  {
    prop: "uppercase",
    cssProperty: () => ({
      textTransform: "uppercase"
    })
  },
  {
    prop: "lowercase",
    cssProperty: () => ({
      textTransform: "lowercase"
    })
  },
  {
    prop: "capitalize",
    cssProperty: () => ({
      textTransform: "capitalize"
    })
  },
  {
    prop: "clearStyle",
    cssProperty: () => ({
      textDecoration: "none",
      fontStyle: "none"
    })
  }
] as const;

// @ts-ignore
export const mappedTextProps = [...textProps, ...shortenedTextProps].map(item =>
  style({ ...item })
);

export type CustomTextProps = {
  [K in typeof textProps[number]["prop"]]?: string | number | object;
};

export type ShortenTextProps = {
  [K in typeof shortenedTextProps[number]["prop"]]?: boolean;
};
