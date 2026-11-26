# CSS snippets

Use a personal `.css` snippet for local presentation that should remain independent of the selected theme. Put CSS in a theme variant only when the user wants it to follow that variant or be included in a shared theme. Ordinary Markdown content edits do not require CSS. For explanation or troubleshooting requests, diagnose the supplied rule before producing or replacing files.

## Scope and compatibility

Prefix document rules with `.mf-editor-content .mf-preview-content`. `.mf-editor-content` is the public root shared by the document view and the theme/CSS preview, and `.mf-preview-content` is the rendered note inside it, so the rules do not style settings controls or the CSS editor itself.

The preview renders ordinary HTML. The task-list attributes below were checked against the renderer in `packages/editor` (`rmeProsemirrorNodeToHtml`); they are a versioned reference, not a promise that every node stays unchanged. They do not apply to the Markdown source editor (CodeMirror) or the separate PDF/print renderer. Do not depend on generated IDs or document indexes for presentation.

| Element | Selector inside `.mf-editor-content .mf-preview-content` |
| --- | --- |
| Headings | `h1` through `h6` |
| List item | `li` |
| Task item | `li[data-checked]` (`'true'` when done, `'false'` when open) |
| Task checkbox | `li[data-checked] > input[type='checkbox']` |
| Task item's own content | `li[data-checked] > [data-rme-list-item-content]` |
| Quote | `blockquote` |
| Table cells | `th`, `td` |

Rendered task item: `<li data-checked="true"><input type="checkbox" checked disabled><div data-rme-list-item-content><p>…</p><ul>…nested…</ul></div></li>`.

Semantic variables such as `var(--mf-theme-border-default)` and `var(--mf-theme-accent-background)` follow the active theme. Prefer them over hard-coded palette colors. Read the theme reference only if the task also needs token changes.

## Completed-task strikethrough

This rule checks the task's own state and styles only its own first line:

```css
.mf-editor-content .mf-preview-content
  li[data-checked='true'] > [data-rme-list-item-content] > :first-child {
  text-decoration: line-through;
}
```

Keep the direct-child combinators. A broad `li:has(input:checked)` or a descendant selector also strikes nested items, because `text-decoration` reaches everything inside the matched element. Do not change Markdown task state to achieve a visual effect.

## Heading separators, compact tables and quote lines

```css
/* Heading separators */
.mf-editor-content .mf-preview-content :is(h1, h2) {
  border-bottom: 1px solid var(--mf-theme-border-default);
  padding-bottom: 0.3em;
}

/* Compact table cells */
.mf-editor-content .mf-preview-content :is(th, td) {
  padding: 2px 8px;
}

/* Accent quote lines, preserving nested quote depth */
.mf-editor-content .mf-preview-content blockquote {
  background-image: repeating-linear-gradient(
    to right,
    var(--mf-theme-accent-background) 0,
    var(--mf-theme-accent-background) 2px,
    transparent 2px,
    transparent 1em
  );
}
```

Quote lines use a repeating background rather than a border, including nested quote depths; keep that geometry and replace only the color.

## Preview, import, and deliver

1. Open **Settings → Appearance → Typography & CSS → Personal CSS snippets**. Create or edit a snippet, then use **Insert template** or **Selector reference** as needed. Inserting a template appends CSS; keep the user's existing rules unless replacement was requested.
2. Edit the CSS and inspect the live preview. A draft affects the preview before saving; it does not replace the application's saved snippets. Check completed and incomplete tasks, including mixed nested states, or the elements targeted by the rule.
3. **Save snippet** when the result is intended for use; **Enable after saving** controls whether it is applied. Imported `.css` files start disabled and must be enabled separately. Respect each existing snippet's enable state; producing a file does not require changing the active theme or personal appearance preferences.
4. Check the actual document in the intended mode and both light/dark themes when relevant. Preview and application use the same CSS root, but a preview sample does not exercise every document structure. Source and PDF/print output require separate rules and validation if requested.

Deliver only the intended `.css` file, its target mode/version, and import/enable instructions. Do not edit `themes-v1.json` directly or execute legacy JS themes. CSS is not automatically selector-scoped: include the root in the rules themselves. Report syntax/selector checks separately from visual inspection; if the app is unavailable, leave the visual checks above explicitly pending.

For externally maintained snippets, **Open CSS folder** opens the fixed `css-snippets` directory beside `themes-v1.json`. Direct UTF-8 `.css` files are discovered automatically and start disabled. Enabled files refresh after external saves; enable state and ordering persist. **External file** entries use **Show in folder** for editing/removal instead of the in-app editor. Deletion removes the entry; renaming creates a new disabled identity. Subdirectories, symlinks and non-CSS files are ignored. Unreadable, binary, non-UTF-8 or over-1-MiB files show an error and apply no styles until repaired. Old legacy CSS directories are not scanned.

For a checkout, inspect `apps/desktop/src/themes/editorCssScope.ts`, `apps/desktop/src/themes/cssSnippetTemplates.ts` and `packages/editor/src/editor/utils/prosemirrorNodeToHtml.ts` when confirming a selector. No repository clone, Node installation or build is required merely to author and import a snippet.
