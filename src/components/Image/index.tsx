import { chakra, ImageProps as ChakraImageProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps, ImageLoaderProps as NextImageLoadProps } from "next/image";
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
  Omit<NextImageProps, keyof ChakraImageProps> & {
  width?: string
  height?: string
} & Pick<NextImageProps, 'placeholder' | 'src' | 'alt'>

export type ImageLoaderProps = NextImageLoadProps

export default function Image(props: ImageProps) {
  return <ChakraImage {...props} />
}
