<template>
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui :user="currentUser" :typingUsers="typingUsers" locale="de">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></ejs-message>
        <ejs-message :author="michaleUser" text="Yes, the design phase is complete."></ejs-message>
        <ejs-message :author="currentUser" text="I’ll review it and send feedback by today."></ejs-message>
      </ejs-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EjsMessages, MessageDirective as EjsMessage } from "@syncfusion/ej2-vue-interactive-chat";
import { L10n } from '@syncfusion/ej2-base';

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

const typingUsers = [ michaleUser ];

L10n.load({
  'de': {
    "chat-ui": {
      "oneUserTyping": "{0} tippt",
      "twoUserTyping": "{0} und {1} tippen",
      "threeUserTyping": "{0}, {1} und {2} andere tippen gerade",
      "multipleUsersTyping": "{0}, {1} und {2} andere tippen gerade"
    }
  }
});

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
