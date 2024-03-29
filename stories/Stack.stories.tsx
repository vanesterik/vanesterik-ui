import type { Story } from '@ladle/react'
import { VariantProps, cx } from 'class-variance-authority'

import { card } from '../lib/card'
import { stack } from '../lib/stack'
import { text } from '../lib/text'

export const Component: Story<VariantProps<typeof stack>> = (props) => (
  <div className={stack(props)}>
    {Array.from(Array(3).keys()).map((index) => (
      <div
        className={cx(card(), text({ intent: 'label' }))}
        key={index}
      >{`Item ${index}`}</div>
    ))}
  </div>
)

Component.argTypes = {
  direction: {
    options: ['row', 'column'],
    control: { type: 'radio' },
    defaultValue: 'column',
  },
  gap: {
    options: ['small', 'medium', 'large'],
    control: { type: 'select' },
    defaultValue: 'small',
  },
  items: {
    options: ['start', 'center', 'end'],
    control: { type: 'select' },
    defaultValue: 'start',
  },
  justify: {
    options: ['start', 'center', 'end', 'between'],
    control: { type: 'select' },
    defaultValue: 'start',
  },
}
