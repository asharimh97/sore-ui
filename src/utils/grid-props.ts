import * as CSS from "csstype";
import {
  style,
  SystemProp,
  Theme,
  ITheme,
  compose,
} from "@xstyled/styled-components";

// Grid column
interface ColumnProps<T extends ITheme = Theme> {
  column?: SystemProp<CSS.Property.GridTemplateColumns, T>;
}

const column = style<ColumnProps>({
  prop: "column",
  css: "gridTemplateColumns",
});

// Grid row
interface RowProps<T extends ITheme = Theme> {
  row?: SystemProp<CSS.Property.GridTemplateRows, T>;
}

const row = style<RowProps>({
  prop: "row",
  css: "gridTemplateRows",
});

export interface GridProps<T extends ITheme = Theme>
  extends ColumnProps<T>,
    RowProps<T> {}

export const gridProps = compose<GridProps>(column, row);
