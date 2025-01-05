import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// console.log(window.context.locale)

const dateFormater = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Asia/Kolkata'
})

export const formatDateMs = (ms: number): string => dateFormater.format(ms)

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}
