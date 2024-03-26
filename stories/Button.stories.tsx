import { type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { button } from '../lib/button'
import { stack } from '../lib/stack'

const Button = ({
  children,
  intent,
}: PropsWithChildren<VariantProps<typeof button>>) => (
  <button className={button({ intent })}>{children}</button>
)

export const Set = () => (
  <div className={stack({ direction: 'row' })}>
    {['primary', 'secondary', 'ghost'].map((variant) => (
      <Button
        key={variant}
        intent={variant as VariantProps<typeof button>['intent']}
      >
        {variant}
      </Button>
    ))}
  </div>
)
