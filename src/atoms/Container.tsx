import React from "react";
import Flex, { FlexProp } from "./Flex";

interface ContainerProps extends FlexProp {
  children: React.ReactNode;
  [key: string]: any;
}

const Container: React.FC<ContainerProps> = props => {
  return <Flex direction="column" w="100%" {...props} />;
};

export default Container;
