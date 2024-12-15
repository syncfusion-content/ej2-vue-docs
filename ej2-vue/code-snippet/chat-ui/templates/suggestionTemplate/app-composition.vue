<template>
  <div id='container' style="height: 380px; width: 450px;">
    <ejs-chatui id="suggestionTemplate" :suggestions="suggestions" suggestionTemplate="suggestionTemplate" :user="currentUser">
      <template v-slot:suggestionTemplate="{data}">
        <div class='suggestion-item active'>
          <div class="content">{{data.suggestion}}</div>
        </div>
      </template>
      <ejs-messages>
        <ejs-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></ejs-message>
        <ejs-message :author="michaleUser" text="Yes, the design phase is complete." ></ejs-message>
      </ejs-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EjsMessages, MessageDirective as EjsMessage } from "@syncfusion/ej2-vue-interactive-chat";

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

const suggestions = ["Okay will check it", "Sounds good!"];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
