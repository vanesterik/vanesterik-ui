import { VariantProps, cx } from 'class-variance-authority'
import BaseTextarea from 'react-textarea-autosize'

import { input } from '../lib/input'

export const Error = () => (
  <input
    className={cx(input({ variant: 'error' }), 'max-w-xs')}
    placeholder="Type here"
    type="text"
  />
)

export const Input = () => (
  <input
    className={cx(input(), 'max-w-xs')}
    placeholder="Type here"
    type="text"
  />
)

export const Select = () => (
  <select className={cx(input({ element: 'select' }), 'max-w-xs')}>
    {Array.from(Array(3).keys()).map((index) => (
      <option key={index}>{`Option ${index}`}</option>
    ))}
  </select>
)

export const Textarea = () => (
  <BaseTextarea
    className={cx(input({ element: 'textarea' }), 'max-w-xs')}
    minRows={3}
    maxRows={6}
    placeholder="Type here"
  />
)
