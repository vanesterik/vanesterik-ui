import { cx } from 'class-variance-authority'

import { card } from '../lib/card'
import { container } from '../lib/container'
import { text } from '../lib/text'

export const Component = () => (
  <div className={cx(card(), container(), text({ intent: 'label' }))}>
    Container
  </div>
)
