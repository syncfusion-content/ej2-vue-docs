<template>
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
</template>

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { marked } from 'marked';

export default {
components: {
  'ejs-aiassistview': AIAssistViewComponent,
},
data() {
  return {
    geminiApiKey: '', // Replace with your Gemini API key
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
      try {
        const genAI = new GoogleGenerativeAI(this.geminiApiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(args.prompt);
        const response = result.response.text();
        this.$refs.aiAssist.ej2Instances.addPromptResponse(marked.parse(response));
      } catch (error) {
        this.$refs.aiAssist.ej2Instances.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
      }
    }, 1000);
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
