import React from "react";
import styled, {
  createCss,
  compose,
  ITheme,
  Theme,
  borderRadius,
} from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "../config/xstyled.config";
import {
  ImageProps as CustomImageProps,
  imageProps as customImageProps,
} from "../utils/image-props";

import Flex from "./Flex";
import Text from "./Text";

interface ImageProps<T extends ITheme = Theme>
  extends SystemStyleProps<T>,
    CustomImageProps<T>,
    Omit<React.ImgHTMLAttributes<ImageProps>, "color" | "height" | "width"> {
  caption?: string;
  autofit?: boolean;
}

const imageProps = compose<ImageProps>(systemProps, customImageProps);

const { x } = createCss(imageProps);

const { div } = x;

const Img = (props: ImageProps) => <x.img {...props} />;

const ImageWrapper = styled(div)`
  position: relative;

  img {
    border-radius: inherit;
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Image: React.FC<ImageProps> = ({
  caption,
  autofit,
  src,
  alt,
  ...props
}) => {
  const renderContent = () => {
    if (autofit) {
      return (
        <ImageWrapper {...props}>
          <img alt={alt} src={src} />
        </ImageWrapper>
      );
    }

    return <Img src={src} alt={alt} {...props} />;
  };

  // If given caption render an image inside a box
  if (caption) {
    return (
      <Flex alignItems="center" flexDirection="column" w="100%">
        {renderContent()}
        <Text color="blue-gray-300" italic size="small" mt="16px">
          {caption}
        </Text>
      </Flex>
    );
  }

  return renderContent();
};

export default Image;
