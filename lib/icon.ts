import { cva, VariantProps } from 'class-variance-authority'

export const icon = cva(['font-icon', 'text-xs'], {
  variants: {
    name: {
      cross: 'before:content-["ea01"]',
      east: 'before:content-["ea02"]',
      error: 'before:content-["ea03"]',
      gear: 'before:content-["ea04"]',
      info: 'before:content-["ea05"]',
      moon: 'before:content-["ea06"]',
      return: 'before:content-["ea07"]',
      success: 'before:content-["ea08"]',
      sun: 'before:content-["ea09"]',
      warning: 'before:content-["ea0a"]',
      west: 'before:content-["ea0b"]',
    },
  },
})

export type IconVariant = VariantProps<typeof icon>['name']
