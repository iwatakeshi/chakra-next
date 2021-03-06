import React from 'react'

import { forwardRef, Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { isRelativeHref } from "../../utils/is-relative-href";
import { Url } from '../../types/url';

interface Props {
  href: string
  next?: Omit<NextLinkProps, 'href'>
}

export type LinkProps = Props & ChakraLinkProps

const Link = forwardRef<LinkProps, 'a'>(({ href, next, ...props }, ref) => {
  // Check if href is a relative url
  if (isRelativeHref(href)) return (
    <NextLink href={href as Url} {...{ passHref: true, ...next }}>
      <ChakraLink {...props} ref={ref} />
    </NextLink>
  )

  // Otherwise, we'll just pass the props to Chakra's Link
  return <ChakraLink href={href} {...props} ref={ref} />
})

export default Link