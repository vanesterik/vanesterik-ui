import { VariantProps, cx } from 'class-variance-authority'
import Textarea from 'react-textarea-autosize'

import { input } from '../lib/input'
import { stack } from '../lib/stack'

export const Set = () => (
  <div className={cx(stack(), 'max-w-xs')}>
    <input className={input()} placeholder="Input" type="text" />
    <input
      className={input({ variant: 'error' })}
      placeholder="Input with error"
      type="text"
    />
    <select className={input({ element: 'select' })}>
      {Array.from(Array(3).keys()).map((index) => (
        <option key={index}>{`Select ${index}`}</option>
      ))}
    </select>
    <Textarea
      className={input({ element: 'textarea' })}
      minRows={3}
      maxRows={6}
      placeholder="Textarea"
    />
  </div>
)
