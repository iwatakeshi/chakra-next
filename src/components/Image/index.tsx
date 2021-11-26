import { chakra, ImageProps as ChakraImageProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps, ImageLoaderProps as NextImageLoadProps } from "next/image";
import { Renderable } from '../../types/renderable';
import React from 'react'

const ChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
      'style',
      'layout',
    ].includes(prop),
});


type ChakraNextImageProps = Omit<ChakraImageProps, keyof NextImageProps> &
  Omit<NextImageProps, keyof ChakraImageProps>

export interface ImageProps extends ChakraNextImageProps, Partial<Renderable> {
  src: string
}

export type ImageLoaderProps = NextImageLoadProps

export default function Image({ children, ...props }: ImageProps) {
  const image = <ChakraImage {...props} />
  return children ? children(image) : image
}