import React from "react";
import Text, { TextProps } from "./Text";

interface HeadingProps extends TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  [key: string]: any;
}

// eslint-disable-next-line react/prop-types
const Heading: React.FC<HeadingProps> = ({ as = "h2", ...props }) => {
  return <Text as={as} size={as} family="bold" {...props} />;
};

export default Heading;
