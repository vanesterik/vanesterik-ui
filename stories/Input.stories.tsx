import { cx } from 'class-variance-authority'
import TextareaAutosize from 'react-textarea-autosize'

import { input } from '../lib/input'
import { KeyboardEvent } from 'react'

export const Input = () => (
  <input
    className={cx(input(), 'max-w-xs', 'w-full')}
    placeholder="Type here"
    type="text"
  />
)

export const Textarea = () => (
  <TextareaAutosize
    className={cx(input({ element: 'textarea' }), 'max-w-xs', 'w-full')}
    minRows={1}
    maxRows={5}
    placeholder="Type here"
  />
)
