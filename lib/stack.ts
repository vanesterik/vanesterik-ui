import { cva } from 'class-variance-authority'

export const stack = cva(['flex'], {
  variants: {
    direction: {
      row: ['flex-row', 'gap-x-1.5', 'items-center'],
      column: ['flex-col', 'gap-y-1.5'],
    },
    items: {
      start: ['items-start'],
      end: ['items-end'],
      center: ['items-center'],
    },
    justify: {
      start: ['justify-start'],
      end: ['justify-end'],
      between: ['justify-between'],
    },
  },
  defaultVariants: {
    direction: 'column',
    items: 'start',
    justify: 'start',
  },
})
