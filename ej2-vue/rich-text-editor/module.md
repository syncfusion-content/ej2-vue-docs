---
layout: post
title: Module in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Module in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Module
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Module in Vue Rich Text Editor Component

The following feature modules should be injected to extend Rich Text Editor’s functionality.

The available richtexteditor modules are:

| Module | Description |
|------|-------------|
| `Toolbar` | Inject this module to use Toolbar feature. |
| `Link` | Inject this module to use link feature in Rich Text Editor. |
| `Image` | Inject this module to use image feature in Rich Text Editor. |
| `Table` | Inject this module to use table feature in Rich Text Editor. |
| `Count` | Inject this module to use character count in Rich Text Editor. |
| `HtmlEditor` | Inject this module to use Rich Text Editor as html editor. |
| `MarkdownEditor` | Inject this module to use Rich Text Editor as markdown editor. |
| `QuickToolbar` | Inject this module to use quick toolbar feature for the target element. |
| `Resize` | Inject this module to use resize feature in Rich Text Editor. |
| `FileManager` | Inject this module to use file browser feature in Rich Text Editor. |
| `PasteCleanup` | Inject this module to use paste cleanup feature in Rich Text Editor. |
| `FormatPainter` | Inject this module to use format painter feature in Rich Text Editor. |
| `EmojiPicker` | Inject this module to use emoji picker feature in Rich Text Editor. |

These modules should be injected into the `provide` section and use `richtexteditor` as a key of the object.
