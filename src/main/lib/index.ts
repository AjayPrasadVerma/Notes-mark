import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'os'

import { appDirectoryName, fileEncoding } from '@shared/constant'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/types'

export const getRootDir = (): string => {
  return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (fileName: string): Promise<NoteInfo> => {
  const fileStats = stat(`${getRootDir()}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: (await fileStats).mtimeMs
  }
}
