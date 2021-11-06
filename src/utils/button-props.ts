import * as CSS from "csstype";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
} from "@xstyled/styled-components";

/**
 * Button props
 * block
 * danger
 * disabled
 * ghost
 * loading
 * size = small | medium | large
 * icon = use React icons
 * type = primary (use primary color as bg) | ghost | link | text
 * onClick
 */

interface BlockProps {
  block?: boolean;
}
const block = style<BlockProps>({
  prop: "block",
  css: () => ({
    width: "100% !important",
  }),
});

// eslint-disable-next-line no-unused-vars
export interface ButtonProps<T extends ITheme = Theme> extends BlockProps {}

export const buttonProps = compose(block);
