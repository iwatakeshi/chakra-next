import React from 'react'

import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { isRelativeHref } from "../../utils/is-relative-href";
import { Url } from '../../types/url';

interface Props {
  href: string
  next?: Omit<NextLinkProps, 'href'>
}

export type LinkProps = Props & ChakraLinkProps

export default function Link({ href, next, ...props }: LinkProps) {
  // Check if href is a relative url
  if (isRelativeHref(href)) return (
    <NextLink href={href as Url} passHref {...next}>
      <ChakraLink {...props} />
    </NextLink>
  )

  // Otherwise, we'll just pass the props to Chakra's Link
  return <ChakraLink href={href} {...props} />
}