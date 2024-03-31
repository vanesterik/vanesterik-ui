import { prose } from '../lib/prose'
import Markdown from 'react-markdown'

const content = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

- This is a list item.
- This is another list item.
- This is a third list item.

1. This is a numbered list item.
2. This is another numbered list item.
3. This is a third numbered list item.

This is a [link](https://example.com).

This is an *emphasis*.

This is a **strong emphasis**.
`

export const Article = () => (
  <div className={prose()}>
    <Markdown>{content}</Markdown>
  </div>
)
