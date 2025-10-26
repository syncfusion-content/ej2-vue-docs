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

<script>
import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-vue-interactive-chat';
import { SpeechToTextComponent } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'e-messages': MessagesDirective,
    'e-message': MessageDirective,
    'ejs-speechtotext': SpeechToTextComponent,
    'ejs-button': ButtonComponent,
  },
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert"
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama"
      }
    };
  },
  mounted() {
    // Defer initial toggleButtons call until after mount
    this.$nextTick(() => {
      this.toggleButtons();
    });
  },
  methods: {
    // Updates the footer input with the latest speech transcript
    onTranscriptChange(args) {
      this.$refs.chatUIFooter.innerText = args.transcript;
    },
    // Toggles button visibility when speech-to-text listening stops
    onListeningStop() {
      this.toggleButtons();
    },
    // Initializes button visibility when the speech-to-text component is created
    created() {
      this.toggleButtons();
    },
    // Handles Enter key press in the input to send the prompt without Shift
    handleEvent(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        this.sendIconClicked();
        e.preventDefault();
      }
    },
    // Toggles visibility of send and speech buttons based on whether the input has text
    toggleButtons() {
      const chatUIFooter = this.$refs.chatUIFooter;
      const sendButton = this.$refs.chatUISendButton?.$el;
      const speechButton = this.$refs.speechToTextObj?.$el;
      if (!chatUIFooter || !sendButton || !speechButton) {
        return;
      }
      const hasText = chatUIFooter.innerText.trim() !== '';
      sendButton.classList.toggle('visible', hasText);
      speechButton.classList.toggle('visible', !hasText);
      if (
        !hasText &&
        (chatUIFooter.innerHTML === '<br>' ||
          chatUIFooter.innerHTML.trim() === '')
      ) {
        chatUIFooter.innerHTML = '';
      }
    },
    // Executes the current prompt from the footer input and clears it
    sendIconClicked() {
      const editor = this.$refs.chatUIFooter;
      const messageContent = editor?.innerText || '';
      if (messageContent.trim()) {
        this.$refs.chatUIInstance.addMessage({
          author: this.currentUser,
          text: messageContent
        });
        editor.innerText = '';
        this.toggleButtons();
      }
    }
  },
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
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