<template>
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui ref="aiassist" :user="currentUser" :auto-scroll-to-bottom="true">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Want to get coffee tomorrow?"></ejs-message>
        <ejs-message :author="michaleUser" text="Sure! What time?"></ejs-message>
        <ejs-message :author="currentUser" text="How about 10 AM?"></ejs-message>
        <ejs-message :author="michaleUser" text="Perfect"></ejs-message>
        <ejs-message :author="currentUser" text="See you!"></ejs-message>
        <ejs-message :author="michaleUser" text="Bye!"></ejs-message>
      </ejs-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EjsMessages, MessageDirective as EjsMessage } from "@syncfusion/ej2-vue-interactive-chat";

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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
