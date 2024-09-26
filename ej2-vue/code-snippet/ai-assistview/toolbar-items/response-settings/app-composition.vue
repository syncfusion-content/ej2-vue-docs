<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompts="promptsData" :response-toolbar-settings="responseToolbarSettings" :prompt-request="onPromptRequest" ref="aiassist"></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const promptsData = [
  {
    prompt: "What is AI?",
    response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
  }
];

const responseToolbarSettings = {
  items: [
    { type: 'Button', iconCss: 'e-icons e-download' },
    { type: 'Button', iconCss: 'e-icons e-refresh' },
    { type: 'Button', iconCss: 'e-icons e-assist-like' },
    { type: 'Button', iconCss: 'e-icons e-assist-dislike' },
  ]
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    let foundPrompt = promptsData.find((promptObj) => promptObj.prompt === args.prompt);
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
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
