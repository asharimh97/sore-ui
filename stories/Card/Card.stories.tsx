import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

// import Card from "../../src/Card/Card";
import Card, { Blog } from "../../src/Card";
import { Text, Box } from "../../src/Common";

export const DefaultCard = () => (
  <Card w="250px">
    <Text>This is the example implementation of card with 250px of width</Text>
  </Card>
);

export const BlogCard = () => (
  <Box w="250px">
    <Blog
      date="10 Des 2021"
      title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
      description="Lorem ipsum dolorsit amet"
    />
  </Box>
);

export default {
  title: `${Category.CARD_COMPONENT}Card`,
} as Meta;
