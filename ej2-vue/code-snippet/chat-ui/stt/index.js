import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
  el: '#app',
  template: `
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
`,

  data: function () {
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
          author: this.currentUserModel,
          text: messageContent
        });
        editor.innerText = '';
        this.toggleButtons();
      }
    }
  },
});