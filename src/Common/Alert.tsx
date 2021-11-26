import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, x, styled, css } from "../config/xstyled.config";
import Text from "./Text";
import Box from "./Box";

interface AlertProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "type"> {
  closable?: boolean;
  message?: React.ReactNode;
  description?: React.ReactNode;
  type?: "success" | "info" | "warning" | "error";
}

const alertColor = {
  info: "light-blue",
  success: "green",
  warning: "amber",
  error: "red",
};

const AlertWrapper = styled(x.div)<AlertProps>`
  align-items: center;
  border: solid 1px;
  color: cool-gray-800;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  width: 100%;

  ${({ type }) =>
    type &&
    css`
      border-color: ${`${alertColor[type]}-400`};
      background-color: ${`${alertColor[type]}-200-a50`};
    `}
`;

const Alert = ({
  type = "info",
  message,
  description,
  ...props
}: AlertProps) => {
  const messageStyle = description
    ? {
        size: "17px",
        mb: "8px",
        weight: 600,
      }
    : {};

  return (
    <>
      <AlertWrapper type={type} {...props}>
        <Box>
          <Text size="14px" {...messageStyle}>
            {message}
          </Text>
          {description && <Text size="13px">{description}</Text>}
        </Box>
      </AlertWrapper>
    </>
  );
};

export default Alert;
