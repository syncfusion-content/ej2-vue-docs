<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" :loadOnDemand="true" :messages="chatMessages" :created="created"></ejs-chatui>
  </div>
</template>

<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama",
      },
      chatMessages: []
    };
  },
  methods: {
    created() {
      this.chatMessages = Array.from({ length: 150 }, (_, i) => ({
        text: i % 2 === 0
          ? `Message ${i + 1} from Michale`
          : `Message ${i + 1} from Albert`,
        author: (i % 2 === 0) ? this.michaleUser : this.currentUser
      }));
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
