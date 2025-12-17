<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui emptyChatTemplate="emptyChatTemplate" :user="currentUser">
      <template v-slot:emptyChatTemplate="">
        <div class="empty-chat-text">
            <h4><span class="e-icons e-comment-show"></span></h4>
            <h4>No Messages Yet</h4>
            <p>Start a conversation to see your messages here.</p>
          </div>
      </template>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";

const currentUser = {
  id: "user1",
  user: "Albert"
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

.empty-chat-text {
  font-size: 15px;
  text-align: center;
  margin-top: 90px;
}
</style>
