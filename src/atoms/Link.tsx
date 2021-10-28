import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled, { th } from "@xstyled/styled-components";
import Text, { TextProps } from "./Text";

export interface LinkProps
  extends TextProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  href?: string;
  to?: string;
  internal?: boolean;
}

const TextLink: React.FC<LinkProps> = styled(Text).attrs({
  as: "a"
})`
  background-image: linear-gradient(
    ${th.color("primary")},
    ${th.color("primary")}
  );
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 100% 0.175em;
  color: inherit;
  cursor: pointer;
  font-style: none;
  text-decoration: none;

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;

const Link: React.FC<LinkProps> = ({ internal, ...props }) => {
  const componentProps = {
    ...props
  };

  if (internal) {
    componentProps.as = GatsbyLink;
  }

  return <TextLink {...componentProps} />;
};

// TODO: Create link for internal link

export default Link;
