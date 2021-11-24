import React from 'react'

import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { isRelativeHref } from "../../utils/is-relative-href";
import { Url } from '../../types/url';

interface Props {
  href: string
  next?: Omit<LinkProps, 'href'>
}

export type IconButtonProps = Props & ChakraIconButtonProps

export default function IconButton({ href, next, ...props }: IconButtonProps) {
  // Check if href is a relative url
  if (isRelativeHref(href)) return (
    <Link href={href as Url} passHref {...next}>
      <ChakraIconButton as="a" {...props} />
    </Link>
  )

  // Check if href is still valid
  if (href) return (
    <ChakraIconButton as={"a"} href={'href'} {...props} />
  )
  // Otherwise, we'll use a Chakra's IconButton
  return <ChakraIconButton {...props} />
}