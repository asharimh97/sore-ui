import * as CSS from "csstype";
import React from "react";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
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

export interface GeneralProps<T extends ITheme = Theme>
  extends HeightProps<T>,
    WidthProps<T>,
    AsProps {}

export const generalProps = compose<GeneralProps>(height, width);
