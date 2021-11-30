// eslint-disable-next-line no-use-before-define
import React from "react";
import { ComponentMeta } from "@storybook/react";
import { IoIosAlarm } from "react-icons/io";
import { Category } from "../hierarchy";

import { Button as BaseButton } from "../../src/Common";
import { ButtonProps } from "../../src/Common/Button/BaseButton";

export const Button = (props: ButtonProps) => (
  <BaseButton {...props}>Ini button</BaseButton>
);

Button.args = {
  primary: false,
  secondary: false,
  danger: false,
  disabled: false,
};

export const GhostButton = (props: ButtonProps) => (
  <BaseButton {...props} ghost>
    Ini button ghost
  </BaseButton>
);

GhostButton.args = {
  primary: true,
  secondary: false,
  danger: false,
  disabled: false,
};

export const ButtonWithIcon = (props: ButtonProps) => (
  <BaseButton {...props} primary icon={<IoIosAlarm />}>
    Ini button dengan icon
  </BaseButton>
);

export default {
  title: `${Category.COMMON_COMPONENT}Button`,
  argTypes: {
    primary: {
      control: "boolean",
    },
    secondary: {
      control: "boolean",
    },
    danger: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Button>;
