import { x, styled } from "../config/xstyled.config";

const { div } = x;

/**
 * @todo
 * It should accept props:
 * - children
 * - align/orientation
 */

const Divider = styled(x.div)`
  border-top: solid 1px cool-gray-300;
  height: 1px;
  width: 100%;
  min-width: 100%;
`;

export default Divider;
