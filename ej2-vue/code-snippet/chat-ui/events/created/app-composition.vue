<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :created="created"></ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";

const created = () => {
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
</style>
