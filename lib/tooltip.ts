import { cva } from 'class-variance-authority'

export const tooltip = cva([
  'inline-block',
  'relative',
  'text-center',

  'after:-translate-x-1/2',
  'after:absolute',
  'after:block',
  'after:border-4',
  'after:border-b-transparent',
  'after:border-t-black',
  'after:border-x-transparent',
  'after:bottom-[calc(100%-0.25rem)]',
  'after:content-[""]',
  'after:left-1/2',
  'after:opacity-0',
  'after:right-auto',
  'after:top-auto',

  'dark:after:border-t-white',

  'before:-translate-x-1/2',
  'before:absolute',
  'before:bg-black',
  'before:bottom-[calc(100%+0.25rem)]',
  'before:content-[attr(data-label)]',
  'before:inline-block',
  'before:left-1/2',
  'before:opacity-0',
  'before:p-2',
  'before:right-auto',
  'before:rounded',
  'before:text-white',
  'before:text-xs',
  'before:top-auto',

  'dark:before:bg-white',
  'dark:before:text-black',

  'hover:after:opacity-100',
  'hover:before:opacity-100',
])
