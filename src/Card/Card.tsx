import React from "react";
import { Box } from "../Common";
import { styled } from "../config/xstyled.config";
import { SystemStyleProps } from "../config/xstyled.config";

const Card: React.FC<SystemStyleProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

Card.defaultProps = {
  p: "8px",
  boxShadow: "sm",
  borderRadius: "md",
  border: "solid 0.5px",
  borderColor: "blue-gray-100",
};

export default Card;
