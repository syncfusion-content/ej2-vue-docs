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
  'Why do people fly in their dreams?'
];

const telemetrySettings = {
  enable: true,
  // Invoked before every report is delivered. Return the report (modified or not)
  // to deliver it, or null to suppress the report entirely.
  beforeReport: (report) => {
    report.customAttributes = { region: 'us-east-1', tenant: 'acme', beta: true };
    return report;
  }
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>
