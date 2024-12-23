<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :headerToolbar="headerToolbar">
      <e-messages>
        <e-message :author="currentUser" text="Hi Michale, are we on track for the deadline?"></e-message>
        <e-message :author="michaleUser" text="Yes, the design phase is complete."></e-message>
        <e-message :author="currentUser" text="I’ll review it and send feedback by today."></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
  <div id="dropdownTemplate">
    <ejs-dropdownbutton cssClass="custom-dropdown" iconCss="e-icons e-menu" content="Menu" :items='dropdownItems'></ejs-dropdownbutton>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from "@syncfusion/ej2-vue-interactive-chat";
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama"
};

const headerToolbar = {
  items: [
    { type: 'Input', align: 'Right', template: '#dropdownTemplate' }
  ]
};

const dropdownItems = [
  { text: 'Info' },
  { text: 'Search' },
  { text: 'Add to list' },
  { text: 'Mute' }
];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
