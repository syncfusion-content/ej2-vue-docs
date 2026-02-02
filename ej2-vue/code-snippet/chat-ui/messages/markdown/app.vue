<template>
  <div style="height: 380px; width: 450px;">
    <ejs-chatui
      id="chatUI"
      :user="currentUserModel"
      headerText="Chat UI with Markdown"
      :suggestions="suggestionTexts"
      :messages="chatMessages"
      @messageSend="onMessageSend"
    ></ejs-chatui>
  </div>
</template>

<script>
import { marked } from 'marked';
import { ChatUIComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
declare var DOMPurify: any;

export default {
  name: 'App',
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data() {
    const currentUserModel = {
      id: 'user1',
      user: 'Albert'
    };
    
    const michaleUserModel = {
      id: 'user2',
      user: 'Michale Suyama'
    };
    
    const suggestions = [
      {
        displayText: 'Share quick link',
        markdownText: 'Check out our [project dashboard](https://dashboard.example.com) for updates!',
      },
      {
        displayText: 'Emphasize priority',
        markdownText: 'This is **high priority** and needs _immediate attention_.',
      }
    ];
    
    return {
      currentUserModel,
      michaleUserModel,
      suggestions,
      suggestionTexts: suggestions.map(s => s.displayText),
      chatMessages: [
        {
          author: currentUserModel,
          text: marked.parse('Hey Michale, did you review the _new API documentation_?'),
          timeStamp: new Date('2024-01-15T09:30:00')
        },
        {
          author: michaleUserModel,
          text: marked.parse('Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'),
          timeStamp: new Date('2024-01-15T09:32:00')
        }
      ]
    };
  },
  methods: {
    onMessageSend(args) {
      args.cancel = true;
      const suggestion = this.suggestions.find(s => s.displayText === args.message.text);
      const messageText = suggestion ? suggestion.markdownText : args.message.text;
      const parsedText = DOMPurify.sanitize(marked.parse(messageText));
      const newMessage = {
        text: parsedText,
        author: this.currentUserModel,
        timeStamp: new Date()
      };
      this.chatMessages = [...this.chatMessages, newMessage];
    }
  }
};
</script>

<style>
@import '@syncfusion/ej2-base/styles/tailwind3.css';
@import '@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '@syncfusion/ej2-popups/styles/tailwind3.css';
@import '@syncfusion/ej2-interactive-chat/styles/tailwind3.css';
@import '@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
</style>