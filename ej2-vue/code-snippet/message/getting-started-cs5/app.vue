

<template>
  <div class="msg-default-section">
    <div class="content-section">
      <ejs-message id="msg_default" content="Editing is restricted" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_info" content="Please read the comments carefully" severity="Info" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_success" content="Your message has been sent successfully" severity="Success" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_warning" content="There was a problem with your network connection" severity="Warning" :showIcon="showIcon"></ejs-message>
      <ejs-message id="msg_error" content="A problem occurred while submitting your data" severity="Error" :showIcon="showIcon"></ejs-message>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);
export default {
  name: "app",
  data() {
    return {
      showIcon: true
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";

  .msg-default-section .content-section {
    margin: 0 auto;
    max-width: 450px;
    padding-top: 10px;
  }

  .msg-default-section .e-message {
    margin: 10px 0;
  }
</style>


