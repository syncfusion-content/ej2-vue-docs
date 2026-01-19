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
import { marked } from 'marked';
 
const LITELLM_HOST = 'http://localhost:4000';
const LITELLM_API_KEY = ''; // If your LiteLLM proxy uses a master_key, set this to the same value; otherwise, leave as empty string
 
const suggestions = ref([
  'How do I prioritize my tasks?',
  'How can I improve my time management skills?',
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
  const url = `${LITELLM_HOST.replace(/\/$/, '')}/v1/chat/completions`;

  const headers = {
    'Content-Type': 'application/json',
    ...(LITELLM_API_KEY ? { Authorization: `Bearer ${LITELLM_API_KEY}` } : {}),
  };

  const requestBody = {
    model: 'openai/gpt-4o-mini', // Must match model_name in config.yaml
    messages: [{ role: 'user', content: args.prompt }],
    temperature: 0.7,
    max_tokens: 300,
    stream: false,
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const reply = await res.json();
    const responseText = reply.choices?.[0]?.message?.content?.trim() || 'No response received.';
    stopStreaming.value = false;
    await streamResponse(responseText);
  } catch (error) {
    console.error(error);
    aiAssist.value.ej2Instances.addPromptResponse(
      '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
    );
    stopStreaming.value = true;
  }
};
 
const stopRespondingClick = () => {
  stopStreaming.value = true;
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

</style>