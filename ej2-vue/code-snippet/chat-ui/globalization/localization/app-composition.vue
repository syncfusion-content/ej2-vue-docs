<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :typingUsers="typingUsers" locale="de">
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
</style>
