// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Text, Flex } from "../../src/Common";
import { fontSizes } from "../../src/_style/theme";

// @ts-ignore
export const Typography = (props) => (
  <>
    {Object.keys(fontSizes).map((size) => (
      <Flex key={size} align="flex-start" mb="14px">
        <Text mr="10px" weight={300}>
          {size}
        </Text>
        <Text size={size} {...props}>
          Computers have lots of memory but no imagination.
        </Text>
      </Flex>
    ))}
  </>
);

// Typography.args = {
//   italic: false,
//   lowercase: false,
//   uppercase: false,
//   caps: false,
// };

export default {
  title: `${Category.COMMON_COMPONENT}Typography`,
  argTypes: {
    height: {
      control: "text",
    },
    spacing: {
      control: "text",
    },
    italic: {
      control: "boolean",
    },
    lowercase: {
      control: "boolean",
    },
    uppercase: {
      control: "boolean",
    },
    caps: {
      control: "boolean",
    },
  },
} as Meta;
