<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompt-suggestions="promptSuggestions" :prompt-request="onPromptRequest" ref="aiassist"></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const onPromptRequest = (args) => {
  setTimeout(() => {
    let response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
    let response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(args.prompt === aiassist.value.promptSuggestions[0] ? response1 : args.prompt === aiassist.value.promptSuggestions[1] ? response2 : defaultResponse);
  }, 1000);
};

const promptSuggestions = [
  "Best practices for clean, maintainable code?",
  "How to optimize code editor for speed?"
];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
