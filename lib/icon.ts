import { cva, VariantProps } from 'class-variance-authority'

export const icon = cva(
  ['font-icon', 'text-xs', 'text-black', 'dark:text-white'],
  {
    variants: {
      name: {
        lightmode: "before:content-['1']",
        darkmode: "before:content-['2']",
        settings: "before:content-['3']",
        return: "before:content-['4']",
        west: "before:content-['5']",
        east: "before:content-['6']",
        close: "before:content-['7']",
      },
    },
  },
)

export type IconVariant = VariantProps<typeof icon>['name']
