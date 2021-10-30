import {
  createCss,
  system,
  compose,
  style,
  SystemProps,
  ITheme,
  Theme,
} from "@xstyled/styled-components";
import { GeneralProps, generalProps } from "../utils/general-props";

export interface SystemStyleProps<T extends ITheme = Theme>
  extends SystemProps<T>,
    GeneralProps<T> {}

export const systemProps = compose<SystemStyleProps>(system, generalProps);

export const { css, styled, x, createGlobalStyle } = createCss(systemProps);
