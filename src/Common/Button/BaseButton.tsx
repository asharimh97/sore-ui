import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "../../config/xstyled.config";
import {
  ButtonProps as CustomButtonProps,
  buttonProps as customButtonProps,
} from "../../utils/button-props";

export interface ButtonProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "text">,
    CustomButtonProps<T> {}

const buttonProps = compose(systemProps, customButtonProps);

const { x, styled, css } = createCss(buttonProps);

const BUTTON_SIZES = {
  small: {
    height: "36px",
    fontSize: "13px",
  },
  medium: {
    height: "40px",
    fontSize: "13px",
  },
  large: {
    height: "48px",
    fontSize: "15px",
  },
};

const BaseButton = styled(x.button)<ButtonProps>`
  align-items: center;
  background-color: #fff;
  border: solid 1px;
  border-color: cool-gray-400;
  border-radius: 4px;
  color: cool-gray-500;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  height: 40px;
  justify-content: center;
  padding: 0 14px;
  transition: all 0.2s ease-in-out;

  ${({ primary }) =>
    primary &&
    css`
      border-color: primary-500;
      background-color: primary-500;
      color: #fff;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border-color: secondary-500;
      background-color: secondary-500;
      color: #fff;
    `}

  /* Set button size in base */
  ${({ size }) =>
    size &&
    css({
      fontSize: BUTTON_SIZES[size].fontSize,
      height: BUTTON_SIZES[size].height,
    })}

  /* Set disabled button in base */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: gray-200;
      border-color: gray-300;
      color: gray-400;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

BaseButton.defaultProps = {
  shadow: "md",
};

export default BaseButton;
