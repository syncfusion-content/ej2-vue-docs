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

<script>
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

export default {
  name: 'AppInlineAIAssistShowHidePopup',
  mounted() {
    enableRipple(true);
    this.inlineAIAssist = new InlineAIAssist({
      relateTo: '#showPopup',
      promptRequest: () => {
        setTimeout(() => {
          const defaultResponse = 'This is a default response from the Inline AI Assist sample.';
          this.inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
      },
      responseSettings: {
        itemSelect: (args) => {
          if (args.command.label === 'Accept') {
            const editable = document.getElementById('editableText');
            if (editable) {
              editable.innerHTML = '<p>' + this.inlineAIAssist.prompts[this.inlineAIAssist.prompts.length - 1].response + '</p>';
            }
            this.inlineAIAssist.hidePopup();
          } else if (args.command.label === 'Discard') {
            this.inlineAIAssist.hidePopup();
          }
        }
      }
    });

    this.inlineAIAssist.appendTo('#show-hide-popup');

    this._showHandler = () => { this.inlineAIAssist.showPopup(); };
    this._hideHandler = () => { this.inlineAIAssist.hidePopup(); };

    const showBtn = document.querySelector('#showPopup');
    const hideBtn = document.querySelector('#hidePopup');
    if (showBtn) showBtn.addEventListener('click', this._showHandler);
    if (hideBtn) hideBtn.addEventListener('click', this._hideHandler);
  },
  beforeUnmount() {
    const showBtn = document.querySelector('#showPopup');
    const hideBtn = document.querySelector('#hidePopup');
    if (showBtn && this._showHandler) showBtn.removeEventListener('click', this._showHandler);
    if (hideBtn && this._hideHandler) hideBtn.removeEventListener('click', this._hideHandler);
    if (this.inlineAIAssist) {
      try { this.inlineAIAssist.destroy(); } catch (e) { console.warn(e); }
      this.inlineAIAssist = null;
    }
  }
};
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
