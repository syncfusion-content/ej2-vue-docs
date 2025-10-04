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

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';

export default {
components: {
  'ejs-aiassistview': AIAssistViewComponent,
},
data() {
  return {
    azureOpenAIApiKey: 'YOUR_AZURE_OPENAI_API_KEY', // replace your key
    azureOpenAIEndpoint: 'YOUR_AZURE_OPENAI_API_ENDPOINT', // replace your endpoint
    azureOpenAIApiVersion: 'YOUR_AZURE_OPENAI_API_VERSION', // replace to match your resource
    azureDeploymentName:'YOUR_DEPLOYMENT_NAME', // your Azure OpenAI deployment name
    stopStreaming: false,
    suggestions: [
      'What are the best tools for organizing my tasks?',
      'How can I maintain work-life balance effectively?',
    ],
    toolbarSettings: {
      items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
      itemClicked: () => {
        this.$refs.aiAssist.ej2Instances.prompts = [];
        this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
        this.stopStreaming = true;
      },
    },
  };
},
methods: {
  async streamResponse(response) {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        this.$refs.aiAssist.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
        this.$refs.aiAssist.ej2Instances.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
    this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
  },
  onPromptRequest(args) {
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
        messages: [{ role: 'user', content: args.prompt }],
        max_tokens: 150,
        stream: false,
      }),
    })
      .then(response => response.json())
      .then(reply => {
        const responseText = reply.choices[0].message.content.trim() || 'No response received.';
        this.stopStreaming = false;
        this.streamResponse(responseText);
      })
      .catch(error => {
        this.$refs.aiAssist.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',true);
        this.stopStreaming = true;
      });
  },
  stopRespondingClick() {
    this.stopStreaming = true;
  },
},
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
