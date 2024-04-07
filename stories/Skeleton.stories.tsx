import { cx } from 'class-variance-authority'
import { skeleton } from '../lib/skeleton'
import { stack } from '../lib/stack'

export const Example = () => (
  <div className={stack({ gap: 'md' })}>
    {['max-w-sm', 'max-w-md', 'max-w-xs'].map((maxWidth) => (
      <div className={cx(skeleton(), maxWidth)} key={maxWidth} />
    ))}
  </div>
)
