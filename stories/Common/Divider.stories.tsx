// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Divider as Divide, Box } from "../../src/Common";

export const Divider = () => (
  <Box w="250px">
    <Divide />
  </Box>
);

export const DividerWithOrientation = (props) => (
  <Box w="250px">
    <Divide {...props}>Divider</Divide>
  </Box>
);

DividerWithOrientation.args = {
  orientation: "center",
};

export default {
  title: `${Category.COMMON_COMPONENT}Divider`,
  argTypes: {
    orientation: {
      options: ["right", "left", "center"],
      control: {
        type: "select",
      },
    },
  },
} as Meta;
