import * as CSS from "csstype";
import React from "react";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
  getShadow,
} from "@xstyled/styled-components";

interface HeightProps<T extends ITheme = Theme> {
  height?: SystemProp<CSS.Property.Height, T>;
}

interface WidthProps<T extends ITheme = Theme> {
  width?: SystemProp<CSS.Property.Height, T>;
}

const width = style<WidthProps>({
  prop: "width",
});

const height = style<HeightProps>({
  prop: "height",
});
interface AsProps {
  as?: string | React.ComponentType<any>;
  forwardedAs?: string | React.ComponentType<any>;
}

interface ShadowProps<T extends ITheme = Theme> {
  // shadow?: "sm" | "default" | "md" | "lg" | "xl" | "2xl";
  shadow?: SystemProp<CSS.Property.BoxShadow, T>;
}
const shadow = style<ShadowProps>({
  prop: "shadow",
  css: "boxShadow",
  themeGet: getShadow,
});

export interface GeneralProps<T extends ITheme = Theme>
  extends HeightProps<T>,
    WidthProps<T>,
    ShadowProps<T>,
    AsProps {}

export const generalProps = compose<GeneralProps>(height, width, shadow);
