import { type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { button } from '../lib/button'
import { stack } from '../lib/stack'

const Button = ({
  children,
  disabled,
  variant,
}: PropsWithChildren<VariantProps<typeof button> & { disabled?: boolean }>) => (
  <button disabled={disabled} className={button({ variant })}>
    {children}
  </button>
)

export const Set = () => (
  <div className={stack()}>
    <Row />
    <Row disabled />
  </div>
)

const Row = ({ disabled }: { disabled?: boolean }) => (
  <div className={stack({ direction: 'row' })}>
    {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
      <Button disabled={disabled} key={variant} variant={variant}>
        {variant}
      </Button>
    ))}
  </div>
)
