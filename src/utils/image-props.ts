import * as CSS from "csstype";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
} from "@xstyled/styled-components";

interface RatioProps<T extends ITheme = Theme> {
  ratio?: SystemProp<CSS.Property.AspectRatio, T>;
}

const ratio = style<RatioProps>({
  prop: "ratio",
  css: "aspectRatio",
});

export interface ImageProps<T extends ITheme = Theme> extends RatioProps<T> {}

export const imageProps = compose<ImageProps>(ratio);
