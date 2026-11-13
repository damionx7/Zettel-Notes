import NiceModal from '@ebay/nice-modal-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MODAL_NOTE_LINK_ID } from '@/constants/modals'
import { styleHasLabel } from '@/helper/noteLink'
import useAppSettingStore from '@/stores/useAppSettingStore'
import { toast } from 'zens'
import { useTranslation } from '@/i18n'
import { FileIcon, LinkIcon, NetworkIcon } from 'lucide-react'
import { getSourceCodeEditor } from '../../sourceCodeEditorRegistry'
import { buildLinkMarkdown } from './LinkInsertPopover'

interface LinkMenuPopoverProps {
  editorId?: string
  /** Inserts a local file (image or attachment) through the picker. */
  onInsertFile: () => void | Promise<void>
}

type Mode = 'menu' | 'url'

/**
 * One button for everything that writes a link: to another note, to a URL, or to a local file.
 *
 * They were three separate toolbar entries; grouping them keeps the bar short and makes the
 * distinction obvious — which is exactly what a reader needs when a link does not open.
 */
export const LinkMenuPopover = ({ editorId, onInsertFile }: LinkMenuPopoverProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('menu')
  const [text, setText] = useState('')
  const [url, setUrl] = useState('')

  const editor = () => (editorId ? getSourceCodeEditor(editorId) : undefined)

  const seedFromSelection = () => {
    const view = editor()
    const selection = view?.cm.state.selection.main
    if (view && selection && selection.from !== selection.to) {
      setText(view.cm.state.sliceDoc(selection.from, selection.to))
    }
  }

  const insertIntoEditor = (markdown: string) => {
    const view = editor()
    if (!view || !markdown) return
    const { state } = view.cm
    const selection = state.selection.main
    view.cm.dispatch({
      changes: { from: selection.from, to: selection.to, insert: markdown },
      selection: { anchor: selection.from + markdown.length },
      scrollIntoView: true,
    })
    view.cm.focus()
  }

  const close = () => {
    setOpen(false)
    setMode('menu')
    setText('')
    setUrl('')
  }

  /**
   * A style without a label cannot take the selected text, so the owner is told here — before
   * opening the picker — instead of after choosing a note and finding out it is refused.
   */
  const openNotePicker = () => {
    const view = editor()
    const selection = view?.cm.state.selection.main
    const hasSelection = Boolean(selection && selection.from !== selection.to)
    const style = useAppSettingStore.getState().settingData.note_link_style

    if (hasSelection && !styleHasLabel(style)) {
      toast.error(t('note_link_insert.selection_needs_label'))
      return
    }

    close()
    void NiceModal.show(MODAL_NOTE_LINK_ID, { fileId: editorId })
  }

  const insertUrl = () => {
    insertIntoEditor(buildLinkMarkdown(text, url))
    close()
  }

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        if (next) {
          seedFromSelection()
          setMode('menu')
        }
        setOpen(next)
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button aria-label={t('toolbar.link_menu')} size='icon-chrome' variant='chrome'>
              <LinkIcon aria-hidden='true' className='size-3.5' />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>{t('toolbar.link_menu')}</TooltipContent>
      </Tooltip>

      <PopoverContent align='start' className='w-64 p-1'>
        {mode === 'menu' ? (
          <div className='flex flex-col'>
            <Button
              className='h-7 justify-start gap-2 px-2 text-ui-control font-normal'
              onClick={openNotePicker}
              size='sm'
              variant='ghost'
            >
              <NetworkIcon aria-hidden='true' className='size-3.5' />
              {t('toolbar.link_note')}
            </Button>
            <Button
              className='h-7 justify-start gap-2 px-2 text-ui-control font-normal'
              onClick={() => setMode('url')}
              size='sm'
              variant='ghost'
            >
              <LinkIcon aria-hidden='true' className='size-3.5' />
              {t('toolbar.link_url')}
            </Button>
            <Button
              className='h-7 justify-start gap-2 px-2 text-ui-control font-normal'
              onClick={() => {
                close()
                void onInsertFile()
              }}
              size='sm'
              variant='ghost'
            >
              <FileIcon aria-hidden='true' className='size-3.5' />
              {t('toolbar.link_file')}
            </Button>
          </div>
        ) : (
          <div className='flex flex-col gap-1 p-1'>
            <Input
              aria-label={t('image_insert.url_label')}
              className='w-full'
              inputSize='sm'
              onChange={(event) => setText(event.target.value)}
              placeholder={t('image_insert.url_label')}
              value={text}
            />
            <Input
              aria-label={t('image_insert.url_placeholder')}
              className='w-full'
              inputSize='sm'
              onChange={(event) => setUrl(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') insertUrl()
              }}
              placeholder='https://…'
              value={url}
            />
            <Button disabled={!url.trim()} onClick={insertUrl} size='sm'>
              {t('image_insert.insert_url')}
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
