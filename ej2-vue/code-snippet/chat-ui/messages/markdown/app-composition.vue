<template>
  <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui
      ref="chatui"
      :user="currentUser"
      :suggestions="suggestionTexts"
      :messages="chatMessages"
      headerText="Chat UI with Markdown"
      @messageSend="onMessageSend"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChatUIComponent as EjsChatui } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked'; 

const currentUser = { id: 'user1', user: 'Albert' };
const michaleUser = { id: 'user2', user: 'Michale Suyama' };
declare var DOMPurify: any;
const suggestions = [
  {
    displayText: 'Share quick link',
    markdownText: 'Check out our [project dashboard](https://dashboard.example.com) for updates!'
  },
  {
    displayText: 'Emphasize priority',
    markdownText: 'This is **high priority** and needs _immediate attention_.'
  }
];
const suggestionTexts = suggestions.map(s => s.displayText);

const chatMessages = ref([
  {
    // Use marked.parse for safe, always-string HTML output
    text: marked.parse('Hey Michale, did you review the _new API documentation_?'),
    author: currentUser,
    timeStamp: new Date('2024-01-15T09:30:00')
  },
  {
    text: marked.parse('Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'),
    author: michaleUser,
    timeStamp: new Date('2024-01-15T09:32:00')
  }
]);

const onMessageSend = (args) => {
  args.cancel = true;
  const suggestion = suggestions.find(s => s.displayText === args.message.text);
  const messageText = suggestion ? suggestion.markdownText : args.message.text;
  const parsedText = DOMPurify.sanitize(marked.parse(messageText));
  chatMessages.value = [
    ...chatMessages.value,
    {
      text: parsedText, 
      author: currentUser,
      timeStamp: new Date()
    }
  ];
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