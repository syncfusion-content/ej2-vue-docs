<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" ref="blockEditor" @focus="focusEvent" @blur="blurEvent"></ejs-blockeditor>
    <div id="controls">
            <h3>Appearance Configuration Demo</h3>
            <div class="button-group">
                <button @click="toggleReadonly">Toggle Readonly Mode</button>
                <button @click="applyCustomTheme">Apply Custom Theme</button>
            </div>
            <div class="status-info">
                <p><strong>Current Status:</strong> <span id="statusText">Editable, Default Theme</span></p>
            </div>
        </div>
    <div id="output"></div>
  </div>
</template>

<script>
import { BlockEditorComponent } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
        {
          id: 'title-block',
          type: 'Heading1',
          content: [{ type: ContentType.Text, content: 'Appearance Configuration Demo' }],
        },
        {
          id: 'intro-block',
          type: 'Paragraph',
          content: [{ type: ContentType.Text, content: 'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.' }],
        },
        {
          id: 'features-heading',
          type: 'Heading2',
          content: [{ type: ContentType.Text, content: 'Configured Custom Theme' }],
        },
        {
          id: 'theme-list-1',
          type: 'BulletList',
          content: [{ type: ContentType.Text, content: 'Gradient background with modern styling' }],
        },
        {
          id: 'readonly-info',
          type: 'Paragraph',
          content: [{ type: ContentType.Text, content: 'Use the readonly toggle to switch between editable and read-only modes. In readonly mode, you can view content but cannot make changes.' }],
        }
      ],
      isReadonly : false,
      currentTheme : 'default'
    };
  },
  methods: {
    toggleReadonly: function() {
      this.isReadonly = !this.isReadonly;
      this.$refs.blockEditor.ej2Instances.readOnly = this.isReadonly;
      const editorElement = document.getElementById('blockeditor')
      if (editorElement) {
        if(this.isReadonly){
            editorElement.classList.add('readonly-mode');
        }
        else{
            editorElement.classList.remove('readonly-mode');
        }
      }
      this.updateStatus();
      this.displayOutput(`Readonly mode ${this.isReadonly ? 'enabled' : 'disabled'}. ${this.isReadonly ? 'Content is now view-only.' : 'Content is now editable.'}`);
    },
    applyCustomTheme: function() {
      this.$refs.blockEditor.ej2Instances.cssClass = 'custom-theme';
      this.currentTheme= 'custom';
      this.updateStatus();
      this.displayOutput('Custom theme applied. The editor now features a gradient background with modern styling and hover effects.');
    },
    focusEvent: function() {
      this.displayOutput('Editor focused. You can now type or edit content.');
    },
    blurEvent: function() {
        this.displayOutput('Editor lost focus.');
    },
    updateStatus: function() {
       const statusText = document.getElementById('statusText');
        if (statusText) {
            const mode = this.isReadonly ? 'Readonly' : 'Editable';
            const theme = this.currentTheme.charAt(0).toUpperCase() + this.currentTheme.slice(1);
            statusText.textContent = `${mode}, ${theme} Theme`;
        }
    },
    displayOutput: function(message) {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }
  },
  mounted() {
    this.updateStatus();
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
