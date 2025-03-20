import { stack } from '../lib/stack'
import { toast } from '../lib/toast'

export const Set = () => (
  <div className={stack({ gap: 'md' })}>
    {(['success', 'info', 'warning', 'error'] as const).map((variant) => (
      <div className={toast({ variant })} key={variant}>
        {`${variant.charAt(0).toUpperCase()}${variant.slice(1)}`}
      </div>
    ))}
  </div>
)
