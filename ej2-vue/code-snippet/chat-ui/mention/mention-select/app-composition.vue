<template>
  <div style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUserModel"
      :mentionUsers="mentionUsers" 
      :mentionSelect="mentionSelect" 
    ></ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from "@syncfusion/ej2-base";

// Enable ripple effect
enableRipple(true);
const currentUserModel = {
  id: "user1",
  user: "Albert"
};
const michaleUserModel = {
  id: "user2",
  user: "Michale Suyama"
};

const mentionUsers = [currentUserModel, michaleUserModel];

const mentionSelect = (args) => {
  // Your required action here
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
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
</style>