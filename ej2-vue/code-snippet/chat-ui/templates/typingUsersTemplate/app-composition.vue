<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui id="typingUsersTemplate" :typingUsers="typingUsers" typingUsersTemplate="typingUsersTemplate" :user="currentUser">
      <template v-slot:typingUsersTemplate="{data}">
        <div class="typing-wrapper" v-html="getTypingUsersList(data) + ` are typing...`"></div>
      </template>
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." ></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from "@syncfusion/ej2-vue-interactive-chat";

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

const reenaUser = {
  id: "user3",
  user: "Reena"
};

const typingUsers = [ michaleUser, reenaUser ];

const getTypingUsersList = (context) => {
  if (!context.users || context.users.length === 0) {
    return '';
  }

  let usersList = context.users.map((user, i) => {
    let isLastUser = i === context.users.length - 1;
    return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
  }).join(' ');
  return usersList
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
