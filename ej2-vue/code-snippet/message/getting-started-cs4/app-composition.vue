<template>
  <ejs-message id="msg" :content="content"></ejs-message>
</template>
<style>
  .e-message {
    margin: 100px;
  }
</style>
<script setup>
import { MessageComponent as EjsMessage } from "@syncfusion/ej2-vue-notifications";

const content = "Please read the comments carefully";

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/message/index.css";
</style>