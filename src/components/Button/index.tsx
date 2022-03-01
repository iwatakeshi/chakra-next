import React, { AnchorHTMLAttributes } from 'react'

import { Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
import { isRelativeHref } from "../../utils/is-relative-href";
import { Url } from '../../types/url';
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  next?: Omit<LinkProps, keyof AnchorHTMLAttributes<HTMLAnchorElement>>
}

export type ButtonProps = Props & ChakraButtonProps

const Button = forwardRef<ButtonProps, 'a'>(({ href, next, ...props }, ref) => {
  // Check if href is a relative url
  if (isRelativeHref(href)) return (
    <NextLink href={href as Url} {...{ passHref: true, ...next }}>
      <ChakraButton {...props} ref={ref} />
    </NextLink>
  )

  // Otherwise, we'll just pass the props to Chakra's Link
  return <ChakraButton href={href} {...props} ref={ref} />
})

export default Button