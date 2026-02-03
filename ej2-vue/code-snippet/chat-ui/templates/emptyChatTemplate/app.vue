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

.empty-chat-text {
  font-size: 15px;
  text-align: center;
  margin-top: 90px;
}
</style>
