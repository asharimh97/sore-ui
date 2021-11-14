import React from "react";
import * as CSS from "csstype";
import { style, Theme, ITheme, compose } from "@xstyled/styled-components";

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

// styled in css
interface SizeProps {
  size?: "small" | "medium" | "large";
}

interface IconProps {
  icon?: React.ReactNode;
}

// eslint-disable-next-line no-unused-vars
export interface ButtonProps<T extends ITheme = Theme>
  extends BlockProps,
    SizeProps,
    IconProps {
  primary?: boolean;
  secondary?: boolean;
  ghost?: boolean;
  link?: boolean;
  text?: boolean;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: string;
}

export const buttonProps = compose(block);
