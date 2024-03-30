import { cva } from 'class-variance-authority'

export const input = cva(
  [
    'appearance-none',
    'bg-primary-100',
    'text-black',
    'dark:bg-primary-900',
    'dark:text-white',
    'cursor-pointer',
    'font-mono',
    'font-normal',
    'h-8',
    'p-2',
    'rounded',
    'text-xs',
    'w-full',
    'focus:outline',
    'focus:outline-offset-2',
    'focus:outline-secondary-500',
  ],
  {
    variants: {
      element: {
        textarea: ['box-border', 'resize-none'],
        select: [
          'bg-[length:9px_5px]',
          'bg-[right_0.5rem_center]',
          'bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACaADAAQAAAABAAAABQAAAADqsnSgAAAAO0lEQVQIHWNgYGBoAOL/OPA9oLgcEINBA5BEV4iiAKIM1UQUBcwwFUD6ABAzArE8EDsA8SMgxgn40WUARckSfXCcprYAAAAASUVORK5CYII=")]',
          'bg-no-repeat',
          'text-left',
          'dark:bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACaADAAQAAAABAAAABQAAAADqsnSgAAAALklEQVQIHWP4//9/AxDjAveAEnIMIABkYFOIUABWhakQUwGaQtwKkBTyw9gwGgD1XVypCGnI8AAAAABJRU5ErkJggg==")]',
        ],
      },
    },
  },
)
