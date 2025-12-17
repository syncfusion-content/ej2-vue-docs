<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
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
      blocksData: [
          {
              blockType: 'CollapsibleHeading',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'Collapsible Section'
                  }
              ],
              properties: {
                level: 1,
                isExpanded: true,
                children: [
                    {
                        blockType: 'Paragraph',
                        content: [
                            {
                                contentType: ContentType.Text,
                                content: 'This content is inside a toggle section and can be collapsed.'
                            }
                        ]
                    }
                ]
              }
          },
          {
              blockType: 'CollapsibleParagraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'Toggle paragraph section'
                  }
              ],
              properties: {
                isExpanded: false,
                children: [
                    {
                        blockType: 'Paragraph',
                        content: [
                            {
                                contentType: ContentType.Text,
                                content: 'This content is initially hidden because isExpanded is set to false.'
                            }
                        ]
                    }
                ]
            }
          }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
</style>
