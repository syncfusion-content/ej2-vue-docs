<template>
  <div style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :enableRipple="true" :mentionUsers="mentionUsers" headerText="TeamSync Professionals">
<e-messages>
        <e-message :author="currentUser" text="Want to get coffee tomorrow?" ></e-message>
        <e-message :author="michaleUser" text="Sure! What time?" ></e-message>
        <e-message :author="currentUser" text="{0} How about 10 AM?" :mentionUsers="[michaleUser]" ></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script>
import { enableRipple } from '@syncfusion/ej2-base';
import { ChatUIComponent, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";

enableRipple(true);

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
      },
      mentionUsers: [
        {
          id: "user1",
          user: "Albert"
        },
        {
          id: "user2",
          user: "Michale Suyama"
        }
      ]
    };
  }
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
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
</style>