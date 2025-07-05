<template>
  <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :messageToolbarSettings="toolbarSettings">
     <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today."></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {ChatUIComponent as EjsChatui,  MessagesDirective as EMessages,  MessageDirective as EMessage} from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const chatui = ref(null);

const currentUser = { id: 'user1', user: 'Albert' };
const michaleUser = { id: 'user2', user: 'Michale Suyama' };

const toolbarSettings = {
  items: [
    { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
    { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
    { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
    { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
    { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
  ]
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
