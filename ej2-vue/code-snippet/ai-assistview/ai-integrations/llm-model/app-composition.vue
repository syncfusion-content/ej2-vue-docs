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
          <h3>How can I help you?</h3>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>
 
<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';
 
const suggestions = ref([
  'What are the best tools for organizing my tasks?',
  'How can I maintain work-life balance effectively?',
]);
 
const aiAssist = ref(null);
const stopStreaming = ref(false);

const toolbarSettings = {
  items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }], // Added tooltip for clarity
  itemClicked: (args) => {
    if (args.item.iconCss === 'e-icons e-refresh') {
      // Clear the prompts by resetting the prompts array
      if (aiAssist.value && aiAssist.value.ej2Instances) {
        aiAssist.value.ej2Instances.prompts = [];       // This empties the messages in the UI
        aiAssist.value.ej2Instances.promptSuggestions = suggestions.value; // Reset suggestions
        stopStreaming.value = true;                     // Stop any ongoing streaming
      }
    }
  },
};
 
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
    fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          model: 'deepseek-r1',
          prompt: `### Instruction:\nRespond in up to 5 lines.\n\n### Input:\n${args.prompt}`,
          stream: false,
      })
    })
      .then(response => response.json())
      .then(reply => {
        const responseText = reply.response?.trim() || 'No response received.';
        stopStreaming.value = false;
        streamResponse(responseText);
      })
      .catch(error => {
        aiAssist.value.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
        aiAssist.value.ej2Instances.promptSuggestions = suggestions.value;
        stopStreaming.value = true;
      });
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