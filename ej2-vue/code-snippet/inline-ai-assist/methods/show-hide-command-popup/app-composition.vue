<template>
  <div>
    <div id="show-hide-command-popup"></div>
    <button id="summarizeBtn">Summarize</button>
    <button id="showCommandsBtn">Show Commands</button>
    <button id="hideCommandsBtn">Hide Commands</button>
    <div id="editableText" contenteditable="true">
      <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
      <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

const commandSettings = {
  commands: [
    { label: 'Summarize', prompt: 'Summarize the content' },
    { label: 'Shorten', prompt: 'Shorten the content' },
    { label: 'Translate', prompt: 'Translate the content' },
    { label: 'Make professional', prompt: 'Make the content more professional' }
  ]
};

let inlineAIAssist;
let summarizeHandler;
let showCommandsHandler;
let hideCommandsHandler;

enableRipple(true);

onMounted(() => {
  inlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    promptRequest: () => {
      setTimeout(() => {
        const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service.';
        inlineAIAssist.addResponse(defaultResponse);
      }, 1000);
    },
    responseSettings: {
      itemSelect: (args) => {
        if (args.command.label === 'Accept') {
          const editable = document.getElementById('editableText');
          if (editable) {
            editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1].response + '</p>';
          }
          inlineAIAssist.hidePopup();
        } else if (args.command.label === 'Discard') {
          inlineAIAssist.hidePopup();
        }
      }
    }
  });

  inlineAIAssist.appendTo('#show-hide-command-popup');

  summarizeHandler = () => {
    inlineAIAssist.commandSettings.commands = [];
    inlineAIAssist.dataBind();
    inlineAIAssist.showPopup();
  };

  showCommandsHandler = () => {
    inlineAIAssist.commandSettings = commandSettings;
    inlineAIAssist.dataBind();
    inlineAIAssist.showPopup();
    inlineAIAssist.showCommandPopup();
  };

  hideCommandsHandler = () => {
    inlineAIAssist.hideCommandPopup();
  };

  const summarizeBtn = document.querySelector('#summarizeBtn');
  const showCommandsBtn = document.querySelector('#showCommandsBtn');
  const hideCommandsBtn = document.querySelector('#hideCommandsBtn');
  if (summarizeBtn) summarizeBtn.addEventListener('click', summarizeHandler);
  if (showCommandsBtn) showCommandsBtn.addEventListener('click', showCommandsHandler);
  if (hideCommandsBtn) hideCommandsBtn.addEventListener('click', hideCommandsHandler);
});

onBeforeUnmount(() => {
  const summarizeBtn = document.querySelector('#summarizeBtn');
  const showCommandsBtn = document.querySelector('#showCommandsBtn');
  const hideCommandsBtn = document.querySelector('#hideCommandsBtn');
  if (summarizeBtn && summarizeHandler) summarizeBtn.removeEventListener('click', summarizeHandler);
  if (showCommandsBtn && showCommandsHandler) showCommandsBtn.removeEventListener('click', showCommandsHandler);
  if (hideCommandsBtn && hideCommandsHandler) hideCommandsBtn.removeEventListener('click', hideCommandsHandler);
  if (inlineAIAssist) {
    try { inlineAIAssist.destroy(); } catch (e) { console.warn(e); }
    inlineAIAssist = null;
  }
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
</style>
