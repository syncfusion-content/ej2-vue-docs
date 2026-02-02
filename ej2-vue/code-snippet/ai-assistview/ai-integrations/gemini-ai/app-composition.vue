<template>
<div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
<ejs-aiassistview
      ref="aiAssist"
      :promptSuggestions="suggestions"
      :toolbarSettings="toolbarSettings"
      bannerTemplate="bannerTemplate"
      :prompt-request="onPromptRequest"
      :stop-responding-click="stopRespondingClick"
>
<template v-slot:bannerTemplate>
<div class="banner-content">
<div class="e-icons e-assistview-icon"></div>
<h3>How can I help you today?</h3>
</div>
</template>
</ejs-aiassistview>
</div>
</template>
 
<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { marked } from 'marked';
 
const geminiApiKey = ''; // Replace with your Gemini API key (WARNING: Do not expose in client-side code for production)
const genAI = new GoogleGenerativeAI(geminiApiKey);
 
const suggestions = ref([
  'What are the best tools for organizing my tasks?',
  'How can I maintain work-life balance effectively?',
]);
 
const stopStreaming = ref(false);
 
const toolbarSettings = {
  items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
  itemClicked: (args) => {
    if (args.item.iconCss === 'e-icons e-refresh') {
      aiAssist.value.ej2Instances.prompts = [];
      aiAssist.value.ej2Instances.promptSuggestions = suggestions.value;
      stopStreaming.value = true;
    }
  },
};
 
const aiAssist = ref(null);
 
const streamResponse = async (response) => {
  let lastResponse = '';
  const responseUpdateRate = 10;
  let i = 0;
  const responseLength = response.length;
  while (i < responseLength && !stopStreaming.value) {
    lastResponse += response[i];
    i++;
    if (i % responseUpdateRate === 0 || i === responseLength) {
      const htmlResponse = marked.parse(lastResponse);
      aiAssist.value.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
      aiAssist.value.ej2Instances.scrollToBottom();
    }
    await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
  }
  aiAssist.value.ej2Instances.promptSuggestions = suggestions.value;
};
 
const onPromptRequest = async (args) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); //Replace Your Model Name Here
    const result = await model.generateContent(args.prompt);
    const response = result.response.text();
    stopStreaming.value = false;
    await streamResponse(response);
  } catch (error) {
    aiAssist.value.ej2Instances.addPromptResponse(
      '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
    );
    stopStreaming.value = true;
  }
};
 
const stopRespondingClick = () => {
  stopStreaming.value = true;
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>
