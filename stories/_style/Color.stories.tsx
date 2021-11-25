// eslint-disable-next-line no-use-before-define
import React from "react";
import { Meta } from "@storybook/react";
import { Category } from "../hierarchy";

import color from "../../src/_style/color";
import { Box, Grid, Flex, Text } from "../../src/Common";

export const Color = () => {
  // only select color without its alpha
  const colorKeys = Object.keys(color).filter(
    (col: string) => !col.includes("-a"),
  );

  return (
    <>
      <Text as="h1" size="x-large" weight="bold" mb={8}>
        Color Gallery
      </Text>
      <Grid gap="25px" column="repeat(7, 1fr)">
        {colorKeys.map((col) => (
          <Flex key={col} direction="column" align="center">
            <Box
              backgroundColor={col}
              border="solid 2px"
              borderColor="black-a50"
              w={100}
              h={100}
              borderRadius="md"
              mb="16px"
            />
            <Text>{col}</Text>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default {
  title: `${Category.BASE_STYLE}Color`,
} as Meta;
