import { cva } from 'class-variance-authority'

export const skeleton = cva([
  'animate-pulse',
  'bg-primary-200',
  'h-4',
  'rounded-lg',
  'w-full',

  'dark:bg-primary-800',
])
