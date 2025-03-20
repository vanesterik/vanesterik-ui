import { cva } from 'class-variance-authority'

export const toast = cva(
  [
    'flex-col',
    'flex',
    'font-normal',
    'max-w-60',
    'p-2',
    'rounded',
    'text-white',
    'text-sm',
    'w-full',
  ],
  {
    variants: {
      variant: {
        error: ['bg-error-500'],
        info: ['bg-info-500'],
        success: ['bg-success-500'],
        warning: ['bg-warning-500'],
      },
    },
  },
)
