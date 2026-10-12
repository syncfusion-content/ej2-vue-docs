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
@import '@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css';
</style>