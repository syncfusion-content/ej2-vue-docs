import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
<div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
<ejs-aiassistview
  ref="aiAssist"
  :promptSuggestions="suggestions"
  :toolbarSettings="toolbarSettings"
  bannerTemplate="bannerTemplate"
  :prompt-request="onPromptRequest"
  :stop-responding-click="stopRespondingClick"
>
<template v-slot:bannerTemplate="">
<div class="banner-content">
<div class="e-icons e-assistview-icon"></div>
<h3>AI Assistance</h3>
<div>To get started, provide input or choose a suggestion.</div>
</div>
</template>
</ejs-aiassistview>
</div>
`,

  data: function () {
     return {
    openaiApiKey: '', // Replace with your Open API key
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
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.openaiApiKey}`,
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
        this.stopStreaming = false;
        this.streamResponse(responseText);
      })
      .catch(error => {
        this.$refs.aiAssist.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
        this.stopStreaming = true;
      });
  },
  stopRespondingClick() {
    this.stopStreaming = true;
  },
},
});