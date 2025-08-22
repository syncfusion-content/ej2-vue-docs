<template>
  <div id="mention-user" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui 
      :user="currentUser"
      :mentionUsers="mentionUsers"
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

<script>
import { enableRipple } from '@syncfusion/ej2-base';
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

enableRipple(true);

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
        user: "Albert"
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama"
      },
      chatMessages: [
        {
          author: {
            id: "user1",
            user: "Albert"
          },
          text: "Hi Michale, are we on track for the deadline?"
        },
        {
          author: {
            id: "user2",
            user: "Michale Suyama"
          },
          text: "Yes, the design phase is complete."
        },
        {
          author: {
            id: "user1",
            user: "Albert"
          },
          text: "I’ll review it and send feedback by today."
        }
      ],
      mentionUsers: [
        {
          id: "user1",
          user: "Albert"
        },
        {
          id: "user2",
          user: "Michale Suyama"
        }
      ]
    };
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
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
</style>