// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Alert as BaseAlert } from "../../src/Common";

export const Alert = (props) => <BaseAlert {...props} />;

Alert.args = {
  message: "This is an example of alert",
  closable: false,
};

export default {
  title: `${Category.COMMON_COMPONENT}Alert`,
  argTypes: {
    type: {
      options: ["success", "info", "warning", "error"],
      control: { type: "select" },
    },
    message: { control: "text" },
    description: { control: "text" },
    closable: { control: "boolean" },
  },
} as Meta;
