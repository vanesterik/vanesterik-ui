import clsx from 'clsx'

import { card } from '../lib/card'
import { layout } from '../lib/layout'
import { text } from '../lib/text'

export const Component = () => (
  <div className={clsx(card(), layout(), text({ intent: 'label' }))}>
    Layout
  </div>
)
