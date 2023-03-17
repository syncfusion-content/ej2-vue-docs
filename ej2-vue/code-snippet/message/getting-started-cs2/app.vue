

<template>
  <div class="msg-custom-section">
    <div class="content-section">
      <h4>Rounded</h4>
      <ejs-message content="The license will expire today" cssClass="rounded" severity="Warning"></ejs-message>
      <h4>Square</h4>
      <ejs-message content="The license key is invalid" cssClass="square" severity="Error"></ejs-message>
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
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";

  .msg-custom-section .content-section {
    margin: 0 auto;
    max-width: 400px;
    padding-top: 10px;
  }

  .msg-custom-section .e-message {
    margin: 10px 0;
  }

  .msg-custom-section .e-message.rounded {
    border-radius: 5px;
  }

  .msg-custom-section .e-message.square {
    border-radius: 1px;
  }
</style>


