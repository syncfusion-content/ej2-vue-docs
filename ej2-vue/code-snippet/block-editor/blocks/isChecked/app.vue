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
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Task List:'
                }
            ]
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            props: { isChecked: true }
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            props: { isChecked: false }
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            props: { isChecked: true }
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Low priority task'
                }
            ],
            props: { isChecked: false }
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
