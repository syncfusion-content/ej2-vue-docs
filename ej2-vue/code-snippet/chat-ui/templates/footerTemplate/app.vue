<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui ref="chatInstance" id="footerTemplate" footerTemplate="footerTemplate" :user="currentUser">
      <template v-slot:footerTemplate="">
        <div class="custom-footer">
          <input id="chatTextArea" class="e-input" placeholder="Type your message..."></input>
          <button id="sendMessage" class="e-btn e-primary"@click="buttonClick">
            <span class="e-icons e-send-1"></span>
          </button>
        </div>
      </template>
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." ></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'e-messages': MessagesDirective,
    'e-message': MessageDirective
  },
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama",
      }
    };
  },
  methods: {
    buttonClick: function () {
      let defaultChat = this.$refs.chatInstance.ej2Instances;
      const textArea = document.getElementById('chatTextArea');
      if (textArea && textArea?.value.length > 0) {
        let value = textArea.value;
        textArea.value = '';
        defaultChat.addMessage(
        {
          author: this.michaleUser,
          text: value
        });
      }
    }
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

#footerTemplate.e-chat-ui .e-footer {
  margin: unset;
  align-self: auto;
}

.custom-footer {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: transparent;
}

#chatTextArea {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 0;
  padding: 5px;
}
</style>
