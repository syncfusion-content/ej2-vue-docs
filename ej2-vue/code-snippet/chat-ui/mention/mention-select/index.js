import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from "@syncfusion/ej2-base";

// Enable ripple effect
enableRipple(true);

Vue.use(ChatUIPlugin);

new Vue({
  el: '#app',
  template: `
    <div id='mention-select' style="height: 380px; width: 450px; margin: 0 auto;">
      <ejs-chatui :user="currentUser"
        :mentionUsers="mentionUsers" 
        :mentionSelect="mentionSelect" 
      ></ejs-chatui>
    </div>
  `,

  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert",
      },
      mentionUsers: [
        {
          id: "user1",
          user: "Albert"
        },
        {
          id: "user2",
          user: "Michale Suyama"
        }
      ],
      // Mention select handler
      mentionSelect: (args) => {
        // Your required action here
      }
    };
  }
});