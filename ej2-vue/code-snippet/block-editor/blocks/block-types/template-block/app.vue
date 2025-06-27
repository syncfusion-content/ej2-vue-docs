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
            type: 'Template',
            template: `<div class="notification-card">
                <div class="notification-header">
                    <span class="notification-icon">📢</span>
                    <h3 class="notification-title">Important Announcement</h3>
                </div>
                <div class="notification-content">
                    <p>The system will be undergoing maintenance on Saturday from 2:00 AM to 4:00 AM.</p>
                    <p>Please save your work before this time to prevent any data loss.</p>
                </div>
            </div>`
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
