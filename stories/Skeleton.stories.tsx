import { cx } from 'class-variance-authority'
import { skeleton } from '../lib/skeleton'
import { stack } from '../lib/stack'

export const Example = () => (
  <div className={stack({ gap: 'md' })}>
    {['max-w-80', 'max-w-96', 'max-w-72'].map((maxWidth) => (
      <div className={cx(skeleton(), maxWidth)} key={maxWidth} />
    ))}
  </div>
)
