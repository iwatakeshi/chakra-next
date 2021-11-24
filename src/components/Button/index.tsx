import React from 'react'

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
import { isRelativeHref } from "../../utils/is-relative-href";
import { Url } from '../../types/url';

interface Props {
  href?: string
  next?: Omit<LinkProps, 'href'>
}

export type ButtonProps = Props & ChakraButtonProps

export default function Button({ href, next, ...props }: ButtonProps) {
  // Check if href is a relative url
  if (isRelativeHref(href)) return (
    <NextLink href={href as Url} passHref {...next}>
      <ChakraButton as="a" {...props} />
    </NextLink>
  )

  // Check if href is still valid
  if (href) return (
    <ChakraButton as={'a'} href={href} {...props} />
  )

  // Otherwise, we'll use a Chakra's Button
  return <ChakraButton {...props} />
}