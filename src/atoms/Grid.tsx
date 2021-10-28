import React from "react";
import { style } from "@xstyled/styled-components";
import { BaseStyledComponentProps } from "../../../@types/components-props";
import {
  generalProps,
  GridProps as GridPropsAlias,
  gridProps,
  GeneralProps
} from "../../../@types/component-aliases";
import Base from "./Base";

const componentProps = [...generalProps, ...gridProps];

const mappedGridProps = componentProps.map(({ prop, css }) =>
  style({ prop, cssProperty: css })
);

const Comp = Base.extend(...mappedGridProps);

interface GridProps
  extends BaseStyledComponentProps,
    GridPropsAlias,
    GeneralProps {}

const Grid: React.FC<GridProps> = props => {
  return <Comp.div {...props} display="grid" />;
};

export default Grid;
