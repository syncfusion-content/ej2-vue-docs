<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <br>
    <ejs-chatui :user="currentUser" :enableAttachments="true"></ejs-chatui>
  </div>
</template>
<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data () {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      }
    }
  }
}
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
