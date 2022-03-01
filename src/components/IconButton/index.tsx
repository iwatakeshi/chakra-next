import React from 'react'

import { forwardRef, IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { isRelativeHref } from "../../utils/is-relative-href";
import { Url } from '../../types/url';

interface Props {
  href: string
  next?: Omit<LinkProps, 'href'>
}

export type IconButtonProps = Props & ChakraIconButtonProps

const IconButton = forwardRef<IconButtonProps, 'a'>(({ href, next, ...props }, ref) => {
  // Check if href is a relative url
  if (isRelativeHref(href)) return (
    <Link href={href as Url} {...{ passHref: true, ...next }}>
      <ChakraIconButton {...props} ref={ref} />
    </Link>
  )

  // Otherwise, we'll just pass the props to Chakra's Link
  return <ChakraIconButton href={href} {...props} ref={ref} />
})

export default IconButton