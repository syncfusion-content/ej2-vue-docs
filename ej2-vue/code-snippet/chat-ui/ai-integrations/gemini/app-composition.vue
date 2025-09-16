<template>
  <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui
      ref="chatui"
      :user="currentUser"
      :messages="chatMessages"
      :typingUsers="typingUsers"
      headerText="Chat UI with Gemini AI"
      headerIconCss="e-icons e-ai-chat"
      :headerToolbar="headerToolbar"
      emptyChatTemplate="emptyChatTemplate"
      @messageSend="onMessageSend"
    >
      <template v-slot:emptyChatTemplate="">
        <div class="emptychat-content">
          <h3><span class="e-icons e-assistview-icon"></span></h3>
          <div class="emptyChatText" style="font-size: 16px; font-style: italic">Syncfusion Chat UI with Gemini AI</div>
        </div>
      </template>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChatUIComponent as EjsChatui } from '@syncfusion/ej2-vue-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { marked } from 'marked';

const currentUser = { id: 'user1', user: 'You' };
const aiModel = { id: 'ai', user: 'Gemini' };

const geminiApiKey = ''; // Replace with your Gemini API key

const chatMessages = ref([]);

const headerToolbar = {
  items: [
    { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' },
  ],
  itemClicked: () => {
    chatMessages.value = [];
  },
};

const typingUsers = ref([]);

const onMessageSend = async (args) => {
  args.cancel = true;

  // Add user message
  chatMessages.value = [
    ...chatMessages.value,
    {
      text: args.message.text,
      author: currentUser,
      timeStamp: new Date(),
    },
  ];

  // Show typing indicator
  typingUsers.value = [aiModel];

  try {
    if (!geminiApiKey) {
      throw new Error('Gemini API key is missing');
    }
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(args.message.text);
    const response = result.response.text();
    console.log('Gemini response:', response); // Debug log

    // Add AI response
    chatMessages.value = [
      ...chatMessages.value,
      {
        text: marked.parse(response),
        author: aiModel,
        timeStamp: new Date(),
      },
    ];
  } catch (error) {
    console.error('Error fetching Gemini response:', error);
    chatMessages.value = [
      ...chatMessages.value,
      {
        text: 'Error generating response. Please try again.',
        author: aiModel,
        timeStamp: new Date(),
      },
    ];
  } finally {
    typingUsers.value = [];
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
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
.emptychat-content {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.e-ai-chat {
  margin-top: 10px;
  font-size: 18px;
}
.e-message-content p {
  margin: 0;
  display: inline-block;
}
.e-assistview-icon {
  font-size: 24px;
}
</style>
