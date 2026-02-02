<template>
  <div style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :enableRipple="true" headerText="TeamSync Professionals">
      <e-messages>
        <e-message :author="currentUser" text="Hi {0}, are we on track for the deadline?" :mentionUsers="[michaleUser]"></e-message>
        <e-message :author="michaleUser" text="Yes {0}, the design phase is complete." :mentionUsers="[currentUser]"></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today."></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from '@syncfusion/ej2-base';

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

enableRipple(true);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
</style>