<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
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
    response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.",
    regeneratedResponses: [
      "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines programmed to think and learn like humans.",
      "Artificial Intelligence is the development of computer systems capable of performing tasks that typically require human intelligence.",
      "AI is a branch of computer science focused on building machines that can perform tasks requiring human-like intelligence."
    ]
  }
];

const responseToolbarSettings = {
  items: [
    { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
    { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
    { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
    { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
  ]
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
    aiassist.value.ej2Instances.addPromptResponse(defaultResponse);
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>
