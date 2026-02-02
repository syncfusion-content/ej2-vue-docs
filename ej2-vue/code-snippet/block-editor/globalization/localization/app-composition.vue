<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" locale="de"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType } from "@syncfusion/ej2-vue-blockeditor";
import { L10n } from '@syncfusion/ej2-base';

const blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        blockType: 'Paragraph'
    }
];

L10n.load({
  'de': {
    "blockeditor": {
	    "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
        "heading1": "Überschrift 1",
        "heading2": "Überschrift 2",
        "heading3": "Überschrift 3",
        "heading4": "Überschrift 4",
        "collapsibleParagraph": "Umschaltbarer Absatz",
        "collapsibleHeading1": "Umschaltbare Überschrift 1",
        "collapsibleHeading2": "Umschaltbare Überschrift 2",
        "collapsibleHeading3": "Umschaltbare Überschrift 3",
        "collapsibleHeading4": "Umschaltbare Überschrift 4",
        "bulletList": "Element hinzufügen",
        "numberedList": "Element hinzufügen",
        "checklist": "Zu erledigen",
        "callout": "Schreiben Sie einen Hinweis",
        "addIconTooltip": "Klicken Sie, um unten einzufügen",
        "dragIconTooltipActionMenu": "Klicken Sie, um zu öffnen",
        "dragIconTooltip": "(Halten zum Ziehen)",
        "insertLink": "Link einfügen",
        "linkText": "Text",
        "linkTextPlaceholder": "Linktext",
        "linkUrl": "URL",
        "linkUrlPlaceholder": "https://example.com",
        "linkTitle": "Titel",
        "linkTitlePlaceholder": "Linktitel",
        "linkOpenInNewWindow": "In neuem Fenster öffnen",
        "linkInsert": "Einfügen",
        "linkRemove": "Entfernen",
        "linkCancel": "Abbrechen",
        "codeCopyTooltip": "Code kopieren"
      }
  }
});

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/tailwind3.css';
</style>
