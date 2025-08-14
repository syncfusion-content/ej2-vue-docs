import Vue from 'vue';
import { ChatUIPlugin, MessagesDirective, MessageDirective } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from '@syncfusion/ej2-base';
import { marked } from 'marked';

Vue.use(ChatUIPlugin);
Vue.component('e-messages', MessagesDirective);
Vue.component('e-message', MessageDirective);

enableRipple(true);

new Vue({
  el: '#app',
  template: `
    <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
      <ejs-chatui 
        :user="currentUser" 
        :toolbarSettings="toolbarSettings"
        :suggestions="suggestionTexts"
        headerText="Chat UI with Markdown"
        @messageSend="onMessageSend">
        <e-messages>
          <e-message 
            v-for="(message, index) in chatMessages" 
            :key="index"
            :author="message.author" 
            :text="message.text"
            :timeStamp="message.timeStamp">
          </e-message>
        </e-messages>
      </ejs-chatui>
    </div>
  `,
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
      toolbarSettings: {
        width: '80%'
      },
      suggestions: [
        {
          displayText: 'Share quick link',
          markdownText: 'Check out our [project dashboard](https://dashboard.example.com) for updates!',
        },
        {
          displayText: 'Emphasize priority',
          markdownText: 'This is **high priority** and needs _immediate attention_.',
        }
      ],
      chatMessages: [
        {
          author: this.currentUser,
          text: marked.parse('Hey Michale, did you review the _new API documentation_?'),
          timeStamp: new Date('2024-01-15T09:30:00')
        },
        {
          author: this.michaleUser,
          text: marked.parse('Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'),
          timeStamp: new Date('2024-01-15T09:32:00')
        }
      ]
    };
  },
  computed: {
    suggestionTexts() {
      return this.suggestions.map(s => s.displayText);
    }
  },
  methods: {
    onMessageSend(args) {
      args.cancel = true;
      const suggestion = this.suggestions.find(s => s.displayText === args.message.text);
      const messageText = suggestion ? suggestion.markdownText : args.message.text;
      const newMessage = {
        text: marked.parse(messageText),
        author: this.currentUser,
        timeStamp: new Date()
      };
      this.chatMessages.push(newMessage);
    }
  }
});