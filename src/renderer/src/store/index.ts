import { noteMocks } from '@/store/mocks'
import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'

export const notesAtom = atom<NoteInfo[]>(noteMocks)

export const selctedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selctedNoteIndexAtom)

  if (selectedNoteIndex == null) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello from Note ${selectedNoteIndex}`
  }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  const title = `Notes ${notes.length + 1}`

  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }

  set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

  set(selctedNoteIndexAtom, 0)
})

export const deletNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote) return

  set(
    notesAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  )

  set(selctedNoteIndexAtom, null)
})