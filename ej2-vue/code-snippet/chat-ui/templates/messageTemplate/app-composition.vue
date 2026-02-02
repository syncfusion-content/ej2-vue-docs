<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui id="messageTemplate" messageTemplate="messageTemplate" :user="currentUser">
      <template v-slot:messageTemplate="{data}">
        <div class="message-items e-card">
          <div class="message-text">{{data.message.text}}</div>
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

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";

#messageTemplate .e-right .message-items {
  border-radius: 16px 16px 2px 16px;
  background-color: #c5ffbf;
}

#messageTemplate .e-left .message-items {
  border-radius: 16px 16px 16px 2px;
  background-color: #f5f5f5;
}

#messageTemplate .message-items {
  padding: 5px;
}
</style>
