import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated is not enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // Expose
  })
} catch (error) {
  console.error(error)
}
