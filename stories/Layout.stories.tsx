import { cx } from 'class-variance-authority'

import { card } from '../lib/card'
import { layout } from '../lib/layout'
import { text } from '../lib/text'

export const Component = () => (
  <div className={cx(card(), layout(), text({ intent: 'label' }))}>Layout</div>
)
