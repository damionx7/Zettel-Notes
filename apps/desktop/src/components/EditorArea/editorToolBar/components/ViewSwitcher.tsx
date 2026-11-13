import bus from '@/helper/eventBus'
import {
  EditorViewType,
  type EditorViewTarget,
  type EditorViewTypeValue,
} from '@/constants/editorViewType'
import { getFileObject } from '@/helper/files'
import { useEditorStore } from '@/stores'
import useEditorViewTypeStore, { selectEditorViewType } from '@/stores/useEditorViewTypeStore'
import useFileTypeConfigStore from '@/stores/useFileTypeConfigStore'
import { cn } from '@/lib/cn'
import { CodeXmlIcon, EyeIcon } from 'lucide-react'
import { useCallback } from 'react'
import { useTranslation } from '@/i18n'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useNoteIsLocked } from '../../useLockedNote'

interface ViewSwitcherProps {
  editorId?: string
  groupId?: string
}

/** Viewer reads left, editor reads right; the pair is the whole button. */
const PREVIEW = EditorViewType.PREVIEW
const SOURCE = EditorViewType.SOURCECODE

const LABELS: Record<EditorViewTypeValue, string> = {
  [SOURCE]: 'view.source_code',
  [PREVIEW]: 'view.preview',
}

/**
 * One toggle for the two modes: `viewer / editor`.
 *
 * The rectangle is a single hit area and carries the whole state: red when the editor is active,
 * neutral when the viewer is. Icons only show the pair — they have no colour of their own, so the
 * control reads as one surface instead of two tinted halves.
 */
export const ViewSwitcher = (props: ViewSwitcherProps) => {
  const { editorId, groupId } = props
  const activeId = useEditorStore((state) => state.activeId)
  const targetEditorId = editorId ?? activeId
  const editorViewType = useEditorViewTypeStore((state) =>
    selectEditorViewType(state, targetEditorId ?? '', groupId),
  )
  const { t } = useTranslation()
  const locked = useNoteIsLocked(targetEditorId)

  const curFile = targetEditorId ? getFileObject(targetEditorId) : undefined
  const supportedModes =
    useFileTypeConfigStore.getState().getFileTypeConfigById(curFile?.id || '')?.supportedModes ??
    []

  const handleSelect = useCallback(
    (viewType: EditorViewTypeValue) => {
      if (!targetEditorId || locked) return
      const target: EditorViewTarget = { editorId: targetEditorId, groupId }
      bus.emit('editor_toggle_type', undefined, viewType, target)
    },
    [groupId, locked, targetEditorId],
  )

  if (!curFile) return null

  const previewSupported = supportedModes.includes(PREVIEW)
  const sourceSupported = supportedModes.includes(SOURCE)
  if (!previewSupported && !sourceSupported) return null

  const editing = editorViewType === SOURCE
  const canToggle = previewSupported && sourceSupported
  const targetMode = editing ? PREVIEW : SOURCE

  // Only one mode exists for this file type: show it, but there is nothing to switch to.
  const label = locked
    ? t('encryption.locked.toolbar_hint')
    : canToggle
      ? t(LABELS[targetMode])
      : t(LABELS[editing || sourceSupported ? SOURCE : PREVIEW])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label={label}
          aria-pressed={editing}
          className={cn(
            'box-border inline-flex h-[22px] shrink-0 items-center rounded-sm border px-1',
            editing
              ? 'border-destructive/40 bg-destructive/12 text-destructive'
              : 'border-control-border bg-control-surface text-content-secondary',
            locked && 'opacity-50',
          )}
          onClick={() => {
            if (!canToggle) return
            handleSelect(targetMode)
          }}
          style={{ gap: '2px' }}
          tabIndex={canToggle ? undefined : -1}
          variant='ghost'
        >
          {previewSupported ? <EyeIcon aria-hidden='true' className='size-3.5' /> : null}
          {canToggle ? (
            <span
              aria-hidden='true'
              className='select-none text-ui-caption'
              style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}
            >
              /
            </span>
          ) : null}
          {sourceSupported ? <CodeXmlIcon aria-hidden='true' className='size-3.5' /> : null}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}
