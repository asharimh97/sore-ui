// eslint-disable-next-line no-use-before-define
import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Flex as BaseFlex, Box } from "../../src/Common";

export const Flex = (props) => (
  <BaseFlex {...props}>
    <Box
      w="50px"
      h="50px"
      borderRadius="4px"
      backgroundColor="rose-500"
      m="10px"
    />
    <Box
      w="50px"
      h="50px"
      borderRadius="4px"
      backgroundColor="rose-500"
      m="10px"
    />
    <Box
      w="50px"
      h="50px"
      borderRadius="4px"
      backgroundColor="rose-500"
      m="10px"
    />
  </BaseFlex>
);

export default {
  title: `${Category.COMMON_COMPONENT}Flex`,
  argTypes: {
    align: {
      control: "text",
    },
    justify: {
      control: "text",
    },
    direction: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Flex>;
