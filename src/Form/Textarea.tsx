/* eslint-disable no-use-before-define */
import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "../config/xstyled.config";
import { Box } from "..";

interface TextareaProps<T extends ITheme = Theme>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<SystemStyleProps<T>, "color"> {}

function Textarea(props: TextareaProps) {
  return (
    <Box
      as="textarea"
      w="100%"
      border="solid 1px"
      borderColor="cool-gray-400"
      p="8px"
      {...props}
    />
  );
}

export default Textarea;
