<template>
  <div id="mention-trigger" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui 
      :user="currentUser"
      :mentionUsers="mentionUsers"
      mentionTriggerChar="@"
    >
      <e-messages>
        <e-message 
          v-for="(message, index) in chatMessages" 
          :key="index"
          :author="message.author"
          :text="message.text"
        ></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { enableRipple } from '@syncfusion/ej2-base';
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from "@syncfusion/ej2-vue-interactive-chat";

enableRipple(true);

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

const chatMessages = [
  {
    author: currentUser,
    text: "Hi Michale, are we on track for the deadline?"
  },
  {
    author: michaleUser,
    text: "Yes, the design phase is complete."
  },
  {
    author: currentUser,
    text: "I’ll review it and send feedback by today."
  }
];

const mentionUsers = [
  currentUser,
  michaleUser
];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
</style>