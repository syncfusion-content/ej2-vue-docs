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

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';

export default {
components: {
  'ejs-aiassistview': AIAssistViewComponent,
},
data() {
  return {
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
        this.stopStreaming = false;
        this.streamResponse(responseText);
      })
      .catch(error => {
        this.$refs.aiAssist.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
        this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
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
