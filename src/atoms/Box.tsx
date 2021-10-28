import React from "react";
import { style } from "@xstyled/styled-components";
import { BaseStyledComponentProps } from "../../@types/component-props";
import { GeneralProps, generalProps } from "../../@types/component-aliases";
import Base from "./Base";

const boxProps = generalProps.map(({ prop, css }) =>
  style({ prop, cssProperty: css })
);

const Comp = Base.extend(...boxProps);

export interface BoxProps extends BaseStyledComponentProps, GeneralProps {}

const Box: React.FC<BoxProps> = props => {
  return <Comp.div {...props} />;
};

export default Box;
