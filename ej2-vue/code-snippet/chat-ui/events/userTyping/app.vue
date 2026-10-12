<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :userTyping="userTyping" :user="currentUser"></ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

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
      userTyping: () => {
        // Your required action here
      }
    };
  },
};
</script>

<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css';
</style>
