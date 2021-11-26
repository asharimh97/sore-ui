import React from "react";
import BaseButton, { ButtonProps } from "./BaseButton";
import GhostButton from "./GhostButton";
import styled from "@xstyled/styled-components";

/**
 * @todo Render different button based on its type (ghost, link, text)
 *
 */

const IconWrapper = styled.span`
  margin-right: 8px;
`;

const Button: React.FC<ButtonProps> = ({ ghost, icon, children, ...props }) => {
  let Component = BaseButton;
  if (ghost) {
    Component = GhostButton;
  }

  const renderIcon = () => {
    if (icon) {
      return <IconWrapper>{icon}</IconWrapper>;
    }

    return null;
  };

  return (
    <Component {...props}>
      {renderIcon()}
      {children}
    </Component>
  );
};

export default Button;
