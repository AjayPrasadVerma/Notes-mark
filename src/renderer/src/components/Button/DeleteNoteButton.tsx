import { ActionButton, ActionButtonProps } from '@/components'
import { deletNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const deleteNote = useSetAtom(deletNoteAtom)

  const handleDeete = (): void => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDeete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
