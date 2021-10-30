import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "../config/xstyled.config";
import {
  FlexProps as CustomFlexProps,
  flexProps as customFlexProps,
} from "../utils/flex-props";

interface FlexProps<T extends ITheme = Theme>
  extends SystemStyleProps<T>,
    CustomFlexProps<T> {}

const flexProps = compose<FlexProps>(systemProps, customFlexProps);

const { x } = createCss(flexProps);

const Flex: React.FC<FlexProps> = (props) => {
  return <x.div {...props} display="flex" />;
};

export default Flex;
