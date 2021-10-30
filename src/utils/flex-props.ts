import * as CSS from "csstype";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
} from "@xstyled/styled-components";

interface JustifyProps<T extends ITheme = Theme> {
  justify?: SystemProp<CSS.Property.JustifyContent, T>;
}

interface AlignProps<T extends ITheme = Theme> {
  align?: SystemProp<CSS.Property.AlignItems, T>;
}

interface DirectionProps<T extends ITheme = Theme> {
  direction?: SystemProp<CSS.Property.FlexDirection, T>;
}

const align = style<AlignProps>({
  prop: "align",
  css: "alignItems",
});

const justify = style<JustifyProps>({
  prop: "justify",
  css: "justifyContent",
});

const direction = style<DirectionProps>({
  prop: "direction",
  css: "flexDirection",
});

export interface FlexProps<T extends ITheme = Theme>
  extends JustifyProps<T>,
    AlignProps<T>,
    DirectionProps<T> {}

export const flexProps = compose(align, justify, direction);

export default flexProps;
