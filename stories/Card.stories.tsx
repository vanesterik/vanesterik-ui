import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { card } from '../lib/card'
import { text } from '../lib/text'

const Card = ({ children }: { children?: ReactNode }) => (
  <div className={cx(card(), text({ intent: 'label' }), 'max-w-xs')}>
    {children}
  </div>
)

export const Component = () => <Card>Card</Card>
