import { type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { button } from '../lib/button'
import { stack } from '../lib/stack'

const Button = ({
  children,
  variant,
}: PropsWithChildren<VariantProps<typeof button>>) => (
  <button className={button({ variant })}>{children}</button>
)

export const Set = () => (
  <div className={stack({ direction: 'row' })}>
    {['primary', 'secondary', 'ghost'].map((variant) => (
      <Button
        key={variant}
        variant={variant as VariantProps<typeof button>['variant']}
      >
        {variant}
      </Button>
    ))}
  </div>
)
