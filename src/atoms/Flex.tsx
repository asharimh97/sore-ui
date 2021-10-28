import { FlexboxesProps, style } from "@xstyled/styled-components";
import React from "react";
import { BaseStyledComponentProps } from "../../../@types/components-props";
import { flexProps, generalProps } from "../../../@types/component-aliases";
import Base from "./Base";

const componentProps = [...flexProps, ...generalProps];

const mappedFlexProps = componentProps.map(({ css, prop }) =>
  style({
    prop,
    cssProperty: css
  })
);

type ShortenedFlexProps = {
  // eslint-disable-next-line no-unused-vars
  [K in typeof componentProps[number]["prop"]]?: string | number | object;
};

const Comp = Base.extend(...mappedFlexProps);

export interface FlexProp
  extends BaseStyledComponentProps,
    ShortenedFlexProps,
    FlexboxesProps {
  [key: string]: any;
}

const Flex: React.FC<FlexProp> = ({ display = "flex", ...props }) => {
  return <Comp.div display={display} {...props} />;
};

export default Flex;
