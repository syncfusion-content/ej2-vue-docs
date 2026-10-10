<template>
  <div id='container' style="height: 420px; width: 550px; margin: 0 auto;">
    <ejs-aiassistview
      id='aiAssistView'
      ref='aiassist'
      :promptSuggestions='suggestions'
      :telemetrySettings='telemetrySettings'
      :promptRequest='onPromptRequest'>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';

const aiassist = ref(null);

const suggestions = [
  'How do I set achievable goals at work?',
  'Why do people fly in their dreams?',
  'How can I mitigate the threats during product development?'
];

// Enables telemetry reporting for AI interactions
const telemetrySettings = {
  enable: true
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 1000);
};
</script>

<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/ai-assistview/index.css';
@import '@syncfusion/ej2-tailwind3-theme/styles/tooltip/index.css';
</style>
