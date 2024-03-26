import { cva } from 'class-variance-authority'

export const input = cva(
  [
    'appearance-none',
    'bg-primary-100',
    'text-black',
    'dark:bg-primary-900',
    'dark:text-white',
    'font-mono',
    'font-normal',
    'h-8',
    'p-2',
    'rounded',
    'text-xs',
    'focus:outline',
    'focus:outline-offset-2',
    'focus:outline-secondary-500',
  ],
  {
    variants: {
      element: {
        textarea: ['box-border', 'resize-none'],
      },
    },
  },
)
