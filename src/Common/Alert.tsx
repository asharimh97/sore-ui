import React from "react";
import { ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, x, styled, css } from "../config/xstyled.config";
import Text from "./Text";
import Box from "./Box";
import { IoCloseCircleOutline } from "react-icons/io5";

interface AlertProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "type"> {
  closable?: boolean;
  message: React.ReactNode;
  description?: React.ReactNode;
  type?: "success" | "info" | "warning" | "error";
}

const alertColor = {
  info: "light-blue",
  success: "green",
  warning: "amber",
  error: "red",
};

interface AlertWrapperProps extends Omit<AlertProps, "message"> {
  visible?: boolean;
}

const AlertWrapper = styled(x.div)<AlertWrapperProps>`
  align-items: center;
  border: solid 1px;
  color: cool-gray-800;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  padding: 10px 15px;
  visibility: hidden;
  width: 100%;
  transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${({ type }) =>
    type &&
    css`
      border-color: ${`${alertColor[type]}-400`};
      background-color: ${`${alertColor[type]}-200-a50`};
    `}

  ${({ description }) =>
    description &&
    css`
      align-items: flex-start;
    `}
`;

const IconWrapper = styled(x.span)`
  color: cool-gray-900-a50;
  cursor: pointer;
`;

const Alert = ({ type = "info", message, ...props }: AlertProps) => {
  const { description, closable } = props;

  const [visible, setVisible] = React.useState<boolean>(true);
  const messageStyle = description
    ? {
        size: "17px",
        mb: "8px",
        weight: 600,
      }
    : {};

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <AlertWrapper type={type} {...props} visible={visible}>
        <Box>
          <Text size="14px" {...messageStyle}>
            {message}
          </Text>
          {description && <Text size="13px">{description}</Text>}
        </Box>
        {closable && (
          <IconWrapper onClick={onClose}>
            <IoCloseCircleOutline />
          </IconWrapper>
        )}
      </AlertWrapper>
    </>
  );
};

export default Alert;
