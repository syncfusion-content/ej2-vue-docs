import Vue from 'vue';
import { enableRipple } from '@syncfusion/ej2-base';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";

enableRipple(true);
Vue.use(ChatUIPlugin);

new Vue({
  el: '#app',
  template: `
    <div id='mention-trigger' style="height: 380px; width: 450px; margin: 0 auto;">
      <ejs-chatui 
        :user="currentUser"
        :mentionUsers="mentionUsers"
        mentionTriggerChar="@"
      >
        <e-messages>
          <e-message 
            v-for="(message, index) in chatMessages" 
            :key="index"
            :author="message.author"
            :text="message.text"
          ></e-message>
        </e-messages>
      </ejs-chatui>
    </div>
  `,
  data() {
    return {
      currentUser: {
        id: "user1",
        user: "Albert"
      },
      michaleUser: {
        id: "user2",
        user: "Michale Suyama"
      },
      chatMessages: [
        {
          author: {
            id: "user1",
            user: "Albert"
          },
          text: "Hi Michale, are we on track for the deadline?"
        },
        {
          author: {
            id: "user2",
            user: "Michale Suyama"
          },
          text: "Yes, the design phase is complete."
        },
        {
          author: {
            id: "user1",
            user: "Albert"
          },
          text: "I’ll review it and send feedback by today."
        }
      ],
      mentionUsers: [
        {
          id: "user1",
          user: "Albert"
        },
        {
          id: "user2",
          user: "Michale Suyama"
        }
      ]
    };
  }
});