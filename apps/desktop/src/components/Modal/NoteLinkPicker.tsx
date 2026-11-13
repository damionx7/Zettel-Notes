import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useTranslation } from '@/i18n'
import { logger } from '@/helper/logger'
import {
  buildNoteTree,
  loadWorkspaceNotes,
  type IndexedNote,
  type NoteFolderNode,
} from '@/services/noteIndex'
import { insertNoteLink } from '@/services/noteLinkInsert'
import { ChevronDownIcon, ChevronRightIcon, FoldVerticalIcon, UnfoldVerticalIcon } from 'lucide-react'

export interface NoteLinkPickerProps {
  /** Note whose caret receives the link. */
  fileId?: string
}

/**
 * Pick a note and insert a link to it, using the style chosen in Settings → File → Note links.
 *
 * Notes are shown as the folder tree they live in — the flat list hid the structure and made
 * repeated file names ambiguous. Searching switches to a flat list of matches, which is faster
 * to scan than a deep tree.
 */
const allFolderPaths = (node: NoteFolderNode, output: string[] = []): string[] => {
  for (const folder of node.folders) {
    output.push(folder.path)
    allFolderPaths(folder, output)
  }
  return output
}

const NoteLinkPickerModal = (props: NoteLinkPickerProps) => {
  const modal = useModal()
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [notes, setNotes] = useState<IndexedNote[]>([])
  const [root, setRoot] = useState('')
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    void (async () => {
      const [{ default: useEditorStore }, loaded] = await Promise.all([
        import('@/stores/useEditorStore'),
        loadWorkspaceNotes(),
      ])
      if (cancelled) return
      setNotes(loaded)
      setRoot(useEditorStore.getState().getRootPath() ?? '')
    })().catch((error: unknown) => logger.error('Could not index the workspace notes:', error))
    return () => {
      cancelled = true
    }
  }, [])

  const tree = useMemo(() => buildNoteTree(root, notes), [root, notes])
  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return []
    return notes.filter((note) => note.name.toLowerCase().includes(needle)).slice(0, 200)
  }, [notes, query])

  const everyFolder = allFolderPaths(tree)
  const allExpanded = everyFolder.length > 0 && everyFolder.every((path) => expanded.has(path))

  const toggle = (path: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(path)) next.delete(path)
      else next.add(path)
      return next
    })
  }

  const choose = async (note: IndexedNote) => {
    if (busy) return
    setBusy(true)
    try {
      const inserted = await insertNoteLink(props.fileId, note)
      modal.resolve(inserted)
    } finally {
      void modal.hide()
      modal.remove()
    }
  }

  const renderTree = (node: NoteFolderNode, depth: number): React.ReactNode[] => {
    const rows: React.ReactNode[] = []

    for (const folder of node.folders) {
      const isOpen = expanded.has(folder.path)
      rows.push(
        <Button
          className='h-7 w-full justify-start gap-1 rounded-none px-1 text-left text-ui-control font-normal'
          key={folder.path}
          onClick={() => toggle(folder.path)}
          size='sm'
          style={{ paddingLeft: `${depth * 12 + 4}px` }}
          variant='ghost'
        >
          {isOpen ? (
            <ChevronDownIcon aria-hidden='true' className='size-3.5 shrink-0' />
          ) : (
            <ChevronRightIcon aria-hidden='true' className='size-3.5 shrink-0' />
          )}
          <span className='truncate'>{folder.name}</span>
        </Button>,
      )
      if (isOpen) rows.push(...renderTree(folder, depth + 1))
    }

    for (const note of node.notes) {
      rows.push(
        <Button
          className='h-7 w-full justify-start rounded-none px-1 text-left text-ui-control font-normal'
          key={note.path}
          onClick={() => void choose(note)}
          size='sm'
          style={{ paddingLeft: `${depth * 12 + 24}px` }}
          variant='ghost'
        >
          <span className='truncate'>{note.stem}</span>
        </Button>,
      )
    }

    return rows
  }

  return (
    <Dialog.Root
      open={modal.visible}
      onOpenChange={(next) => {
        if (!next) {
          modal.resolve(false)
          void modal.hide()
          modal.remove()
        }
      }}
    >
      <Dialog.Content aria-describedby={undefined} closeLabel={t('common.close')}>
        <Dialog.Header>
          <Dialog.Title>{t('note_link_insert.title')}</Dialog.Title>
        </Dialog.Header>

        <Dialog.Body className='flex flex-col gap-2'>
          {/* The toggle lives at the end of the search field: it acts on the list below it. */}
          <div className='flex items-center gap-1'>
            <Input
              aria-label={t('note_link_insert.search_placeholder')}
              autoFocus
              className='min-w-0 flex-1'
              inputSize='sm'
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('note_link_insert.search_placeholder')}
              value={query}
            />
            <Button
              aria-label={
                allExpanded ? t('note_link_insert.collapse_all') : t('note_link_insert.expand_all')
              }
              className='shrink-0'
              onClick={() => setExpanded(allExpanded ? new Set() : new Set(allFolderPaths(tree)))}
              size='sm'
              variant='ghost'
            >
              {allExpanded ? (
                <FoldVerticalIcon aria-hidden='true' className='size-3.5' />
              ) : (
                <UnfoldVerticalIcon aria-hidden='true' className='size-3.5' />
              )}
            </Button>
          </div>

          <div className='flex max-h-[45vh] flex-col overflow-y-auto rounded-sm border border-border'>
            {query.trim()
              ? matches.length === 0
                ? (
                    <p className='m-0 px-2 py-3 text-ui-caption text-content-secondary'>
                      {t('note_link_insert.empty')}
                    </p>
                  )
                : matches.map((note) => (
                    <Button
                      className='h-7 w-full justify-start rounded-none px-2 text-left text-ui-control font-normal'
                      key={note.path}
                      onClick={() => void choose(note)}
                      size='sm'
                      variant='ghost'
                    >
                      <span className='truncate'>{note.name}</span>
                    </Button>
                  ))
              : renderTree(tree, 0)}
          </div>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export const NoteLinkPicker = NiceModal.create(NoteLinkPickerModal) as unknown as React.FC<{
  id: string
}>
