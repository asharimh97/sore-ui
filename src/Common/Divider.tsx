import React from "react";
import { ITheme, Theme } from "@xstyled/styled-components";
import { x, styled, SystemStyleProps, css } from "../config/xstyled.config";
import Text from "./Text";

const { div } = x;

interface DividerProps<T extends ITheme = Theme> extends SystemStyleProps<T> {
  orientation?: "left" | "center" | "right";
}

const orientStyle = {
  left: {
    before: "20%",
    after: "80%",
  },
  right: {
    before: "80%",
    after: "20%",
  },
  center: {
    before: "50%",
    after: "50%",
  },
};

type orientStyleType = keyof typeof orientStyle;

const SimpleDivider = styled(x.div)`
  border-top: solid 1px;
  border-color: cool-gray-300;
  height: 1px;
  margin: 20px 0;
  width: 100%;
  min-width: 100%;
`;

const TextWrapper = styled(Text)`
  color: cool-gray-700;
  font-size: 14px;
  padding: 0 1em;
`;

const DividerWrapper = styled(x.div)<DividerProps>`
  align-items: center;
  clear: both;
  display: flex;
  justify-content: center;
  margin: 16px 0;
  position: relative;
  width: 100%;
  min-width: 100%;

  &:before {
    content: "";
    border-top: solid 1px;
    border-color: cool-gray-300;
    height: 1px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    width: 50%;

    ${({ orientation }) =>
      orientation &&
      css({
        width: orientStyle[orientation].before,
      })}
  }

  &:after {
    content: "";
    border-top: solid 1px;
    border-color: cool-gray-300;
    height: 1px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    width: 50%;

    ${({ orientation }) =>
      orientation &&
      css({
        width: orientStyle[orientation].after,
      })}
  }
`;

const Divider: React.FC<DividerProps> = ({ children, ...props }) => {
  if (!children) {
    return <SimpleDivider {...props} />;
  }

  return (
    <DividerWrapper {...props}>
      <TextWrapper>{children}</TextWrapper>
    </DividerWrapper>
  );
};

export default Divider;
