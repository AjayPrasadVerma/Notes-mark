import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated is not enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
    // Expose
  })
} catch (error) {
  console.error(error)
}
