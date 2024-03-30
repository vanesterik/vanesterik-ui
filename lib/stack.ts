import { cva } from 'class-variance-authority'

export const stack = cva(['flex'], {
  variants: {
    direction: {
      row: ['flex-row'],
      column: ['flex-col'],
    },
    gap: {
      small: ['gap-1.5'],
      medium: ['gap-3'],
      large: ['gap-6'],
    },
    items: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
    },
    justify: {
      start: ['justify-start'],
      center: ['justify-center'],
      end: ['justify-end'],
      between: ['justify-between'],
    },
  },
  defaultVariants: {
    direction: 'column',
    gap: 'small',
    items: 'start',
    justify: 'start',
  },
})
