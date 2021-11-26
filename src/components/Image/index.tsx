import { chakra, ImageProps as ChakraImageProps } from "@chakra-ui/react";
import NextImage from "next/image";
import { ImageProps as NextImageProps, ImageLoaderProps as NextImageLoadProps } from "../../types/image";
import React from 'react'

const ChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop: any) =>
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


export type ImageProps = Omit<ChakraImageProps, keyof NextImageProps> &
  Omit<NextImageProps, keyof ChakraImageProps> & { src: string }

export type ImageLoaderProps = NextImageLoadProps

export default function Image(props: ImageProps) {
  return <ChakraImage {...props} />
}