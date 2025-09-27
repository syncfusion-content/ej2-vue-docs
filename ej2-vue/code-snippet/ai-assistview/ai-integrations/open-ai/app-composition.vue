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
<h3>AI Assistance</h3>
<div>To get started, provide input or choose a suggestion.</div>
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

const azureOpenAIApiKey: '', // replace your key
const azureOpenAIEndpoint: '', // replace your endpoint
const azureOpenAIApiVersion: '', // replace to match your resource
const azureDeploymentName: '', // your Azure OpenAI deployment name

const suggestions = ref([
  'What are the best tools for organizing my tasks?',
  'How can I maintain work-life balance effectively?',
]);
const stopStreaming = false;
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
const onPromptRequest = (args) => {
    const url= this.azureOpenAIEndpoint.replace(/\/$/, '') +
    `/openai/deployments/${encodeURIComponent(this.azureDeploymentName)}/chat/completions` +
    `?api-version=${encodeURIComponent(this.azureOpenAIApiVersion)}`;
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': azureOpenAIApiKey,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: args.prompt || 'Hi' }],
      max_tokens: 150,
      stream: false,
    }),
  })
    .then(response => response.json())
    .then(reply => {
      const responseText = reply.choices[0].message.content.trim() || 'No response received.';
      stopStreaming.value = false;
      streamResponse(responseText);
    })
    .catch(error => {
      aiAssist.value.ej2Instances.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',true);
      stopStreaming.value = true;
    });
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
