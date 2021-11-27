import React from "react";
import { Box } from "../Common";
import { styled } from "../config/xstyled.config";

const Card: React.FC = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

Card.defaultProps = {
  p: "8px",
  boxShadow: "md",
};

export default Card;
