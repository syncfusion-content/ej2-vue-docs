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
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/message/index.css";
</style>