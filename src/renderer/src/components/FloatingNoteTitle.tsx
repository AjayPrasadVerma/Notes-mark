import { selectedNoteAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className }: ComponentProps<'div'>): JSX.Element => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return <></>

  return (
    <div className={twMerge('flex justify-center', className)}>
      <span className="text-gary-400">{selectedNote.title}</span>
    </div>
  )
}
