<template>
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui :user="currentUser" :showTimeStamp="false">
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" :timeStamp="new Date('December 25, 2024 7:30')"></ejs-message>
        <ejs-message :author="michaleUser" text="Yes, the design phase is complete." :timeStamp="new Date('December 25, 2024 8:00')"></ejs-message>
        <ejs-message :author="currentUser" text="I’ll review it and send feedback by today." :timeStamp="new Date('December 25, 2024 11:00')"></ejs-message>
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
