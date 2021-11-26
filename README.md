# chakra-next

A set of components to integrate with Chakra UI and Next.js

## Usage

### Installation

```bash
npm add @iwatakeshi/chakra-next
```

### Components

> Note: All components will automatically wrap Chakra UI's components with Next's `Link` when `href` is a relative url.

#### Link

```tsx
import { Link } from "@iwatakeshi/chakra-next";

<Link href="/about" />;
// => <NextLink href="/about" passHref><Link /></NextLink>
```

#### Button

```tsx
import { Button } from "@iwatakeshi/chakra-next";

<Button href="/about" />;
// => <NextLink href="/about" passHref><Button as="a" /></NextLink>
```

### IconButton

```tsx
import { IconButton } from "@iwatakeshi/chakra-next";

<IconButton href="/about" />;
// => <NextLink href="/about" passHref><IconButton as="a" /></NextLink>
```

### Image

```tsx
import { Image } from '@iwatakeshi/chakra-next';

<Image src="..." />

// or

<Image src="...">
{
  (image) => <div style={'...'}>{image}</div>
}
</Image>
```
