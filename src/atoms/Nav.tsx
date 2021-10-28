import React from "react";
import styled, { css, th, up } from "@xstyled/styled-components";
import { Link as GatsbyLink } from "gatsby";
import Link, { LinkProps } from "./Link";

interface NavProps extends LinkProps {
  active?: boolean;
}

const Nav: React.FC<NavProps> = styled(Link).attrs({ as: GatsbyLink })`
  background-image: linear-gradient(
    ${th.color("primary")},
    ${th.color("primary")}
  );
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 0px 100%;
  color: text;
  font-size: 20px;
  font-family: bold;
  margin-bottom: 32px;
  padding: 0 4px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:last-child {
    margin-bottom: none;
  }

  ${({ active }) =>
    active &&
    css`
      background-size: 100% 100%;
    `};

  &:hover,
  &:focus {
    background-size: 100% 100%;
    text-decoration: none;
  }

  ${
    // @ts-ignore
    up(
      "md",
      css`
        font-size: 18px;
        margin-bottom: 0px;
        margin-right: 48px;
        line-height: initial;

        &:last-child {
          margin-right: 0px;
        }

        ${
          // @ts-ignore
          ({ active }) =>
            active &&
            css`
              background-size: 40px 100%;
            `
        }

        &:hover, &:focus {
          background-size: 40px 100%;
        }
      `
    )
  }
`;

export default Nav;
