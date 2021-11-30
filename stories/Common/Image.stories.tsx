// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Image as Img, Flex } from "../../src/Common";

export const Image = (props) => (
  <Flex>
    <Img {...props} />
  </Flex>
);

Image.args = {
  width: "250px",
  height: "100px",
  borderRadius: "6px",
  src: "https://i.pravatar.cc/750",
  autofit: false,
};

export default {
  title: `${Category.COMMON_COMPONENT}Image`,
  argTypes: {
    caption: { control: "text" },
    autofit: { control: "boolean" },
    ratio: { control: "text" },
  },
} as Meta;
