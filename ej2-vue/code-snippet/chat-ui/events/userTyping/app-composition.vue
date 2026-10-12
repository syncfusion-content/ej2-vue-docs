<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :userTyping="userTyping" :user="currentUser"></ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";

const userTyping = () => {
  // Your required action here
};
const currentUser = {
  id: "user1",
  user: "Albert"
};
</script>

<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css';
</style>
