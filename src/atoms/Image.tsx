/* eslint-disable react/prop-types */
import styled, { style } from "@xstyled/styled-components";
import React from "react";
import { BaseStyledComponentProps } from "../../../@types/components-props";
import {
  generalProps,
  GeneralProps,
  ImageProps as BaseImageProps,
  imageProps
} from "../../../@types/component-aliases";
import Base from "./Base";
import Flex from "./Flex";
import Text from "./Text";

const componentProps = [...generalProps, ...imageProps].map(({ css, prop }) =>
  style({
    prop,
    cssProperty: css
  })
);

const Comp = Base.extend(...componentProps);

const { img, div } = Comp;

const Img = styled(img).attrs({ as: "img" })``;

const ImageWrapper = styled(div)`
  position: relative;

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

interface ImageProps
  extends BaseStyledComponentProps,
    GeneralProps,
    BaseImageProps,
    Omit<React.ImgHTMLAttributes<ImageProps>, "color" | "height" | "width"> {
  autofit?: boolean;
  caption?: string;
}

const Image: React.FC<ImageProps> = ({
  autofit,
  src,
  alt,
  caption,
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
        <Text color="text80" italic size="small" mt="16px">
          {caption}
        </Text>
      </Flex>
    );
  }

  // else only render image
  return renderContent();
};

export default Image;
