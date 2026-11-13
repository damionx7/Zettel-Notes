import useAppSettingStore from '@/stores/useAppSettingStore'
import { t } from '@/i18n'
import { SettingGroupContainer } from '../component/SettingGroup/styles'
import InputSettingItem from '../component/SettingItems/Input'
import SelectSettingItem from '../component/SettingItems/Select'
import SwitchSettingItem from '../component/SettingItems/Switch'
import {
  NOTE_LINK_STYLE_HELP,
  NOTE_LINK_STYLE_SAMPLE,
  NOTE_LINK_STYLES,
  applyNoteLinkTemplate,
  normalizeNoteLinkStyle,
} from '@/helper/noteLink'
import { getSettingGroupAnchorId } from '../settingSearch'

export const ImageSetting = () => {
  const { settingData } = useAppSettingStore()
  return (
    <>
      <SettingGroupContainer $anchorId={getSettingGroupAnchorId('image', 'upload_img')}>
        <h2 className='setting-group__title'>{t('settings.image.upload_img.label')}</h2>
        <div className='setting-group__items'>
          <SelectSettingItem
            item={{
              key: 'when_upload_image',
              type: 'select',
              title: { i18nKey: 'settings.image.upload_img.when_upload_image.label' },
              desc: { i18nKey: 'settings.image.upload_img.when_upload_image.desc' },
              options: [
                {
                  value: 'save_to_local_relative',
                  title: t(
                    'settings.image.upload_img.when_upload_image.options.save_to_local_relative',
                  ),
                },
                {
                  value: 'save_to_file_relative',
                  title: t(
                    'settings.image.upload_img.when_upload_image.options.save_to_file_relative',
                  ),
                },
              ] as const,
            }}
          />
          {settingData.when_upload_image === 'save_to_local_relative' ? (
            <InputSettingItem
              item={{
                key: 'upload_image_save_relative_path',
                type: 'input',
                title: {
                  i18nKey: 'settings.image.upload_img.upload_image_save_relative_path.label',
                },
                desc: { i18nKey: 'settings.image.upload_img.upload_image_save_relative_path.desc' },
              }}
            />
          ) : null}

          <SwitchSettingItem
            item={{
              key: 'attachment_wiki_image_links',
              type: 'switch',
              defaultValue: false,
              title: { i18nKey: 'settings.image.upload_img.wiki_image_links.label' },
              desc: { i18nKey: 'settings.image.upload_img.wiki_image_links.desc' },
            }}
          />
          {settingData.when_upload_image === 'save_to_file_relative' ? (
            <InputSettingItem
              item={{
                key: 'upload_image_save_relative_path_rule',
                type: 'input',
                prefix: '${documentPath}/',
                valuePreHandle: (value: string) => {
                  if (value.includes('${documentPath}/')) {
                    return value.replace('${documentPath}/', '')
                  }
                  return value
                },
                title: {
                  i18nKey: 'settings.image.upload_img.upload_image_save_relative_path_rule.label',
                },
                desc: {
                  i18nKey: 'settings.image.upload_img.upload_image_save_relative_path_rule.desc',
                },
              }}
            />
          ) : null}

          
        </div>
      </SettingGroupContainer>

      <SettingGroupContainer $anchorId={getSettingGroupAnchorId('image', 'note_links')}>
        <h2 className='setting-group__title'>{t('settings.image.note_links.label')}</h2>
        <div className='setting-group__items'>
          <SelectSettingItem
            item={{
              key: 'note_link_style',
              type: 'select',
              title: { i18nKey: 'settings.image.note_links.style.label' },
              desc: { i18nKey: 'settings.image.note_links.style.desc' },
              options: NOTE_LINK_STYLES.map((style) => ({
                value: style.value,
                title: style.label,
              })) as unknown as readonly { value: string; title: string }[],
            }}
          />
          <div className='flex flex-col gap-1'>
            <p className='m-0 text-ui-caption text-content-secondary'>
              {t(
                NOTE_LINK_STYLE_HELP[normalizeNoteLinkStyle(settingData.note_link_style)] ??
                  NOTE_LINK_STYLE_HELP['[[$filename$]]'],
              )}
            </p>
            <p className='m-0 text-ui-caption text-content-secondary'>
              {t('settings.image.note_links.example_label')}{' '}
              <code className='rounded bg-muted px-1 py-0.5 text-ui-caption text-content'>
                {applyNoteLinkTemplate(
                  normalizeNoteLinkStyle(settingData.note_link_style),
                  NOTE_LINK_STYLE_SAMPLE,
                )}
              </code>
            </p>
          </div>

          <SwitchSettingItem
            item={{
              key: 'absolute_note_links',
              type: 'switch',
              defaultValue: false,
              title: { i18nKey: 'settings.image.note_links.absolute.label' },
              desc: { i18nKey: 'settings.image.note_links.absolute.desc' },
            }}
          />
        </div>
      </SettingGroupContainer>
    </>
  )
}
