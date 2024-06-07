<template>
  <ejs-message id="msg" :content="content"></ejs-message>
</template>
<style>
  .e-message {
    margin: 100px;
  }
</style>
<script>
import { MessageComponent } from "@syncfusion/ej2-vue-notifications";

export default {
name: "App",
components: {
"ejs-message":MessageComponent
  },

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