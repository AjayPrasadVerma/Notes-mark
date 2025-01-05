import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className }: ComponentProps<'div'>): JSX.Element => {
  const title = 'Note Title'
  return (
    <div className={twMerge('flex justify-center', className)}>
      <span className="text-gary-400">{title}</span>
    </div>
  )
}
