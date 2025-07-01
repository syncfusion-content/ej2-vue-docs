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
            labelItems: [
                { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
            ]
        },
      blocksData: [
          {
                type: 'Heading2',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Different Content Types'
                    }
                ]
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'The Block Editor supports various content types: '
                    },
                    {
                        type: ContentType.Link,
                        content: 'hyperlinks',
                        linkSettings: {
                            url: 'https://ej2.syncfusion.com/documentation/',
                            openInNewWindow: true
                        }
                    },
                    {
                        type: ContentType.Text,
                        content: ', inline '
                    },
                    {
                        type: ContentType.Code,
                        content: 'code snippets.'
                    },
                    {
                        type: ContentType.Text,
                        content: '\nUser mentions like '
                    },
                    {
                        type: ContentType.Mention,
                        id: 'user1'
                    },
                    {
                        type: ContentType.Text,
                        content: ', and labels such as '
                    },
                    {
                        type: ContentType.Label,
                        id: 'label1'
                    },
                    {
                        type: ContentType.Text,
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
