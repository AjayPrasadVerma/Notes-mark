import { NotePreview } from '@/components'
import { noteMocks } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>): JSX.Element => {
  if (noteMocks.length === 0) {
    return (
      <ul className={twMerge('text-center -t-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props} className={className}>
      {noteMocks.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
