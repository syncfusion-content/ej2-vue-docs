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
  async onPromptRequest(args) {
    setTimeout(async () => {
     let responseText = '';
        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.openaiApiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [{ role: 'user', content: args.prompt }],
              max_tokens: 150,
              stream: false
            }),
          });
          const data = await response.json();
          responseText = data.choices[0].message.content.trim() || 'No response received.';
          this.$refs.aiAssist.ej2Instances.addPromptResponse(marked.parse(responseText));
        }  catch (error) {
        this.$refs.aiAssist.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
      }
    }, 1000);
  },
}
});