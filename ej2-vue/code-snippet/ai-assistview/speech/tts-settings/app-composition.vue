<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview 
      id='aiAssistView' 
      ref="aiassist" 
      :prompts="promptsData"
      :responseToolbarSettings="responseToolbarSettings"
      :textToSpeechSettings="textToSpeechSettings"
      :prompt-request="onPromptRequest"
    ></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const promptsData = [
  {
    prompt: "What is AI?",
    response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making."
  }
];

const responseToolbarSettings = {
  items: [
    { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
    { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
    { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' }
  ]
};

const textToSpeechSettings = {
  language: 'en-US',
  speechPitch: 1,
  speechRate: 1,
  volume: 1
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
