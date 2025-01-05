import {
  ActionButtonRow,
  Content,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

function App(): JSX.Element {
  return (
    <>
      {/*  for mac only */}
      {/* <DraggableTopBar /> */}
      <RootLayout>
        <Sidebar className="">
          <ActionButtonRow className="flex justify-between m-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
