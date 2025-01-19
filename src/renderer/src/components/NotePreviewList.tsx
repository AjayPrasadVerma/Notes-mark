import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({
  className,
  onSelect,
  ...props
}: NotePreviewListProps): JSX.Element => {
  const { notes, selectedNoteIndex, handleNoteSelected } = useNotesList({ onSelect })

  if (!notes) return <></>

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center -t-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props} className={className}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          {...note}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelected(index)}
        />
      ))}
    </ul>
  )
}
