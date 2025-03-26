<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <button id="executePrompt" @click="buttonClick">Execute Prompt</button>
    <ejs-aiassistview id='aiAssistView' ref="aiassist" :prompt-request="onPromptRequest"></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const onPromptRequest = (args) => {
  setTimeout(() => {
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 1000);
};

const buttonClick = () => {
  aiassist.value.executePrompt('What is the current temperature?');
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

#executePrompt {
  margin-bottom: 10px;
}
</style>
