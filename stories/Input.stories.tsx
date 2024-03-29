import { cx } from 'class-variance-authority'
import BaseTextarea from 'react-textarea-autosize'

import { input } from '../lib/input'

export const Input = () => (
  <input
    className={cx(input(), 'max-w-xs')}
    placeholder="Type here"
    type="text"
  />
)

export const Textarea = () => (
  <BaseTextarea
    className={cx(input({ element: 'textarea' }), 'max-w-xs')}
    minRows={3}
    maxRows={6}
    placeholder="Type here"
  />
)
