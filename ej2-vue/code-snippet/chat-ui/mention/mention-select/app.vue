<template>
  <div style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser"
      :mentionUsers="mentionUsers" 
      :mentionSelect="mentionSelect" 
    ></ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from "@syncfusion/ej2-base";

// Enable ripple effect
enableRipple(true);

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      // Define user models for mentions
      mentionUsers: [
        {
          id: "user1",
          user: "Albert"
        },
        {
          id: "user2",
          user: "Michale Suyama"
        }
      ],
      mentionSelect: (args) => {
        // Your required action here
      }
    };
  },
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