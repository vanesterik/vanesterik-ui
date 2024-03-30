import { cva, VariantProps } from 'class-variance-authority'

export const icon = cva(['font-icon', 'text-xs'], {
  variants: {
    name: {
      sun: "before:content-['1']",
      moon: "before:content-['2']",
      gear: "before:content-['3']",
      return: "before:content-['4']",
      west: "before:content-['5']",
      east: "before:content-['6']",
      cross: "before:content-['7']",
    },
  },
})

export type IconVariant = VariantProps<typeof icon>['name']
