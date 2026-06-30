<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <br>
    <ejs-chatui :user="currentUser"></ejs-chatui>
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
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css";
</style>
