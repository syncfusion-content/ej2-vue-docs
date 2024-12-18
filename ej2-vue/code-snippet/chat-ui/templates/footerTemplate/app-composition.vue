<template>
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui ref="chatInstance" id="footerTemplate" footerTemplate="footerTemplate" :user="currentUser">
      <template v-slot:footerTemplate="">
        <div class="custom-footer">
          <input id="chatTextArea" class="e-input" placeholder="Type your message..."></input>
          <button id="sendMessage" class="e-btn e-primary"@click="buttonClick">
            <span class="e-icons e-send-1"></span>
          </button>
        </div>
      </template>
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></ejs-message>
        <ejs-message :author="michaleUser" text="Yes, the design phase is complete." ></ejs-message>
        <ejs-message :author="currentUser" text="I’ll review it and send feedback by today." ></ejs-message>
      </ejs-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EjsMessages, MessageDirective as EjsMessage } from "@syncfusion/ej2-vue-interactive-chat";

let chatInstance = ref(null);

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

const buttonClick= function() {
  const textArea = document.getElementById('chatTextArea');
  if (textArea && textArea?.value.length > 0) {
    let value = textArea.value;
    textArea.value = '';
    chatInstance.value.addMessage(
    {
      author: michaleUser,
      text: value
    });
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
