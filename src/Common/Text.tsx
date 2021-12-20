import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "../config/xstyled.config";
import {
  TextProps as CustomTextProps,
  textProps as customTextProps,
} from "../utils/text-props";

interface TextProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "size" | "height">,
    CustomTextProps<T> {}

const textProps = compose<TextProps>(systemProps, customTextProps);

const { x, styled, css } = createCss(textProps);

const Text: React.FC<TextProps> = (props) => {
  return <x.p {...props} />;
};

export default Text;
