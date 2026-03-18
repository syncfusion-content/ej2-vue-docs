<template>
  <div>
    <div id="show-hide-popup"></div>
    <button id="showPopup">Show Popup</button>
    <button id="hidePopup">Hide Popup</button>
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

let inlineAIAssist;
let showHandler;
let hideHandler;

enableRipple(true);

onMounted(() => {
  inlineAIAssist = new InlineAIAssist({
    relateTo: '#showPopup',
    promptRequest: () => {
      setTimeout(() => {
        const defaultResponse = 'This is a default response from the Inline AI Assist sample.';
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

  inlineAIAssist.appendTo('#show-hide-popup');

  showHandler = function () { inlineAIAssist.showPopup(); };
  hideHandler = function () { inlineAIAssist.hidePopup(); };

  const showBtn = document.querySelector('#showPopup');
  const hideBtn = document.querySelector('#hidePopup');
  if (showBtn) showBtn.addEventListener('click', showHandler);
  if (hideBtn) hideBtn.addEventListener('click', hideHandler);
});

onBeforeUnmount(() => {
  const showBtn = document.querySelector('#showPopup');
  const hideBtn = document.querySelector('#hidePopup');
  if (showBtn && showHandler) showBtn.removeEventListener('click', showHandler);
  if (hideBtn && hideHandler) hideBtn.removeEventListener('click', hideHandler);
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
