<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :users="users" :labelSettings="labelSettings"></ejs-blockeditor>
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
        users: [
            { id: 'user1', user: 'John Doe' }
        ],
        labelSettings: {
            items: [
                { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
            ]
        },
      blocksData: [
          {
            blockType: 'Heading',
            properties: { level: 2 },
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Different Content Types'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'The Block Editor supports various content types: '
                },
                {
                    contentType: ContentType.Link,
                    content: 'hyperlinks',
                    properties: {
                        url: 'https://ej2.syncfusion.com/documentation/',
                    }
                },
                {
                    contentType: ContentType.Text,
                    content: ', inline ',
                },
                {
                    contentType: ContentType.Text,
                    content: 'code snippets.',
                    properties: {
                        styles: { inlineCode: true },
                    }
                },
                {
                    contentType: ContentType.Text,
                    content: '\nUser mentions like'
                },
                {
                    contentType: ContentType.Mention,
                    properties: { userId: "user1" }
                },
                {
                    contentType: ContentType.Text,
                    content: ', and labels such as '
                },
                {
                    contentType: ContentType.Label,
                    properties: { labelId: 'label1' }
                },
                {
                    contentType: ContentType.Text,
                    content: '.'
                }
            ]
        }
      ]
    };
  },
  methods: {
    
  }
};
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
