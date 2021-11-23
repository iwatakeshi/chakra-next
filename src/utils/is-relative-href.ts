import { at } from "./at";

export const isRelativeHref = (href: string | undefined | null) => at(href, 0) === '/';