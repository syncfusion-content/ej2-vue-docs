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

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blockData = [
    {
          id: 'title-block',
          type: 'Heading',
          props: { level: 1},          
          content: [{ type: ContentType.Text, content: 'Appearance Configuration Demo' }],
        },
        {
          id: 'intro-block',
          type: 'Paragraph',
          content: [{ type: ContentType.Text, content: 'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.' }],
        },
        {
          id: 'features-heading',
          type: 'Heading',
          props: { level: 2},
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
];

const isReadonly = false;
const currentTheme = 'default';

const toggleReadonlyMode = () => {
  isReadonly.value = !isReadonly.value;
  const editorElement = document.getElementById('blockeditor');
  if (editorElement) {
    if (isReadonly.value) {
      editorElement.classList.add('readonly-mode');
    } else {
      editorElement.classList.remove('readonly-mode');
    }
  }
  updateStatus();
  displayOutput(`Readonly mode ${isReadonly ? 'enabled' : 'disabled'}. ${isReadonly ? 'Content is now view-only.' : 'Content is now editable.'}`);
};

const applyCustomTheme = () => {
  const blockEditor = document.getElementById('blockeditor');
  blockEditor.classList.toggle('custom-theme');
  currentTheme.value = 'custom';
  updateStatus();
  displayOutput('Custom theme applied. The editor now features a gradient background with modern styling and hover effects.');
};

const focusEvent= () => {
  displayOutput('Editor focused. You can now type or edit content.');
},
const blurEvent= () => {
    displayOutput('Editor lost focus.');
},

const displayOutput = (message) => {
  var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
};

const updateStatus = () => {
    var statusText = document.getElementById('statusText');
    if (statusText) {
        var mode = isReadonly ? 'Readonly' : 'Editable';
        var theme = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
        statusText.textContent = `${mode}, ${theme} Theme`;
    }
};

onMounted(() => {
    updateStatus();
    }
)

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css";
</style>
