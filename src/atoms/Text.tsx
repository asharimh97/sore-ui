import { style, TypographyProps } from "@xstyled/styled-components";
import React from "react";
import { BaseStyledComponentProps } from "../../../@types/components-props";
import { generalProps } from "../../../@types/component-aliases";
import {
  mappedTextProps,
  CustomTextProps,
  ShortenTextProps
} from "../../../@types/text-props";
import Base from "./Base";

const componentProps = generalProps.map(({ css, prop }) =>
  style({ prop, cssProperty: css })
);

const Comp = Base.extend(...componentProps, ...mappedTextProps);

export interface TextProps
  extends Omit<BaseStyledComponentProps, "size">,
    TypographyProps,
    CustomTextProps,
    ShortenTextProps {
  [key: string]: any;
}

const Text: React.FC<TextProps> = props => {
  const defaultProps = {
    lineHeight: "130%",
    marginBottom: "0px",
    size: "regular",
    color: "text",
    family: "regular"
  };
  return <Comp.p {...defaultProps} {...props} />;
};

export default Text;
