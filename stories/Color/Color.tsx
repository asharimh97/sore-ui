import color from "../../src/_style/color";
import { Box, Grid, Flex, Text } from "../../src/Common";

function Color() {
  return (
    <>
      {Object.keys(color).map((col) => (
        <Grid gap={25}>
          <Flex direction="column" align="center">
            <Box
              backgroundColor={col}
              w={100}
              h={100}
              borderRadius="md"
              mb={16}
            />
            <Text>{col}</Text>
          </Flex>
        </Grid>
      ))}
    </>
  );
}

export default Color;
