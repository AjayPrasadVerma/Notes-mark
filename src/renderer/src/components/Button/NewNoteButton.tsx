import { ActionButton, ActionButtonProps } from '@/components'
import { MdOutlineNoteAdd } from 'react-icons/md'

export const NewNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  return (
    <ActionButton {...props}>
      <MdOutlineNoteAdd className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
