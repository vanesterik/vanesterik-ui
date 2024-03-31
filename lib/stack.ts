import { cva } from 'class-variance-authority'

export const stack = cva(['flex'], {
  variants: {
    direction: {
      row: ['flex-row'],
      column: ['flex-col'],
    },
    gap: {
      sm: ['gap-1.5'],
      md: ['gap-3'],
      lg: ['gap-6'],
      xl: ['gap-12'],
    },
    items: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      normal: ['items-normal'],
    },
    justify: {
      start: ['justify-start'],
      center: ['justify-center'],
      end: ['justify-end'],
      between: ['justify-between'],
      normal: ['justify-normal'],
    },
  },
  defaultVariants: {
    direction: 'column',
    gap: 'sm',
    items: 'normal',
    justify: 'normal',
  },
})
