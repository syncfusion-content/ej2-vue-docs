<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :showTimeBreak="true" id="timeBreakTemplate" timeBreakTemplate="timeBreakTemplate" :user="currentUser">
      <template v-slot:timeBreakTemplate="{data}">
        <div class="timebreak-wrapper">{{getFormattedTime(data)}}</div>
      </template>
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" :timeStamp="new Date('December 25, 2024 7:30')"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." :timeStamp="new Date('December 25, 2024 8:00')"></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today." :timeStamp="new Date('December 25, 2024 11:00')"></e-message>
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
        user: "Albert"
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama"
      }
    };
  },
  methods: {
    getFormattedTime(context) {
      var date = new Date(context.messageDate);
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      var hours = date.getHours();
      var minutes = String(date.getMinutes()).padStart(2, '0');
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
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
