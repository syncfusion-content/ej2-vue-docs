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

<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';

// Define reactive references
const aiAssist = ref(null);
const openaiApiKey = ''; // Replace with your OpenAI API key
const suggestions = [
  'What are the best tools for organizing my tasks?',
  'How can I maintain work-life balance effectively?',
];
const toolbarSettings = {
  items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
  itemClicked: () => {
    aiAssist.value.ej2Instances.prompts = [];
    aiAssist.value.ej2Instances.promptSuggestions = suggestions.value;
  },
};

// Define prompt request handler
const onPromptRequest = async (args) => {
  setTimeout(async () => {
    let responseText = '';
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiApiKey.value}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: args.prompt }],
          max_tokens: 150,
          stream: false,
        }),
      });
      const data = await response.json();
      responseText = data.choices[0].message.content.trim() || 'No response received.';
      aiAssist.value.ej2Instances.addPromptResponse(marked.parse(responseText));
    } catch (error) {
      aiAssist.value.ej2Instances.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
      );
    }
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
