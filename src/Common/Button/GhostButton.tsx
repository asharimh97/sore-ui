import BaseButton, { styled, css } from "./BaseButton";

const GhostButton = styled(BaseButton)`
  background: transparent;

  ${({ danger }) =>
    danger &&
    css`
      background-color: transparent;
      color: watermelon;
    `}

  ${({ primary }) =>
    primary &&
    css`
      background-color: transparent;
      color: primary-500;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: secondary-500;
    `}
`;

export default GhostButton;
