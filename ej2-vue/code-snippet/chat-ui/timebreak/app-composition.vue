<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :showTimeBreak="true">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" :timeStamp="new Date('December 25, 2024 7:30')"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." :timeStamp="new Date('December 25, 2024 8:00')"></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." :timeStamp="new Date('December 25, 2024 11:00')"></e-message>
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
</style>
