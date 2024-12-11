<template>
  <div id='container' style="height: 400px; width: 400px;">
    <br>
    <ejs-chatui :messages="chatMessages" :user="currentUser"></ejs-chatui>
  </div>
</template>
<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data() {
    const albert = {
      id: "user1",
      user: "Albert",
    };

    const michaleUser = {
      id: "user2",
      user: "Michale Suyama",
    };

    return {
      currentUser: albert,
      chatMessages: [
        {
          id: "msg1",
          author: albert,
          text: "Hi there! How's it going?",
        },
        {
          id: "msg2",
          author: michaleUser,
          text: "Hey! I'm doing well, thanks. How about you?",
        },
        {
          id: "msg3",
          author: albert,
          text: "Mostly the usual stuff. I did start a new hobby - painting!",
        },
      ],
    };
  },
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
