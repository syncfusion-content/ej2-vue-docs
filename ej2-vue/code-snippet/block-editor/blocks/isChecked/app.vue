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
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Task List:'
                }
            ]
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            properties: { isChecked: true }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            properties: { isChecked: false }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            properties: { isChecked: true }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Low priority task'
                }
            ],
            properties: { isChecked: false }
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
