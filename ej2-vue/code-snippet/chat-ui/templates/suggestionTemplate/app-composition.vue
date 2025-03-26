<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui id="suggestionTemplate" :suggestions="suggestions" suggestionTemplate="suggestionTemplate" :user="currentUser">
      <template v-slot:suggestionTemplate="{data}">
        <div class='suggestion-item active'>
          <div class="content">{{data.suggestion}}</div>
        </div>
      </template>
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?" ></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete." ></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from "@syncfusion/ej2-vue-interactive-chat";

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

#suggestionTemplate .e-suggestion-list li {
  padding: 0;
  border: none;
  box-shadow: none;
}

#suggestionTemplate .suggestion-item {
  display: flex;
  align-items: center;
  background-color: #87b6fb;
  color: black;
  padding: 4px;
  gap: 5px;
  height: 30px;
  border-radius: 5px;
}

#suggestionTemplate .suggestion-item .content {
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
