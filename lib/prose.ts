import { cva } from 'class-variance-authority'

export const prose = cva([
  'prose',
  'prose-a:dark:text-white',
  'prose-a:text-black',
  'prose-em:dark:text-white',
  'prose-em:text-black',
  'prose-headings:dark:text-white',
  'prose-headings:text-black',
  'prose-li:dark:text-white',
  'prose-li:text-black',
  'prose-ol:dark:text-white',
  'prose-ol:text-black',
  'prose-p:dark:text-white',
  'prose-p:text-black',
  'prose-strong:dark:text-white',
  'prose-strong:text-black',
  'prose-ul:dark:text-white',
  'prose-ul:text-black',

  'marker:text-black',
  'dark:marker:text-white',

  'max-w-none',
])
