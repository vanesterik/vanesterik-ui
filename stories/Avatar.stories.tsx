import { type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { avatar } from '../lib/avatar'
import { stack } from '../lib/stack'

const Avatar = ({
  children,
  variant,
}: PropsWithChildren<VariantProps<typeof avatar>>) => (
  <div className={avatar({ variant })}>{children}</div>
)

export const Set = () => (
  <div className={stack({ direction: 'row' })}>
    {['user', 'assistant', 'system'].map((variant) => (
      <Avatar
        key={variant}
        variant={variant as VariantProps<typeof avatar>['variant']}
      />
    ))}
  </div>
)
