import { ThemeGetter } from "@xstyled/styled-components";

interface CustomStyleProps {
  prop: string;
  cssProperty: string;
  themeGet: ThemeGetter<(string & {}) | (number & {})>
}

declare const textProps: Array<CustomStyleProps>;

interface ShortenedStyleProps {
  prop: string;
  cssProperty: () => Record<string, any>;
}

declare const shortenedTextProps: Array<ShortenedStyleProps>;