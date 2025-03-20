import { cva } from 'class-variance-authority'

export const input = cva(
  [
    'appearance-none',
    'text-black',
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
  ],
  {
    variants: {
      element: {
        select: [
          'bg-[length:9px_5px]',
          'bg-[right_0.5rem_center]',
          'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgOCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOCAwSDBMNCA0TDggMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=")]',
          'bg-no-repeat',
          'text-left',
          'dark:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgOCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOCAwSDBMNCA0TDggMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")]',
        ],
        textarea: ['box-border', 'resize-none'],
      },
      variant: {
        default: [
          'bg-primary-100',
          'dark:bg-primary-900',
          'focus:outline-secondary-500',
        ],
        error: ['bg-error-50', 'dark:bg-error-950', 'focus:outline-error-500'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
