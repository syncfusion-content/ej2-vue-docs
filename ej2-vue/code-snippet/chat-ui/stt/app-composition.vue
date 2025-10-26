<template>
  <div class="integration-speechtotext">
    <ejs-chatui
      id="chatUI"
      ref="chatUIInstance"
      footerTemplate="footerTemplate"
      :user="currentUser"
    >
    <e-messages>
      <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></e-message>
      <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
      <e-message :author="currentUser" text="I’ll review it and send feedback by today." ></e-message>
    </e-messages>
      <template v-slot:footerTemplate="">
        <div class="e-footer-wrapper">
          <div
            id="chatui-footer"
            ref="chatUIFooter"
            class="content-editor"
            @input="toggleButtons"
            @keydown="handleEvent"
            contenteditable="true"
            placeholder="Click to speak or start typing..."
          ></div>
          <div class="option-container">
            <ejs-speechtotext
              id="speechToText"
              cssClass="e-flat"
              ref="speechToTextObj"
              @transcriptChanged="onTranscriptChange"
              @onStop="onListeningStop"
              @created="created"
            ></ejs-speechtotext>
            <ejs-button
              id="chatui-sendButton"
              ref="chatUISendButton"
              @click="sendIconClicked"
              class="e-assist-send e-icons e-outline"
              role="button"
            ></ejs-button>
          </div>
        </div>
      </template>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from '@syncfusion/ej2-vue-interactive-chat';
import { SpeechToTextComponent as EjsSpeechtotext } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const chatUIInstance = ref(null);
const chatUIFooter = ref(null);
const speechToTextObj = ref(null);
const chatUISendButton = ref(null);

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

// Updates the footer input with the latest speech transcript
const onTranscriptChange = (args) => {
  chatUIFooter.value.innerText = args.transcript;
};

// Toggles button visibility when speech-to-text listening stops
const onListeningStop = () => {
  toggleButtons();
};

// Initializes button visibility when the speech-to-text component is created
const created = () => {
  toggleButtons();
};

// Handles Enter key press in the input to send the prompt without Shift
const handleEvent = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    sendIconClicked();
    e.preventDefault();
  }
};

// Toggles visibility of send and speech buttons based on whether the input has text
const toggleButtons = () => {
  const chatuiFooterEle = chatUIFooter.value;
  const sendButtonEl = chatUISendButton.value?.$el;
  const speechButtonEl = speechToTextObj.value?.$el;
  if (!chatuiFooterEle || !sendButtonEl || !speechButtonEl) {
    return;
  }
  const hasText = chatuiFooterEle.innerText.trim() !== '';
  sendButtonEl.classList.toggle('visible', hasText);
  speechButtonEl.classList.toggle('visible', !hasText);
  if (!hasText && (chatuiFooterEle.innerHTML === '<br>' || chatuiFooterEle.innerHTML.trim() === '')) {
    chatuiFooterEle.innerHTML = '';
  }
};

// Executes the current prompt from the footer input and clears it
const sendIconClicked = () => {
  const editor = chatUIFooter.value;
  const messageContent = editor?.innerText || '';
  if (messageContent.trim()) {
    chatUIInstance.value.ej2Instances.addMessage({
      author: currentUser,
      text: messageContent
    });
    editor.innerText = '';
    toggleButtons();
  }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

.integration-speechtotext {
    height: 400px;
    width: 450px;
    margin: 0 auto;
  }

  .integration-speechtotext #chatui-sendButton {
    width: 40px;
    height: 40px;
    font-size: 15px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .integration-speechtotext #speechToText.visible,
  .integration-speechtotext #chatui-sendButton.visible {
    display: inline-block;
  }

  .integration-speechtotext #speechToText,
  .integration-speechtotext #chatui-sendButton {
    display: none;
  }

  @media only screen and (max-width: 750px) {
    .integration-speechtotext {
      width: 100%;
    }
  }

  .integration-speechtotext .e-footer-wrapper {
    display: flex;
    border: 1px solid #c1c1c1;
    margin: 5px 5px 0 5px;
    border-radius: 10px;
    padding: 5px;
  }

  .integration-speechtotext .content-editor {
    width: 100%;
    overflow-y: auto;
    font-size: 14px;
    min-height: 20px;
    max-height: 150px;
    padding: 10px;
  }

  .integration-speechtotext .content-editor[contentEditable='true']:empty:before {
    content: attr(placeholder);
    color: #6b7280;
    font-style: italic;
  }

  .integration-speechtotext .option-container {
    align-self: flex-end;
  }
</style>