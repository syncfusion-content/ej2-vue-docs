<template>
  <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser">
       <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" />
        <e-message :author="michaleUser" text="Yes, the design phase is complete." />
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." />
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const currentUser = {
  id: 'user1',
  user: 'Albert',
  statusIconCss: 'e-icons e-user-online'
};

const michaleUser = {
  id: 'user2',
  user: 'Michale Suyama',
  statusIconCss: 'e-icons e-user-away'
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
</style>
