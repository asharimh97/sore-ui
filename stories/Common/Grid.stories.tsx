// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import { Grid as BaseGrid, Box } from "../../src/Common";

export const Grid = (props) => (
  <BaseGrid {...props}>
    {new Array(9).fill(0).map((item) => (
      <Box
        key={item}
        w="100px"
        h="100px"
        borderRadius="5px"
        backgroundColor="rose-500"
      />
    ))}
  </BaseGrid>
);

Grid.args = {
  column: "repeat(3, 1fr)",
  gap: "10px",
};

export default {
  title: `${Category.COMMON_COMPONENT}Grid`,
  argTypes: {
    row: { control: "text" },
    column: { control: "text" },
    gap: { control: "text" },
  },
} as Meta;
