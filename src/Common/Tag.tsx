import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "../config/xstyled.config";
import {
  TagProps as CustomTagProps,
  tagProps as customTagProps,
} from "../utils/tag-props";
import { tagColors } from "../lib/constants";
import { generateFontColor } from "../lib/utils/color";

interface TagProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "color">,
    CustomTagProps {}

const tagProps = compose<TagProps>(systemProps, customTagProps);

const { x, styled, css } = createCss(tagProps);

const TagWrapper = styled.span<TagProps>`
  background-color: cool-gray-50;
  border: solid 1px;
  border-color: cool-gray-700;
  border-radius: 3px;
  color: cool-gray-700;
  display: inline-flex;
  margin-right: 4px;
  font-size: 13px;
  padding: 3px 6px;

  &:last-child {
    margin-right: 0;
  }

  // implement coloring
  ${({ color }) =>
    color &&
    css({
      backgroundColor: tagColors[color]?.bg || color,
      borderColor: tagColors[color]?.fg || color,
      color: tagColors[color]?.fg || generateFontColor(color),
    })}
`;

const Tag: React.FC<TagProps> = (props) => {
  return <TagWrapper {...props} />;
};

export default Tag;
