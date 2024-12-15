<template>
  <div id='container' style="height: 380px; width: 450px;">
    <button id="scrollToBottom" style="margin-bottom: 10px;" @click="buttonClick" class="e-btn e-primary">Scroll To Bottom</button>
    <ejs-chatui height="360px" ref="chatInstance" :user="currentUser">
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

<script>
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'ejs-messages': MessagesDirective,
    'ejs-message': MessageDirective
  },
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama",
      }
    };
  },
  methods: {
    buttonClick: () => {
      let defaultChat = this.$refs.chatInstance.ej2Instances;
      defaultChat.scrollToBottom();
    }
  }
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
