import React from "react";
import {
  BackgroundsProps,
  BordersProps,
  ColorProps,
  EffectsProps,
  InteractivityProps,
  ITheme,
  LayoutProps,
  SizingProps,
  SpaceProps,
  Theme,
  TransitionProps
} from "@xstyled/styled-components";

export interface AnyComponentProp {
  [key: string]: any;
}

export type BaseStyledComponentProps<T extends ITheme = Theme> = {
  children?: React.ReactNode;
  as?: any;
  forwardedAs?: any;
} & SpaceProps<T> &
  LayoutProps<T> &
  ColorProps<T> &
  TransitionProps<T> &
  SizingProps<T> &
  BordersProps<T> &
  BackgroundsProps<T> &
  EffectsProps<T> &
  InteractivityProps<T>;
