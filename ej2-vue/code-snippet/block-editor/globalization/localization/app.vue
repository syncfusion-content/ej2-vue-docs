<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" locale="de"></ejs-blockeditor>
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType } from "@syncfusion/ej2-vue-blockeditor";
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'de': {
    "blockeditor": {
	      "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
        "heading1": "Überschrift 1",
        "heading2": "Überschrift 2",
        "heading3": "Überschrift 3",
        "heading4": "Überschrift 4",
        "toggleParagraph": "Umschaltbarer Absatz",
        "toggleHeading1": "Umschaltbare Überschrift 1",
        "toggleHeading2": "Umschaltbare Überschrift 2",
        "toggleHeading3": "Umschaltbare Überschrift 3",
        "toggleHeading4": "Umschaltbare Überschrift 4",
        "bulletList": "Element hinzufügen",
        "numberedList": "Element hinzufügen",
        "checkList": "Zu erledigen",
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

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
          {
              id: 'block-1',
              type: 'Heading1',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Sample Heading'
                  }
              ]
          },
          {
              id: 'block-2',
              type: 'Paragraph',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'This is a sample paragraph block.'
                  }
              ]
          },
          {
              id: 'block-3',
              type: 'Paragraph'
          }
      ]
    };
  },
  methods: {
    created() {
      L10n.load({
        'de': {
          "blockeditor": {
            "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
            "heading1": "Überschrift 1",
            "heading2": "Überschrift 2",
            "heading3": "Überschrift 3",
            "heading4": "Überschrift 4",
            "toggleParagraph": "Umschaltbarer Absatz",
            "toggleHeading1": "Umschaltbare Überschrift 1",
            "toggleHeading2": "Umschaltbare Überschrift 2",
            "toggleHeading3": "Umschaltbare Überschrift 3",
            "toggleHeading4": "Umschaltbare Überschrift 4",
            "bulletList": "Element hinzufügen",
            "numberedList": "Element hinzufügen",
            "checkList": "Zu erledigen",
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
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
