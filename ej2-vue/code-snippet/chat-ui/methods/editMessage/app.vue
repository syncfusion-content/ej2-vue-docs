<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <button id="updateMessage" style="margin-bottom: 10px;" @click="buttonClick" class="e-btn e-primary">Update Message</button>
    <ejs-chatui height="360px" ref="chatInstance" :user="currentUser">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" id="msg1"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." id="msg2"></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." id="msg3"></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent,
    'e-messages': MessagesDirective,
    'e-message': MessageDirective
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
    buttonClick: function () {
      let defaultChat = this.$refs.chatInstance.ej2Instances;
      defaultChat.updateMessage({text: "Hi Michael, are we still on schedule to meet the deadline?", author: this.currentUser},'msg1');
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
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>
