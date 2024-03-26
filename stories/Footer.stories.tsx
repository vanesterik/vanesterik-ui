import { cx } from 'class-variance-authority'

import { card } from '../lib/card'
import { footer } from '../lib/footer'
import { text } from '../lib/text'

export const Component = () => (
  <footer className={cx(card(), footer(), text({ intent: 'label' }))}>
    Footer
  </footer>
)
