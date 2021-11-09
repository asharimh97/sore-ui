import React from "react";
import { ITheme, Theme } from "@xstyled/styled-components";
import { x, styled, SystemStyleProps } from "../config/xstyled.config";
import Text from "./Text";

const { div } = x;

/**
 * @todo
 * It should accept props:
 * - children
 * - align/orientation
 */

const SimpleDivider = styled(x.div)`
  border-top: solid 1px;
  border-color: cool-gray-300;
  height: 1px;
  margin: 16px 0;
  width: 100%;
  min-width: 100%;
`;

const TextWrapper = styled(Text)`
  color: cool-gray-700;
  font-size: 14px;
  padding: 0 1em;
`;

const DividerWrapper = styled(x.div)`
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
  }
`;

interface DividerProps<T extends ITheme = Theme> extends SystemStyleProps<T> {}

const Divider: React.FC<DividerProps> = ({ children, ...props }) => {
  if (!children) {
    return <SimpleDivider {...props} />;
  }

  return (
    <DividerWrapper>
      <TextWrapper>{children}</TextWrapper>
    </DividerWrapper>
  );
};

export default Divider;
