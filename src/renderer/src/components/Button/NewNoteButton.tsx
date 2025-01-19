import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { MdOutlineNoteAdd } from 'react-icons/md'

export const NewNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async (): Promise<void> => {
    await createEmptyNote()
  }

  return (
    <ActionButton {...props} onClick={handleCreation}>
      <MdOutlineNoteAdd className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
