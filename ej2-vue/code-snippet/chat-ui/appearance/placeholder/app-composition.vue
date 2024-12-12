<template>
  <div id='container' style="height: 400px; width: 400px;">
    <ejs-chatui placeholder="Start typing..." :user="currentUser">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi, thinking of painting this weekend"></ejs-message>
        <ejs-message :author="michaleUser" text="That’s fun! What will you paint?"></ejs-message>
        <ejs-message :author="currentUser" text="Maybe landscapes."></ejs-message>
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
