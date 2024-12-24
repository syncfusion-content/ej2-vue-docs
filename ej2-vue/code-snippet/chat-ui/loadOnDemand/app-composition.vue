<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :loadOnDemand="true" :messages="chatMessages"></ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

let chatMessages = [];
for (let i = 1; i <= 150; i++) {
  chatMessages.push({
    text: i % 2 === 0 
        ? `Message ${i} from Michale` 
        : `Message ${i} from Albert`,
    author: i % 2 === 0 ? michaleUser : currentUser
  });
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
