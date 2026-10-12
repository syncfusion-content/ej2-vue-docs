<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :headerToolbar="headerToolbar">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete."></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today."></e-message>
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

const headerToolbar = {
  items: [
    { iconCss: 'e-icons e-refresh', align: 'Right', visible: false },
    { iconCss: 'e-icons e-user', align: 'Right' }
  ]
};

</script>

<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css';
</style>
