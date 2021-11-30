// eslint-disable-next-line no-use-before-define
import React from "react";
import { ComponentMeta } from "@storybook/react";
import { IoIosAlarm } from "react-icons/io";
import { Category } from "../hierarchy";

import { Tag } from "../../src/Common";
import { tagColors } from "../../src/lib/constants";

// @ts-ignore
export const DefaultTag = (props) => (
  <>
    <Tag {...props}>Hulalalla</Tag>
  </>
);

DefaultTag.args = {
  color: "indigo",
};

// @ts-ignore
export const TagWithIcon = (props) => (
  <Tag {...props} icon={<IoIosAlarm />}>
    Tag with icon
  </Tag>
);

export default {
  title: `${Category.COMMON_COMPONENT}Tag`,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(tagColors),
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Tag>;
