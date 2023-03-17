

<template>
  <div class="msg-custom-section">
    <div class="content-section">
      <h4>Content Alignment</h4>
      <ejs-message id="msg_content_left" content="Your license has been activated successfully" severity="Success"></ejs-message>
      <ejs-message id="msg_content_center" content="The license will expire today" cssClass="e-content-center" severity="Warning"></ejs-message>
      <ejs-message id="msg_content_right" content="The license key is invalid" cssClass="e-content-right" severity="Error"></ejs-message>
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
</style>


