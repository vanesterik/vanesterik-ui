import { cx } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { card } from '../lib/card'
import { footer } from '../lib/footer'
import { header } from '../lib/header'
import { main } from '../lib/main'
import { text } from '../lib/text'
import { layout } from '../lib/layout'

export const Component = () => (
  <div className={layout()}>
    <Card className={header()}>Header</Card>
    <Card className={main()}>Main</Card>
    <Card className={footer()}>Footer</Card>
  </div>
)

const Card = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={cx(card(), text({ intent: 'label' }), className)}>
    {children}
  </div>
)
