import { tooltip } from '../lib/tooltip'

export const Component = () => (
  <div className={tooltip()} data-label="Tooltip">
    <span className="text-black dark:text-white">Hover me</span>
  </div>
)
