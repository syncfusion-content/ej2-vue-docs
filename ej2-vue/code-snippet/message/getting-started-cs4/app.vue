

<template>
  <ejs-message id="msg" :content="content"></ejs-message>
</template>
<style>
  .e-message {
    margin: 100px;
  }
</style>
<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);
export default {
  name: "app",
  data() {
    return {
      content: "Please read the comments carefully"
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";
</style>


