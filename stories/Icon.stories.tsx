import { VariantProps, cx } from 'class-variance-authority'

import { card } from '../lib/card'
import { icon } from '../lib/icon'
import { text } from '../lib/text'
import { stack } from '../lib/stack'

export const Set = () => (
  <div className="grid grid-cols-5 gap-1.5">
    {[
      'lightmode',
      'darkmode',
      'settings',
      'return',
      'west',
      'east',
      'close',
    ].map((name) => (
      <div className={card()} key={name}>
        <div className={stack({ direction: 'row' })}>
          <div
            className={cx(
              icon({
                name: name as VariantProps<typeof icon>['name'],
              }),
              'text-black',
              'dark:text-white',
            )}
          />
          <div className={text({ intent: 'label' })}>{name}</div>
        </div>
      </div>
    ))}
  </div>
)
